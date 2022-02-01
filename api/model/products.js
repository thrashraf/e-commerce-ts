import db from '../config/db.js';

class products {


    constructor() {

    }

    async save() {

    }

    static getAllProducts() {

        const sql = "SELECT * FROM products"
        return db.execute(sql);
    }

    static getProductById(id) {

        const sql = `SELECT * FROM products WHERE id = ${id}`
        return db.execute(sql);
    }
}


export default products