import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Event } from './event.model';

@Table
export class Registration extends Model {
    @ForeignKey(() => Event)
    @Column
    eventId: number;
}