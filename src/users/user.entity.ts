import { Post } from "src/posts/post.entity"
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Profile } from "./profile.entity"

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn() // crea el id por si solo
    id: number
    @Column({unique: true})
    username: string
    @Column()
    password: string
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //para poner la fecha actual con el timestamp cuando se crea
    createAt: Date
    @Column({nullable: true}) //para que se pueda dejar en blanco
    authStrategy: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Post, (post) => post.author)
    posts: Post[]
}