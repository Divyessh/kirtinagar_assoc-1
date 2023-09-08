'use client';

import React from 'react';
import { IoMdLogIn } from 'react-icons/io';
import LoginForm from './loginForm';
import ModalContent from './ModalContent';
import SignupForm from './signupForm';

const LoginModal = () => {
  const [isLoginModal, setisLoginModal] = React.useState(true);
  return (
    <>
      <button type="button" onClick={() => window.my_modal_4.showModal()}>
        <IoMdLogIn className="text-black m-2 ml-2 object-cover text-4xl cursor-pointer" />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div
          className="modal-box bg-white grid grid-cols-11 grid-rows-[405px, 1fr] md:h-[405px] w-8/12 md:w-6/12 max-w-5xl"
          style={{ padding: 0 }}
        >
          {isLoginModal ? (
            <>
              <ModalContent btnName="Sign Up" modalContent="New here?" setisLoginModal={setisLoginModal} />
              <LoginForm />
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