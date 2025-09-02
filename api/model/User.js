import mongoose from "mongoose";

const userSchema = mongoose.Schema(({
    username: {
        type: String,
        reqiured: [true, "Username is reqiured"],
        unique: true,
        minlength: [5, "Username must be at least 5 characters"]
    },
    password: {
        type: String,
        reqiured: [true, "Password is reqiured"],
        minlength: [6, "Password must be at least 6 characters"]
    }
}))

const User = mongoose.model('users', userSchema)

export default User;