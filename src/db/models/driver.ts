import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface DriverAttributes {
    Did: number;
    fullname: string;
    email: string;
    password: string;
    contactnumber: number;
    vechiclenumber: number;
}

export interface DriverInput extends Optional<DriverAttributes, 'Did'> {}
export interface DriverOutput extends Required<DriverAttributes> {}

class Driver extends Model<DriverAttributes, DriverInput> implements DriverAttributes {
    public Did!: number;
    public fullname!: string;
    public email!: string;
    public password!: string;
    public contactnumber!: number;
    public vechiclenumber!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt?: Date; // Make deletedAt optional if you're using paranoid mode
}

Driver.init(
    {
        Did: {
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
        },
        
            vechiclenumber: {
                type: DataTypes.BIGINT,
                allowNull: false,
            }
        },
    
    {
        tableName: 'Driver', // Ensure the table name is explicitly defined
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Driver;
