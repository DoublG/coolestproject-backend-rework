import { Event } from './event.model';
import { TshirtGroup } from './tshirt_group.model';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

@Table
export class TshirtGroupTranslation extends Model {
  @Column({ type: DataType.ENUM('nl', 'fr', 'en'), allowNull: false })
  language: string;

  @Column(DataType.STRING(250))
  description: string;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => TshirtGroup)
  group: Event;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @ForeignKey(() => TshirtGroup)
  @Column
  groupId: number;
}
