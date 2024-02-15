import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  public timestamb: Date;

  @Prop()
  public startDate: Date;

  @Prop()
  public endDate: Date;

  @Prop()
  public userId: string;

  @Prop()
  public placeId: string;

  @Prop()
  public invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
