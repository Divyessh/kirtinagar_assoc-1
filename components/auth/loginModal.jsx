'use client';

import React from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import LoginForm from './loginForm';
import ModalContent from './ModalContent';
import SignupForm from './signupForm';

const LoginModal = () => {
  const [isLoginModal, setisLoginModal] = React.useState(true);
  return (
    <>
      <button type="button" onClick={() => window.my_modal_4.showModal()} aria-label="Open Login Modal">
        <IoMdLogIn className="text-black m-2 ml-2 object-cover text-4xl cursor-pointer" />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div
          className="modal-box bg-white grid relative grid-cols-11 grid-rows-[405px, 1fr] md:min-h-[405px] pb-3 w-8/12 md:w-6/12 max-w-5xl"
          style={{ padding: 0 }}
        >
          <button
            type="button"
            className="absolute top-[10px] right-[15px] z-[1000]"
            onClick={() => {
              const modal = document.getElementById('my_modal_4');
              modal.close();
            }}
          >
            <AiOutlineCloseCircle className=" text-[30px] text-[#c15959]" />
          </button>
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
