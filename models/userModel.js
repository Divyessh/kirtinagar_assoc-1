// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 100,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 8,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  role: {
    type: String,
    enum: ['customer', 'provider'],
    default: 'customer',
  },
  nameOftheFirm: {
    type: String,
    minLength: 3,
  },
  ownerName: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  contacts: [
    {
      name: String,
      contactNumber: Number,
    },
  ],
  landlineNumber: {
    type: Number,
  },
  services: [
    {
      type: String,
    },
  ],
  websiteLink: {
    type: String,
  },
  additionalLinks: {
    type: String,
  },
  location: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  shopTimingStart: {
    type: Date,
  },
  shopTimingEnd: {
    type: Date,
  },
  shopgallery: [{ type: String }],
  forgotPasswordToken: { type: String },
  forgotPasswordTokenExpiry: { type: Date },
  verifyToken: { type: String },
  verifyTokenExpiry: { type: Date },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
