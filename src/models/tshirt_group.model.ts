import { Event } from './event.model';
import { TshirtGroupTranslation } from './tshirt_group_translation.model';
import { Tshirt } from './tshirt.model';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

@Table
export class TshirtGroup extends Model {
  @HasMany(() => TshirtGroupTranslation)
  translations: TshirtGroupTranslation[];

  @HasMany(() => Tshirt)
  tshirts: Tshirt[];

  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @Column
  name: string;
}
