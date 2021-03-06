import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateRoleService from '@modules/roles/services/CreateRoleService';

export default class RolesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;

      const createRole = container.resolve(CreateRoleService);

      const role = await createRole.execute({
        name,
      });

      return response.json(role);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
