import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '../models/userModel';

export const sendEmail = async ({ email, emailType, userId, userEmail }) => {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    const path = emailType === 'VERIFY' ? '/verifyemail' : '/reset-password';

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        throw new Error('User not found');
      }
      user.forgotPasswordToken = hashedToken;
      user.forgotPasswordTokenExpiry = Date.now() + 3600000;
      await user.save();
    }

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
      html: `<h1> Hi there, </h1>
      <h4>Welcome to Kirit Nagar Wood Works.</h4>
      <p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}" style="background-color: green; padding: 10px; text-decoration: none; color: #000; margin-bottom: 10px;}">Here</a>
         to ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}
        or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/${path}?token=${hashedToken}
      </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
