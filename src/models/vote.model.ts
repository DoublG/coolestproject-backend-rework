import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { Project } from './project.model';
import { Account } from './account.model';
import { VoteCategory } from './vote_category.model';

@Table
export class Vote extends Model {
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

  @BelongsTo(() => Account)
  acccount: Account;

  @ForeignKey(() => Account)
  @Column
  accountId: number;

  @BelongsTo(() => VoteCategory)
  category: VoteCategory;

  @ForeignKey(() => VoteCategory)
  @Column
  categoryId: number;
}
