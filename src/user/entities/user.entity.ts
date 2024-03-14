import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Reservations } from 'src/reservation/entities/reservation.entity';
import { Points } from 'src/point/entities/point.entity';

@Index('email', ['email'], { unique: true })
@Entity({
  name: 'users',
})
export class Users {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'varchar', nullable: false, length: 8 })
  username: string;

  @Column({ type: 'varchar', unique: true, nullable: false, length: 40 })
  email: string;

  @Column({ type: 'varchar', select: false, nullable: false, length: 20 })
  password: string;

  @Column({ type: 'boolean', default: false })
  isAdmin: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  phone?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  // 이 부분은 사용자(User) 엔티티와 포인트(Point) 엔티티 간의 1:1 관계를 정의
  @OneToOne(() => Points, (points) => points.user) point: Points[];
  points: Points;
  // @OneToOne() 데코레이터는 1:1 관계를 나타내며, 여기서는 사용자와 포인트 사이의 관계를 지정
  // () => Point 부분은 관계의 대상이 되는 엔티티를 지정 ->  Point 엔티티와의 관계를 설정함
  // (point) => point.user 부분은 Point 엔티티에서 사용자를 참조하는 속성을 나타냄. 즉, Point 엔티티에는 user 속성이 있어야함

  @OneToMany(() => Reservations, (Reservations) => Reservations.users)
  reservations: Reservations[];
}
