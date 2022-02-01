import db from '../config/db.js'

class user {

    constructor() {

    }

    static async login(email) {

        //console.log(email, password);

        const sql = `SELECT * FROM users where email = '${email}'`;
        return db.execute(sql);
        
    }

    static async user(id) {

        //console.log(email, password);

        const sql = `SELECT * FROM users where id = '${id}'`;
        return db.execute(sql);
        
    }


}

export default user;