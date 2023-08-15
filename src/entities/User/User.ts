import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../utils/loadRelation";
import { Transfer } from "../Transfer/Transfer";
import { ZeTransferSubscription } from "../ZeTransferSubscription/ZeTransferSubscription";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  @Field({ defaultValue: false })
  isAdmin: boolean;

  @Column({ default: true })
  @Field({ defaultValue: true })
  isActive: boolean;

  @ManyToMany(() => User, (user) => user.contacts)
  parent: User[];

  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User, (user) => user.parent)
  @JoinTable()
  contacts: User[];

  @Field(() => [Transfer])
  @ManyToMany(() => Transfer, (tr) => tr.users)
  transfers: Transfer[];

  @Field(() => ZeTransferSubscription, { nullable: true, defaultValue: null })
  @OneToOne(() => ZeTransferSubscription, { nullable: true })
  @JoinColumn()
  zeTransferSubscription: ZeTransferSubscription;

  @Column()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  updatedAt: Date;
}
