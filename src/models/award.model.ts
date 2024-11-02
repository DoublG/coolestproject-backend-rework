import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { Project } from './project.model';
import { VoteCategory } from './vote_category.model';
import { Account } from './account.model';

@Table
export class Award extends Model {
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

  @ForeignKey(() => VoteCategory)
  @Column
  categoryId: number;

  @BelongsTo(() => VoteCategory)
  category: VoteCategory;

  @ForeignKey(() => Account)
  @Column
  jurorId: number;

  @BelongsTo(() => Account)
  juror: Account;
}
