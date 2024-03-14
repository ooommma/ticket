import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Users } from 'src/user/entities/user.entity';
import { seatStatus } from '../types/seatRole.type';
import { Concerts } from 'src/concert/entities/concert.entity';

@Entity({
  name: 'seats',
})
export class Seats {
  @PrimaryGeneratedColumn()
  seat_id: number;

  @PrimaryGeneratedColumn()
  concert_id: number;

  @Column({ type: 'varchar', nullable: false })
  zone: string;

  @Column({ type: 'varchar', nullable: false })
  price: string;

  @Column({ type: 'enum', enum: seatStatus, default: seatStatus.Seat })
  seatStatus: seatStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.reservations)
  user: Users[];

  @ManyToOne(() => Concerts, (concerts) => concerts.seats)
  concerts: Concerts[];
}
