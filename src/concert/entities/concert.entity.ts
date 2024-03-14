import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Reservations } from 'src/reservation/entities/reservation.entity';
import { category } from '../types/concert.category';
import { Seats } from 'src/seat/entities/seat.entity';

@Entity({
  name: 'concerts',
})
export class Concerts {
  @PrimaryGeneratedColumn()
  concertId: number;

  @Column()
  userId: number;

  @Column()
  seatId: number;

  @Column({ type: 'varchar', select: false, nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  content: string;

  @Column({ type: 'varchar', nullable: false })
  date: string;

  @Column({ type: 'varchar', nullable: false })
  price: string;

  @Column()
  category: category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Reservations, (Reservations) => Reservations.concert)
  reservations: Reservations[];

  //   @OneToMany(() => Seats, (seats) => seats.concerts)
  // seats: Seats[];

  @OneToMany(() => Seats, (seats) => seats.concerts)
  seats: Seats[];

  // @OneToMany(() Seats, (seats) => seats.concerts)
  // // () => Seats.concerts 함수 구문이므로 (두 번째 매개변수로 전달되는 함수)
  // // seats 매개변수가 Seats 클래스를 참조, 소문자로 수정하고 seats.concerts로 변경하여 해당 클래스의 속성을 참조하도록 해야함
  // seats: Seats[]
}
