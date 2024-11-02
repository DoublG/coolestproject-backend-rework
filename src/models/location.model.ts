import { Table, HasMany } from 'sequelize-typescript';
import { EventTable } from './event_table.model';
import { BaseEventModel } from './base_event.model';

@Table
export class Location extends BaseEventModel {
  @HasMany(() => EventTable)
  tables: EventTable[];
}
