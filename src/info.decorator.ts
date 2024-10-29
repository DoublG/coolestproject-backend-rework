import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Event } from './models/event.model';
import { Op } from 'sequelize';

export const Info = createParamDecorator(async function (
  data: unknown,
  ctx: ExecutionContext,
) {
  const request = ctx.switchToHttp().getRequest();
  const activeEvent = await Event.findOne({
    where: {
      eventBeginDate: { [Op.lt]: Date.now() },
      eventEndDate: { [Op.gt]: Date.now() },
    },
  });
  const lang = request.acceptsLanguages('fr', 'nl', 'en');
  return { currentEvent: activeEvent ? activeEvent.id : null, language: lang };
});
