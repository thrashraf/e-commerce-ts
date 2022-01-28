import db from '../config/db.js';

class products {


    constructor() {

    }

    async save() {

    }

    static async getAllProducts() {
        const sql = "SELECT * FROM products"

        return db.execute(sql);
         
    }
}


export default products