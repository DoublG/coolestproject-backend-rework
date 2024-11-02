import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Event } from './event.model';

@Table
export class VoteCategory extends Model {
  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  min: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  max: number;

  @Column
  public: boolean;

  @Column
  optional: boolean;
}
