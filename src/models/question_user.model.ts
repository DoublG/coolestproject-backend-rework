import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { Question } from './question.model';

@Table
export class QuestionUser extends Model {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Question)
    @Column
    questionId: number;
}