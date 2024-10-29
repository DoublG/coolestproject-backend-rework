import { Event } from './event.model';
import { Tshirt } from './tshirt.model';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

@Table
export class TshirtTranslation extends Model {
  @Column({ type: DataType.ENUM('nl', 'fr', 'en'), allowNull: false })
  language: string;

  @Column(DataType.STRING(250))
  description: string;

  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @ForeignKey(() => Tshirt)
  @Column
  tshirtId: number;
}
