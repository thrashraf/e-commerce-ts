import db from '../config/db.js';

class orderQuery {

    static createOrder(orderId, userID, orderItem, fullName, address, phoneNumber, state, postcode) {

        

        const sql = `
        INSERT INTO
        orders (
        orderID,
        userID,
        orderItem,
        isPaid,
        isDelivered,
        fullName,
        address,
        phoneNumber,
        region
        )
        VALUES(
            '${orderId}',
            '${userID}',
            '${orderItem}',
            ${0},
            ${0},
            '${fullName}',
            '${address}',
            '${phoneNumber}',
            '${state}'
        );
        `
        return db.execute(sql);
    }
}


export default orderQuery