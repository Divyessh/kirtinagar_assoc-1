/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from '../../components/auth/modal';
import verifyMsg from '../../assets/svg/verifyMsg.svg';

export default function ResetPasswordPage() {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const res = await axios.post('/api/reset-email', { token });
      setEmail(true);
      // eslint-disable-next-line no-console
      console.log(res.data);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      setError(true);
      // eslint-disable-next-line no-console
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || '');
  }, []);

  useEffect(() => {
    if (token) {
      verifyUserEmail();
    }
  }, [token]);

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
              <h2 className="bg-[green] p-2 text-white text-xl">Email Email</h2>
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
