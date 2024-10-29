import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

import  { Event } from './event.model';
import  { Question } from './question.model';
import  { Registration } from './registration.model';

@Table
export class QuestionRegistration extends Model {

    @ForeignKey(() => Event)
    @Column
    eventId: number;

    @ForeignKey(() => Registration)
    @Column
    registrationId: number;

    @ForeignKey(() => Question)
    @Column
    questionId: number;
}