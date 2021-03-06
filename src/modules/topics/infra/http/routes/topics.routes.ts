import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureRole from '@modules/users/infra/http/middlewares/ensureRole';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TopicsController from '../controllers/TopicsController';

const topicsRouter = Router();
const topicsController = new TopicsController();

topicsRouter.get(
  '/:topic_id',
  celebrate({
    [Segments.PARAMS]: {
      topic_id: Joi.string().required(),
    },
  }),
  topicsController.show,
);

topicsRouter.delete(
  '/:topic_id',
  ensureAuthenticated,
  ensureRole(['content_creator']),
  celebrate({
    [Segments.PARAMS]: {
      topic_id: Joi.string().required(),
    },
  }),
  topicsController.delete,
);

topicsRouter.put(
  '/:topic_id',
  ensureAuthenticated,
  ensureRole(['content_creator']),
  celebrate({
    [Segments.PARAMS]: {
      topic_id: Joi.string().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      layer: Joi.number().required(),
      explanation: Joi.string().required(),
    },
  }),
  topicsController.update,
);

export default topicsRouter;
