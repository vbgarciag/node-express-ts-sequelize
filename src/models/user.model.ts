import { AllowNull, AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";

export interface UserAttributes {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    cell_phone: string;
    birthday: Date;
    user_card: string;
    created_at?: Date;
    updated_at?: Date;
}

@Table({
    tableName: 'users'
})
export default class User extends Model<UserAttributes>{
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @AllowNull(false)
    @Column
    first_name!: string;

    @AllowNull(false)
    @Column
    last_name!: string;

    @AllowNull(false)
    @Unique
    @Column
    email!: string;

    @AllowNull(false)
    @Column
    password!: string;

    @AllowNull(false)
    @Column
    cell_phone!: string;

    @AllowNull(false)
    @Column
    birthday!: Date;

    @AllowNull(false)
    @Column
    user_card!: string;

    @CreatedAt
    created_at?: Date

    @UpdatedAt
    updated_at?: Date
}