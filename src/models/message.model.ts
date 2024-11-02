import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from './event.model';

@Table({ timestamps: false })
export class Message extends Model {
  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;

  @Column
  message: string;

  @Column
  startAt: Date;

  @Column
  endAt: Date;
}
