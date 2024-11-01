import { Event } from './event.model';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { TshirtGroup } from './tshirt_group.model';
import { TshirtTranslation } from './tshirt_translation.model';

@Table
export class Tshirt extends Model {
  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => TshirtGroup)
  group: TshirtGroup;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @ForeignKey(() => TshirtGroup)
  @Column
  groupId: number;

  @Column
  name: string;

  @HasMany(() => TshirtTranslation)
  translations: TshirtTranslation[];
}
