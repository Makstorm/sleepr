import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  public constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) {}

  public async create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      timestamb: new Date(),
      userId: '123',
    });
  }

  public async findAll() {
    return this.reservationsRepository.find({});
  }

  public async findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  public async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.fondOneAndUptade(
      { _id },
      { $set: updateReservationDto },
    );
  }

  public async remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id });
  }
}
