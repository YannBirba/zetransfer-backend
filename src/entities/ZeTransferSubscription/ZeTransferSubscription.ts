import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../utils/loadRelation";
import { ZeTransferSubscriptionPlan } from "../ZeTransferSubscriptionPlan/ZeTransferSubscriptionPlan";

@Entity()
@ObjectType()
export class ZeTransferSubscription extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  isActive: boolean;

  @Column()
  @Field()
  isYearly: boolean;

  @Field(() => ZeTransferSubscriptionPlan, { nullable: false })
  @OneToOne(() => ZeTransferSubscriptionPlan, {
    nullable: false,
  })
  @JoinColumn()
  zeTransferSubscriptionPlan: ZeTransferSubscriptionPlan;

  @Column()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  updatedAt: Date;
}
