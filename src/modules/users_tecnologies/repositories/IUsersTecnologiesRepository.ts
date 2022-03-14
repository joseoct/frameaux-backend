import { UserTecnology } from '@prisma/client';
import ICreateUserTecnologyDTO from '../dtos/ICreateUserTecnologyDTO';

export default interface IUsersTecnologiesRepository {
  create(userTecnologyData: ICreateUserTecnologyDTO): Promise<UserTecnology>;
  findByUserIdTecnologyId(
    user_id: string,
    tecnology_id: string,
  ): Promise<UserTecnology>;
  update(userTecnology: UserTecnology): Promise<UserTecnology>;
  delete(userTecnologyId: UserTecnology): Promise<UserTecnology>;
}
