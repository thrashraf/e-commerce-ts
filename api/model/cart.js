import db from '../config/db.js';

class cart {

    static addToCart(id, cart) {

        console.log(cart)

        const sql = `
        
        UPDATE
            users
        SET
            cart = '${cart}'
        WHERE
            id = '${id}'
        `

        return db.execute(sql);
    }
}


export default cart