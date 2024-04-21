/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Modal from '../../components/auth/modal';
import verifyMsg from '../../assets/svg/verifyMsg.svg';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState(false);
  const [error, setError] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [id, setId] = useState();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();
  const verifyUserEmail = async () => {
    try {
      const res = await axios.post('/api/reset-pass', { token });
      setEmail(true);
      // eslint-disable-next-line no-console
      console.log(res.data);
      // eslint-disable-next-line no-underscore-dangle
      setId(res.data.data._id);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError(true);
      // eslint-disable-next-line no-console
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (token) {
      console.log(token);
      verifyUserEmail();
    }
  }, [token]);

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword) return console.log('Please enter a new password');
    try {
      console.log(newPassword);
      await axios.post('/api/update-pass', { id, newPassword });
    } catch (er) {
      console.log(er);
    } finally {
      router.push('/');
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen" />
      <Modal>
        <div className="flex flex-col justify-center items-center bg-white py-6 rounded-lg">
          <Image alt="image" src={verifyMsg} />
          <h1 className="text-4xl">Verify Email</h1>
          {!email && <h2 className="bg-[orange] mt-2 p-2 text-black">Loading...</h2>}
          {email && (
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="bg-[green] p-2 text-white text-xl">Email Verified</h2>
              <form onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-3 mt-4">
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border-[#000] border-[1px] p-2 rounded-[5px] w-[300px]"
                />
                <button type="submit" className="bg-[black] p-[6px] rounded-[5px] text-md text-white">
                  Reset Password
                </button>
              </form>
            </div>
          )}

          {!email && error && (
            <div className="mt-4">
              <h2 className="bg-[#ee2123] text-2xl text-black">Error</h2>
            </div>
          )}
          <Link href="/" className="bg-[black] mt-2 p-[6px] rounded-[5px] text-md text-white">
            Go Back
          </Link>
        </div>
      </Modal>
    </>
  );
}
