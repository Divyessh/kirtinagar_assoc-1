/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from '../../components/auth/modal';
import verifyMsg from '../../assets/svg/verifyMsg.svg';

export default function VerifyEmailPage() {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post('/api/verifyemail', { token });
      setVerified(true);
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
      <div className="min-h-screen bg-white" />
      <Modal>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg py-6">
          <Image alt="image" src={verifyMsg} />
          <h1 className="text-4xl">Verify Email</h1>
          {!verified && <h2 className="mt-2 p-2 bg-[orange] text-black">Loading...</h2>}
          {verified && (
            <div className="mt-4 flex flex-col items-center justify-center">
              <h2 className="text-xl bg-[green] text-white p-2">Email Verified</h2>
            </div>
          )}
          {!verified && error && (
            <div className="mt-4">
              <h2 className="text-2xl bg-[#ee2123] text-black">Error</h2>
            </div>
          )}
          <Link href="/" className="mt-2 text-md bg-[black]  rounded-[5px] text-white p-[6px]">
            Go Back
          </Link>
        </div>
      </Modal>
    </>
  );
}
