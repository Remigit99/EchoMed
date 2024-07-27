// import { Schema, model, models } from "mongoose";

// const UserSchema = new Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//     enum: ["male", "female"],
//   },
//   nationality: {
//     type: String,
//     required: true,
//   },
//   homeAddress: {
//     type: String,
//     required: true,
//   },
//   language: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//   },
//   region: {
//     type: String,
//     required: true,
//   },
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },

//   // email:{
//   //     type: String,
//   //     unique: [true, "Email already exists"],
//   //     required: [true, "Email is required"]
//   // },
//   // name:{
//   //     type:String,
//   //     required: [true, "Name is required"]
//   // },
//   // image:{
//   //     type: String,

//   // }
// });

// const User = models.User || model("User", UserSchema);
// export default User;
