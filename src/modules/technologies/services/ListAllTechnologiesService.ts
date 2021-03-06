import { injectable, inject } from 'tsyringe';
import { Technology } from '@prisma/client';
import ITechnologiesRepository from '../repositories/ITechnologiesRepository';

@injectable()
class ListAllTechnologiesService {
  constructor(
    @inject('TechnologiesRepository')
    private technologiesRepository: ITechnologiesRepository,
  ) {}

  public async execute(): Promise<Technology[]> {
    const technologies = await this.technologiesRepository.findAll();

    const technologiesWithImageUrl = technologies.map(technology => {
      return {
        ...technology,
        technology_image: `${process.env.APP_URL}/files/${technology.technology_image}`,
      };
    });

    return technologiesWithImageUrl;
  }
}

export default ListAllTechnologiesService;
