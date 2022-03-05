import db from '../config/db.js';

class orderQuery {

    static createOrder(orderId, userID, orderItem, fullName, address, phoneNumber, state, totalPrice) {

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
        region,
        totalPrice
        )
        VALUES(
            '${orderId}',
            '${userID}',
            '${orderItem}',
            '${0}',
            '${0}',
            '${fullName}',
            '${address}',
            '${phoneNumber}',
            '${state}',
            '${totalPrice}'
        );
        `
        return db.execute(sql);
    }

    static async getOrder(id) {
        const sql = `SELECT * FROM orders where orderID = '${id}'`;
        return db.execute(sql);
    }

    static async getAllOrder(id) {
        const sql = `SELECT * FROM orders where userID = '${id}'`;
        return db.execute(sql);
    }

    static async successPayment(orderID) {
        const sql = `UPDATE orders
        SET isPaid = '1'
        WHERE orderID = '${orderID}'`;
        return db.execute(sql);
    }
}


export default orderQuery