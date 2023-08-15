import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../utils/loadRelation";
import { Transfer } from "../Transfer/Transfer";

@Entity()
@ObjectType()
export class Link extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  token: string;

  @Column()
  @Field()
  startDate: Date;

  @Column({ nullable: true, default: null })
  @Field({ nullable: true, defaultValue: null })
  endDate: Date;

  @Field(() => Transfer, { nullable: true })
  @OneToOne(() => Transfer, { nullable: true })
  @JoinColumn()
  transfer: Transfer;

  @Column()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  updatedAt: Date;
}
