import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Project extends Model {

    @ForeignKey(() => User)
    @Column
    participantId: number;

    @ForeignKey(() => User)
    @Column
    ownerId: number;
}