import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
//import { RegistrationService } from '../registration/registration.service';
import { EventService } from '../event/event.service';

@Injectable()
export class EventCommand {
  constructor(private readonly eventService: EventService) {}

  @Command({
    command: 'event:create',
    describe: 'create new event',
  })
  async createEvent(
    @Option({
      name: 'azureStorageContainer',
      type: 'string',
      default: 'testcontainer',
    })
    azureStorageContainer: string,
    @Option({
      name: 'minAge',
      type: 'number',
      default: '8',
    })
    minAge: number,
    @Option({
      name: 'maxAge',
      type: 'number',
      default: '8',
    })
    maxAge: number,
  ) {
    const event = await this.eventService.create({
      azureStorageContainer,
      minAge,
      maxAge,
    });
    console.log('Event created %d', event.id);
  }

  @Command({
    command: 'event:close',
    describe: 'close event',
  })
  async closeEvent() {
    console.log('Close event');
  }
}
