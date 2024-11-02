import {
  Column,
  Model,
  Table,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { EventTable } from './event_table.model';

@Table
export class Location extends Model {
  @BelongsTo(() => Event)
  event: Event;

  @HasMany(() => EventTable)
  tables: EventTable[];

  @ForeignKey(() => Event)
  @Column
  eventId: number;
}
