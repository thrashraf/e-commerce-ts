//? import users table


export const signupUser = async (req, res, next) => {

    try {

        //const { firstName, lastName, email, password } = req.body;
        
        //? check if user's email is exist

        //? bcyrpt password

        //? save user's detail

        //? send jwt

        // const [productById] = await products.getProductById(id)
        // console.log(productById);
        // res.status(200).json({productById});

    } catch (error) {
        next(error)
    }

}

export const loginUser = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        console.log(email, password);

        //? bcyrpt compare hash password

        //? user exist ? send jwt : throw error

        // const [productById] = await products.getProductById(id)
        // console.log(productById);
        // res.status(200).json({productById});

    } catch (error) {
        next(error)
    }

}