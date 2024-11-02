import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Event } from './event.model';
import { Attachment } from './attachment.model';

@Table
export class AzureBlob extends Model {
  @Column
  container_name: string;

  @Column
  blob_name: string;

  @Column
  size: number;

  @ForeignKey(() => Event)
  @Column
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Attachment)
  @Column
  attachmentId: number;

  @BelongsTo(() => Attachment)
  attachment: Event;
}
