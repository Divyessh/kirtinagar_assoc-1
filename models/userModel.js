// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    // done
    type: String,
    unique: true,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 100,
  },
  email: {
    // done
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    // done
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
    // done
    type: String,
    enum: ['customer', 'provider'],
    default: 'customer',
  },
  nameOftheFirm: {
    // done
    type: String,
    minLength: 3,
  },
  ownerName: {
    // done
    type: String,
  },
  address: {
    // done
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
    // done
    type: Number,
  },
  services: [
    {
      type: String,
    },
  ],
  websiteLink: {
    // done
    type: String,
  },
  additionalLinks: {
    // done
    type: String,
  },
  location: {
    // done
    type: String,
  },
  isVerified: {
    // done
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
