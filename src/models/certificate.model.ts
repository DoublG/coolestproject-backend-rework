import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { Project } from './project.model';

@Table
export class Certificate extends Model {
  @Column(DataType.STRING(4000))
  text: string;

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
}
