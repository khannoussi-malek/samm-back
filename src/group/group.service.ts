import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/users/users.service';

const relations = ['subjects', 'students'];

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    private readonly userService: UserService,
  ) {}

  create(createGroupDto: CreateGroupDto) {
    const { students, subjects, ...rest } = createGroupDto;
    const group = this.groupRepository.create(rest);
    return this.groupRepository.save(group);
  }

  async findAll(): Promise<Group[]> {
    return this.groupRepository.find({ relations });
  }

  async findOne(id: number): Promise<Group> {
    return this.groupRepository.findOne({
      where: { id },
      relations: {
        students: true,
      },
    });
  }

  /*  async update(id: number, updateGroupDto: UpdateGroupDto): Promise<Group> {
    // const students = await this.userService.findOne(updateGroupDto.students);
    const { students, ...rest } = updateGroupDto;
    await this.groupRepository.update(id, rest);
    return this.groupRepository.findOne({ where: { id } });
  }*/
  async updateGroup(groupId: number, updateGroupDto: UpdateGroupDto) {
    const { students, subjects, ...rest } = updateGroupDto;

    // Initialize the group object
    const group = await this.groupRepository.findOne({
      where: {
        id: groupId,
      },
    });

    if (!group) throw new NotFoundException('Group not found');

    if (students?.length > 0) {
      // Create a new group instance with the updated properties
      const updatedGroup = await this.groupRepository.create({
        ...group,
        ...rest,
        students: students.map((id) => ({ id })),
      });

      // Save the updated group with students
      await this.groupRepository.save({ id: groupId, ...updatedGroup });
    } else {
      // Save the updated group without modifying the students
      await this.groupRepository.update(groupId, {
        ...group,
        ...rest,
      });
    }
    if (subjects?.length > 0) {
      // Create a new group instance with the updated properties
      const updatedGroup = this.groupRepository.create({
        ...group,
        ...rest,
        subjects: subjects.map((id) => ({ id })),
      });

      // Save the updated group with students
      await this.groupRepository.save({ id: groupId, ...updatedGroup });
    } else {
      // Save the updated group without modifying the students
      await this.groupRepository.update(groupId, {
        ...group,
        ...rest,
      });
    }
  }

  async remove(id: number): Promise<void> {
    await this.groupRepository.delete(id);
  }
}
