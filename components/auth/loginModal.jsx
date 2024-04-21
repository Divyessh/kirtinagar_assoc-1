/* eslint-disable no-nested-ternary */

'use client';

import React from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import LoginForm from './loginForm';
import ModalContent from './ModalContent';
import SignupForm from './signupForm';
import ForgotPassForm from './forgot-pass';

const LoginModal = () => {
  const [isLoginModal, setisLoginModal] = React.useState(true);
  const [isForgotPassword, setisForgotPassword] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => window.my_modal_4.showModal()} aria-label="Open Login Modal">
        <IoMdLogIn className="m-2 ml-2 text-4xl text-black cursor-pointer object-cover" />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div
          className="relative grid grid-cols-11 grid-rows-[405px, bg-white pb-3 w-8/12 md:w-6/12 max-w-5xl md:min-h-[405px] 1fr] modal-box"
          style={{ padding: 0 }}
        >
          <button
            type="button"
            className="top-[10px] right-[15px] z-[1000] absolute"
            onClick={() => {
              const modal = document.getElementById('my_modal_4');
              modal.close();
            }}
            aria-label="Close Modal"
          >
            <AiOutlineCloseCircle className="text-[#c15959] text-[30px]" />
          </button>
          {isForgotPassword ? (
            <>
              <ForgotPassForm />
              <ModalContent
                btnName="Sign Up"
                modalContent="New here?"
                setisLoginModal={setisLoginModal}
                setisForgotPassword={setisForgotPassword}
              />
            </>
          ) : isLoginModal ? (
            <>
              <ModalContent btnName="Sign Up" modalContent="New here?" setisLoginModal={setisLoginModal} />
              <LoginForm setisForgotPassword={setisForgotPassword} />
            </>
          ) : (
            <>
              <SignupForm />
              <ModalContent btnName="Log In" modalContent="Already Signed up?" setisLoginModal={setisLoginModal} />
            </>
          )}
        </div>
      </dialog>
    </>
  );
};

export default LoginModal;
