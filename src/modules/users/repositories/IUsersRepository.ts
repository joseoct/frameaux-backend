import { User } from '@prisma/client';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

import { UserWithRoles } from '../infra/prisma/repositories/UsersRepository';

export default interface IUsersRepository {
  findById(id: string): Promise<UserWithRoles | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAllContentCreatorsPaginated(page: number): Promise<User[]>;
  findTotalNumberContentCreators(): Promise<number>;
  findTotalNumberStudents(): Promise<number>;
  create(userData: ICreateUserDTO): Promise<User>;
  update(userData: User): Promise<User>;
}
