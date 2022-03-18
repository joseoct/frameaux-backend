import { UserTechnology } from '@prisma/client';
import ICreateStudentTechnologyDTO from '../dtos/ICreateStudentTechnologyDTO';
import ICreateContentCreatorTechnologyDTO from '../dtos/ICreateContentCreatorTechnologyDTO';

export default interface IUsersTechnologiesRepository {
  createStudentTechnology(
    studentTechnologyData: ICreateStudentTechnologyDTO,
  ): Promise<UserTechnology>;
  createContentCreatorTechnology(
    contentCreatorTechnologyData: ICreateContentCreatorTechnologyDTO,
  ): Promise<void>;
  findByUserIdTechnologyId(
    user_id: string,
    technology_id: string,
  ): Promise<UserTechnology>;
  update(userTechnology: UserTechnology): Promise<UserTechnology>;
  delete(userTechnologyId: UserTechnology): Promise<UserTechnology>;
}