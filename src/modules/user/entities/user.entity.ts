import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @Column()
    firstName:string

    @Column()
    lastName:string
    
}
