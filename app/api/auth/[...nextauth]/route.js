/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import NextAuth, { getServerSession } from 'next-auth/next';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../../models/userModel';
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'String',
          placeholder: 'Enter your Username',
        },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line consistent-return
      async authorize(credentials) {
        const { username, password } = credentials ?? {};
        if (!username || !password) {
          throw new Error('Missing email or password');
        }

        try {
          await connectMongoDB();
          const user = await User.findOne({ username });

          if (!user) {
            throw new Error('User Not Found');
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error('Wrong Password');
          }
          if (user?.isVerified === false) {
            throw new Error('Please verify your email');
          }
          return user;
        } catch (error) {
          console.log('Error: ', error);
          throw new Error(error);
        } finally {
          await disconnectMongoDB();
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      // eslint-disable-next-line no-unused-expressions
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const { user } = token;
      session.user = await user;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
