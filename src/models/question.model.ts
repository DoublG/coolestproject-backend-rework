import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
  BelongsToMany,
  Index,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { User } from './user.model';
import { Registration } from './registration.model';
import { QuestionUser } from './question_user.model';
import { QuestionRegistration } from './question_registration.model';
import { QuestionTranslation } from './question_translation.model';

@Table
export class Question extends Model {
  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @Column(DataType.STRING(30))
  name: string;

  @Column
  mandatory: boolean;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsToMany(() => User, () => QuestionUser)
  users: User[];

  @BelongsToMany(() => Registration, () => QuestionRegistration)
  registrations: Registration[];

  @HasMany(() => QuestionTranslation)
  translations: QuestionTranslation[];
}
