import {
  Column,
  Model,
  Table,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Project } from './project.model';
import { Event } from './event.model';
import { EventTable } from './event_table.model';

@Table
export class ProjectTable extends Model {
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

  @ForeignKey(() => EventTable)
  @Column
  tableId: number;

  @BelongsTo(() => EventTable)
  table: EventTable;
}
