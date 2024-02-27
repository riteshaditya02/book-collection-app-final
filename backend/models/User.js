const mongoose =  require('mongoose');

//Schema

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },

})

//Verify Password

UserSchema.methods.isPasswordMatch = async function(enteredPassword){
    return await this.password == enteredPassword;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;