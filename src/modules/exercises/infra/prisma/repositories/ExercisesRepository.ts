import IExercisesRepository from '@modules/exercises/repositories/IExercisesRepository';
import ICreateAlternativeExerciseDTO from '@modules/exercises/dtos/ICreateAlternativeExerciseDTO';
import { PrismaClient, Alternative, Sequency, Exercise } from '@prisma/client';
import ICreateSequencyExerciseDTO from '@modules/exercises/dtos/ICreateSequencyExerciseDTO';

const prisma = new PrismaClient();

class ExercisesRepository implements IExercisesRepository {
  public async delete(exercise_id: string): Promise<Exercise> {
    const result = await prisma.exercise.delete({
      where: {
        id: exercise_id,
      },
    });

    return result;
  }

  public async showRandomByLevelId(
    level_id: string,
  ): Promise<Alternative | Sequency> {
    const randomExercise = await prisma.exercise.findFirst({
      where: {
        level_id,
      },
      select: {
        level: {
          include: {
            topic: {
              select: {
                id: true,
              },
            },
          },
        },
        id: true,
        type: true,
      },
    });

    const exercise = await prisma[randomExercise.type].findUnique({
      where: {
        id: randomExercise.id,
      },
    });

    exercise.topic_id = randomExercise.level.topic.id;

    return exercise;
  }

  public async createSequency(
    data: ICreateSequencyExerciseDTO,
  ): Promise<Sequency> {
    const result = await prisma.sequency.create({ data });

    return result;
  }

  public async listSequencyExercisesByLevel(
    level_id: string,
  ): Promise<Sequency[]> {
    const result = await prisma.sequency.findMany({
      where: {
        level_id,
      },
    });

    return result;
  }

  public async listAlternativeExercisesByLevel(
    level_id: string,
  ): Promise<Alternative[]> {
    const result = await prisma.alternative.findMany({
      where: {
        level_id,
      },
    });

    return result;
  }

  public async createAlternative(
    data: ICreateAlternativeExerciseDTO,
  ): Promise<Alternative> {
    const result = await prisma.alternative.create({ data });

    return result;
  }
}

export default ExercisesRepository;
