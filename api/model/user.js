import db from '../config/db.js'


class user {

    constructor() {

    }

    static async checkEmail(email) {

        //console.log(email, password);

        const sql = `SELECT * FROM users where email = '${email}'`;
        return db.execute(sql);
        
    }

    static async user(id) {

        //console.log(email, password);

        const sql = `SELECT * FROM users where id = '${id}'`;
        return db.execute(sql);
        
    }

    static async createNewUser(id, firstName, lastName, email, password) {

        console.log(id, firstName, lastName, email, password);

        const sql = `INSERT INTO
                        users (
                            id,
                            firstName,
                            lastName,
                            role,
                            email,
                            password,
                            provider,
                            isVerified
                        )
                    VALUES
                        (
                            '${id}',
                            '${firstName}',
                            '${lastName}',
                            'user',
                            '${email}',
                            '${password}',
                            'local',
                            FALSE
                        );`

        return db.execute(sql);
    }


}

export default user;