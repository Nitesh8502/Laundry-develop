import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: String,
    mobileNumber: String,
    mail: String,
    date: Number,
    selectedAddress: String,
    picUpTime: String,
    services: Object
});

const User = mongoose.models.users || mongoose.model('users', userModel);

export { User };