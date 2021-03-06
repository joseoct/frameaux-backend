import { Level } from '@prisma/client';
import ICreateLevelDTO from '../dtos/ICreateLevelDTO';

export default interface ILevelsRepository {
  findLastLevelsByTopicId(topic_ids: string[]): Promise<Level[] | undefined>;
  findMaxDifficultyByTopicId(topic_id: string): Promise<number>;
  create(data: ICreateLevelDTO): Promise<Level>;
  findAllByTopic(topic_id: string): Promise<Level[] | undefined>;
  findByTopicIdAndDifficulty(
    topic_id: string,
    difficulty: number,
  ): Promise<Level | undefined>;
  findById(level_id: string): Promise<Level | undefined>;
}
