/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';
import { BiSolidUser, BiLogInCircle } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const ForgotPassForm = () => {
  const { register, handleSubmit, reset } = useForm();
  // eslint-disable-next-line consistent-return
  const onSubmit = async (data) => {
    const { userEmail } = data;
    try {
      console.log(userEmail);
      // eslint-disable-next-line no-shadow
      await axios.post('/api/forgot-pass', { userEmail });
      toast.success('Password reset link sent to your email');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.error('An error occurred, please try again');
    } finally {
      const modal = document.getElementById('my_modal_4');
      modal.close();
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col justify-center items-center gap-[18px] col-span-11 md:col-span-7 py-10 md:p-0"
    >
      <div className="flex flex-col items-center">
        <BiLogInCircle className="text-[#FBBC05] text-[60px]" />
        <h1 className="font-extrabold text-[21px]">Reset Password</h1>
      </div>
      <div className="flex flex-col gap-[15px] text-black">
        <div
          className="flex items-center gap-[10px] border-[#8B8484] bg-[#f1f0f1] px-[6px] py-[11px] rounded-[7px] w-[205px] md:w-fit"
          style={{
            boxShadow: '7px 8px 10px 0px #00000040',
          }}
        >
          <BiSolidUser className="border-[#6D6D6D] border-2 rounded-full text-[#6D6D6D] text-[18px]" />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#f1f0f1] w-full md:w-[200px] text-black outline-none"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...register('userEmail', {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="modal-action">
        <button
          className="bg-[#FBBC05] hover:bg-[#fbbd05dc] px-[47px] border-none font-700 text-[#765D5F] normal-case btn"
          type="submit"
          style={{ boxShadow: '7px 8px 10px 0px #00000040' }}
        >
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default ForgotPassForm;
