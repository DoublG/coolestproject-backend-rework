import { Column, Model,DataType, Table, ForeignKey, BelongsToMany, Index, BelongsTo } from 'sequelize-typescript';
import { Event } from './event.model';
import { User } from './user.model';
import { Registration } from './registration.model';
import { QuestionUser } from './question_user.model';
import { QuestionRegistration } from './question_registration.model';

@Table
export class Question extends Model {

    @ForeignKey(() => Event)
    @Column
    @Index({ name: 'question-event-unique', unique: true })
    eventId: number;

    @Column(DataType.STRING(30))
    @Index({ name: 'question-event-unique', unique: true })
    name: string;

    @Column
    mandatory: boolean;
  
    @BelongsTo(() => Event)
    event: Event;

    @BelongsToMany(() => User, () => QuestionUser)
    users: User[];

    @BelongsToMany(() => Registration, () => QuestionRegistration)
    registrations: Registration[];
}