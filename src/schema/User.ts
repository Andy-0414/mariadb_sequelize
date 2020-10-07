import Sequelize, { DataTypes, Model } from "sequelize";
import MariaDBHelper from "../modules/MariaDB-Helper";

export class User extends Model {
	public pid: number;
	public email!: string;
	public salt!: string;
	public password!: string;
}
User.init(
	{
		pid: {
			type: Sequelize.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		salt: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: MariaDBHelper.getSequelize(),
		tableName: "User",
	}
);
User.sync().then(() => {
	console.log("TABLE CREATED");
});
