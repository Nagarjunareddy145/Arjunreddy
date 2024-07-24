import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeconnection from '../config'; // Assuming this is your Sequelize connection

// Define the attributes interface for Restaurant
interface RestaurantAttributes {
    Rid: number;
    name: string;
    Address: string;
    contactnumber: number;
}

// Optional attributes for input (creation)
export interface RestaurantCreationAttributes extends Optional<RestaurantAttributes, 'Rid'> {}

// Define the Sequelize Model for Restaurant
class Restaurant extends Model<RestaurantAttributes, RestaurantCreationAttributes> implements RestaurantAttributes {
    public Rid!: number;
    public name!: string;
    public Address!: string;
    public contactnumber!: number;

    // Timestamp fields (automatically managed by Sequelize)
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    //public readonly deletedAt?: Date; // Make deletedAt optional if you're using paranoid mode

    // Ensure the static init() method to define the model
    public static initialize(sequelize: any) {
        return this.init({
            Rid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contactnumber: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        }, {
            sequelize, // Pass the Sequelize connection instance
            tableName: 'Restaurant', // Ensure the table name is explicitly defined
            timestamps: true, // Enable timestamps
            paranoid: true, // Enable soft deletion (optional, if you want to use paranoid mode)
        });
    }
}

// Initialize the model using the Sequelize connection
Restaurant.initialize(sequelizeconnection);

export default Restaurant;
