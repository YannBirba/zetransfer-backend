import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../utils/loadRelation";
import { Transfer } from "../Transfer/Transfer";

@Entity()
@ObjectType()
export class File extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  fileName: string;

  @Column()
  @Field()
  size: number;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  signature: string;

  @Field(() => Transfer, { nullable: false })
  @ManyToOne(() => Transfer, (transfer) => transfer.files, { nullable: false })
  transfer: Transfer;

  @Column()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  updatedAt: Date;
}
