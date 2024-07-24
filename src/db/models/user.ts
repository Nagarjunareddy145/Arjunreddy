import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface UserAttributes {
    userid: number;
    fullname: string;
    email: string;
    password: string;
    contactnumber: number;
}

export interface UserInput extends Optional<UserAttributes, 'userid'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public userid!: number;
    public fullname!: string;
    public email!: string;
    public password!: string;
    public contactnumber!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt?: Date; // Make deletedAt optional if you're using paranoid mode
}

User.init(
    {
        userid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactnumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    },
    {
        tableName: 'Users', // Ensure the table name is explicitly defined
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default User;
