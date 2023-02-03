import UserModel from '../models/userModel.js';



// add user
const addUser = async (req, res) => {
    console.log('/add user...')
    console.log(req.body)
    if(!req.body.email || !req.body.first_name || !req.body.last_name) 
        return res.status(400).json({
            status: 'Failure',
            message: 'Please provid an email, first name, last name',
        });
    
    var user = await UserModel.findOne({ email: req.body.email });

    if(!user){
        user = await UserModel.create({
            id: req.body.id,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        })
    }

    return res.status(200).json({
        status:"success",
        data: {user},
    })
}



// get all users
const getUsers = async (req, res) => {
    console.log('/get all users...')
    
    const user = await UserModel.find().sort({"id":1})

    return res.status(200).json({
        status:"success",
        data: {user},
    })
}




// delete a user
const removeUser = async (req, res) => {
    console.log('/delete user')
    console.log(req.body)
    if(!req.body.id) 
        return res.status(400).json({
            status: 'Failure',
            message: 'Please provid an id',
        });
    
    var user = await UserModel.findOne({ id: req.body.id });

    if(!user){
        return res.status(400).json({
            status:"failure",
            message: "user not found",
        })
    }
    
    user = await UserModel.deleteOne({
        id: req.body.id
    })

    return res.status(200).json({
        status:"success",
        message: "User deleted successfully",
    })
}



// update a user
const updateUser = async (req, res) => {
    console.log('/update user...')
    
    if(!req.body.id) 
        return res.status(400).json({
            status: 'Failure',
            message: 'Please provide an id',
        });
    
    var user = await UserModel.findOne({ id: req.body.id });
    if(!user){
        return res.status(400).json({
            status:"failure",
            message: "user not found",
        })
    }
    
    user = await UserModel.updateOne({
        id: req.body.id,
    },{
        $set:{
            email: req.body?.email,
            first_name: req.body?.first_name,
            last_name: req.body?.last_name,
        }
    })

    return res.status(200).json({
        status:"success",
        data: {user},
    })
}

export default {
    addUser,
    getUsers,
    removeUser,
    updateUser,
}