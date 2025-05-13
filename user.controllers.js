const User=require('../models/user');
const bcrypt=require('bcrypt');
exports.signup=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exist"});
        }
        const hasshpass=await bcrypt.hash(password,10);
        const createdUser=new User({
            name:name,
            email:email,
            password:hasshpass,
        });
        await createdUser.save();
        res.status(201).json({
            message:"User created successfully",
            user:{
                _id:createdUser._id,
                name:createdUser.name,
                email:createdUser.email,
            },
        });
    }catch(error){
        console.log("error: "+error.message);
        res.status(500).json({message:"Internal server error"});
    }
};
exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};