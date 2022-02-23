import db from '../config/db.js';

class cart {

    
    static createOrder(id, order) {

        console.log(order)

        const sql = `
        
        UPDATE
            users
        SET
            order = '${order}'
        WHERE
            id = '${id}'
        `

        return db.execute(sql);
    }
}


export default cart