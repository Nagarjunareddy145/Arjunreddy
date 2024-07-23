import {DataTypes, Model, Optional} from "sequelize";
import sequelizeconnection from "../config";

interface serviceAttributes {
    id: number;
    servicetype: string;
}

export interface LanguageInput extends Optional<serviceAttributes, 'id'> {}
export interface LanguageOutput extends Required<serviceAttributes> {}
class service extends Model<serviceAttributes, LanguageInput> implements serviceAttributes {
    public id!: number;
    public servicetype!: string;
    //public languagecode!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        servicetype: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    });
    
export default service;