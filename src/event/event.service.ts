import { Injectable } from '@nestjs/common';
import { EventDto } from '../dto/event.dto';
//import { User } from 'src/models/user.model';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {
  constructor() {}

  async create(event: EventDto) {
    return await Event.create({
      azureStorageContainer: event.azureStorageContainer,
      minAge: event.minAge,
      maxAge: event.maxAge,
    });
  }
}
