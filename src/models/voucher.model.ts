import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
  Index,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { Project } from './project.model';
import { User } from './user.model';

@Table
export class Voucher extends Model {
  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @BelongsTo(() => Project)
  project: Project;

  @ForeignKey(() => User)
  @Column
  participantId: number;

  @BelongsTo(() => User)
  participant: User;

  @Index({ unique: true })
  @Column(DataType.UUID)
  voucherGuid: number;
}
