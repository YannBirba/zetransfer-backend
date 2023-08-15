import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../utils/loadRelation";
import { File } from "../File/File";
import { Link } from "../Link/Link";
import { User } from "../User/User";

@Entity()
@ObjectType()
export class Transfer extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  isPrivate: boolean;

  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User, (user: User) => user.transfers, { nullable: true })
  @JoinTable()
  users: User[];

  @Field(() => [File], { nullable: true })
  @OneToMany(() => File, (file: File) => file.transfer, { nullable: true })
  files: File[];

  @Field(() => Link, { nullable: true })
  @OneToOne(() => Link, (link) => link.transfer)
  link: Link;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn()
  createdBy: User;

  @Column()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  updatedAt: Date;
}
