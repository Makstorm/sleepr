import { Abstractrepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReservationsRepository extends Abstractrepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  public constructor(
    @InjectModel(ReservationDocument.name)
    reservationModule: Model<ReservationDocument>,
  ) {
    super(reservationModule);
  }
}
