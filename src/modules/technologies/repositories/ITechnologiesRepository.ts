import { Technology } from '@prisma/client';
import ICreateTechnologyDTO from '../dtos/ICreateTechnologyDTO';

export default interface ITechnologiesRepository {
  create(data: ICreateTechnologyDTO): Promise<Technology>;
  update(data: Technology): Promise<Technology>;
  findById(id: string): Promise<Technology>;
  findAllTechnologies(): Promise<Technology[]>;
  findByName(name: string): Promise<Technology>;
  findTotalNumberTechnologies(): Promise<number>;
}