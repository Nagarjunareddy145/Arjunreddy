// ../db/models/Login.ts (assuming this is where your model resides)

import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface LoginAttributes {
    id: number;
    login: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface LoginInput extends Optional<LoginAttributes, 'id'> {}
export interface LoginOutput extends Required<LoginAttributes> {}

class Login extends Model<LoginAttributes, LoginInput> implements LoginAttributes {
    public id!: number;
    public login!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Login.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeconnection,
        modelName: 'Login', // Optional: You can specify the model name explicitly
        timestamps: true,
        paranoid: true,
    }
);

export default Login;
