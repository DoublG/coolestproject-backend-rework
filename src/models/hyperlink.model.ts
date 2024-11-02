import {
  Column,
  Model,
  Table,
  BelongsTo,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Attachment } from './attachment.model';
import { Event } from './event.model';

@Table
export class Hyperlink extends Model {
  @Column(DataType.STRING(255))
  href: string;

  @BelongsTo(() => Attachment)
  attachment: Attachment;

  @ForeignKey(() => Attachment)
  @Column
  attachmentId: number;

  @BelongsTo(() => Event)
  event: Attachment;

  @ForeignKey(() => Event)
  @Column
  eventId: number;
}
