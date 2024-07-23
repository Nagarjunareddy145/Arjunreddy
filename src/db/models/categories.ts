import {DataTypes, Model, Optional} from "sequelize";
import sequelizeconnection from "../config";

interface categoriesAttributes {
    cid: number;
    cname: string;
    description: string;
}

export interface categoryInput extends Optional<categoriesAttributes, 'cid'> {}
export interface categoryOutput extends Required<categoriesAttributes> {}
class categories extends Model<categoriesAttributes, categoryInput> implements categoriesAttributes {
    public cid!: number;
    public cname!: string;
    public description!: string
    //public languagecode!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

categories.init(
    {
        cid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        cname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        //languagecode: {
        
    },
    {
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    });
    
export default categories;