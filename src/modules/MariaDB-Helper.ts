import { Sequelize } from "sequelize";

import "dotenv/config";

class MariaDBHelper {
	private sequelize: Sequelize;
	constructor() {
		try {
			// mariadb://playkeyboard-dev:0000@localhost/pkdev
			console.log(process.env.DB_URI);
			this.sequelize = new Sequelize(process.env.DB_URI);
			this.sequelize.authenticate();
		} catch (err) {
			console.log("DB Connect Fail");
			process.exit();
		}
	}
	getSequelize() {
		return this.sequelize;
	}
}

export default new MariaDBHelper();
