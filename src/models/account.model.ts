import { Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Question } from './question.model';
import { User } from './user.model';
import { compareSync } from 'bcrypt';

@Table
export class Account extends Model {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  account_type: string;

  verifyPassword(password) {
    return compareSync(password, this.password);
  }
}