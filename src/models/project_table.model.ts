import { Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Question } from './question.model';
import { User } from './user.model';

@Table
export class ProjectTable extends Model {
}