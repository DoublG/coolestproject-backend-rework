import { Event } from './event.model';
import { Project } from './project.model';
import { ProjectTable } from './project_table.model';
import { Location } from './location.model';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';

@Table
export class EventTable extends Model {
  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @BelongsToMany(() => Project, () => ProjectTable)
  table: EventTable;

  @Column
  name: string;

  @Column(DataType.JSON)
  requirements: string;

  @Column
  maxPlaces: number;

  @ForeignKey(() => Location)
  @Column
  locationId: number;

  @BelongsTo(() => Location)
  location: Location;

}
