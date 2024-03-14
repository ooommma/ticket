import {
  Column,
  Entity,
  // JoinColumn
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Users } from 'src/user/entities/user.entity';
import { Concerts } from 'src/concert/entities/concert.entity';
import { reservationStatus } from '../types/reservation.enum';

@Entity({
  name: 'reservations',
})
export class Reservations {
  @PrimaryGeneratedColumn()
  reservation_id: number;

  @PrimaryGeneratedColumn()
  concert_id: number;

  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar', select: false, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  content: string;

  @Column({ type: 'varchar', nullable: false })
  date: string;

  @Column()
  reservationStatus: reservationStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.reservations)
  users: Users;

  @OneToMany(() => Concerts, (concerts) => concerts.reservations)
  concert: Concerts;
}
