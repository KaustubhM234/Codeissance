import User from '../models/UserSchema.js';
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const generateToken = user =>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d",
    })
}

export const signup = async(req,res) =>{
    
    const {name,email,password,role,photo,gender} = req.body
    console.log(req.body)
    try {
        let user = null;
        user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:'User already exists'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        if(role==='student'){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            });
        }
        if(role==='doctor'){
            user = new User({
                name,
                email,  
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        if(role==='teacher'){
            user = new User({
                name,
                email,  
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        if(role==='admin'){
            user = new User({
                name,
                email,  
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        await user.save()
        console.log("saved")
        res.status(200).json({success:true,message:'User successfully created'})
        
    } 
    catch (err) {
        console.log("Hii backend");
        res.status(500).json({success:false,message:'Internal Server error, Try again'})
    }
};

export const login = async(req,res) =>{
    const {email,password} = req.body

    try {
        console.log("server is hitting",req.body)
        let user = null
        const admin = await User.findOne({email})
        const doctor = await User.findOne({email})
        const student = await User.findOne({email})
        const teacher = await User.findOne({email})
        
        if(student){
            user = student
        }
        if(doctor){
            user = doctor
        }
        if(teacher){
            user = teacher
        }
        if(admin){
            user = admin
        }
        if(!user){
            return res.status(404).json({message:"User does not exist"});
        }
        const isPasswordMatch = await bcrypt.compare(
            req.body.password, 
            user.password
            );
        if(!isPasswordMatch){
            return res.status(400).json({message:"Invalide credentials"});
        }

        const token = generateToken(user);
        res.cookie('authToken', token, { httpOnly: true, sameSite: 'none' });
        const {password,role,appointments, ...rest} = user._doc

        res
            .status(200)
            .json({status:true, message:"Successfully loged in",token,data:{...rest},role});

    } catch (err) {
        return res.status(500).json({message:"Failed to login"});
    }
};
