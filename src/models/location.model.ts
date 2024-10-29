import { Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Event } from './event.model';

@Table
export class Location extends Model {
    @BelongsTo(() => Event)
    event: Event;

    @ForeignKey(() => Event)
    @Column
    eventId: number;
}
