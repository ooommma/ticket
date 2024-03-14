import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { Users } from 'src/user/entities/user.entity';

@Entity({
  name: 'points',
})
export class Points {
  @PrimaryGeneratedColumn()
  pointId: number;

  @Column()
  userId: number;

  @Column({ type: 'varchar' })
  total: string;

  @UpdateDateColumn()
  updatedAt: Date;

  // Points 엔티티와 Users 엔티티 간의 일대일 관계를 설정
  // Users 엔티티의 points 속성과 Points 엔티티의 user 속성 사이에 일대일 관계를 설정
  @OneToOne(() => Users, (Users) => Users.points)
  @JoinColumn({ name: 'userId' }) // 외래 키에 대한 설정을 지정함
  // Points 엔티티와 Users 엔티티 간의 관계를 정의
  // userId 컬럼은 Points 엔티티에서 Users 엔티티로의 참조를 나타냄
  user: Users;
  // Points 엔티티 내부에 있는 Users 엔티티의 인스턴스를 나타내는 속성
  // 실제로는 데이터베이스에서 userId를 사용하여 Users 테이블과의 관계를 표현

  //Points 엔티티가 Users 엔티티와 일대일 관계를 가지며, userId를 외래 키로 사용하여 Users 엔티티와 관련되어 있음
}
