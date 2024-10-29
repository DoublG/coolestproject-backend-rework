import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { Question } from './question.model';

@Table
export class QuestionTranslation extends Model {
  @Column({ type: DataType.ENUM('nl', 'fr', 'en'), allowNull: false })
  language: string;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @Column(DataType.STRING(255))
  description: string;

  @Column(DataType.STRING(120))
  positive: string;

  @Column(DataType.STRING(120))
  negative: string;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => Question)
  question: Event;
}
