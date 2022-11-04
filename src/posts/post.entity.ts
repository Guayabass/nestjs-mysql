import { User } from "src/users/user.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: string
    @Column()
    content: string
    
    @Column()
    authorId: number

    @ManyToMany(() => User, (user) => user.posts)
    author: User
}