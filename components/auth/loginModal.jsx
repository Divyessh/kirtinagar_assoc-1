'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdLogIn } from 'react-icons/io';
import LoginForm from './loginForm';
import ModalContent from './ModalContent';

const LoginModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
    const modal = document.getElementById('my_modal_4');
    modal.close();
  };
  return (
    <>
      <button type="button" onClick={() => window.my_modal_4.showModal()}>
        <IoMdLogIn className="text-black m-2 ml-2 object-cover text-4xl cursor-pointer" />
      </button>
      <dialog id="my_modal_4" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box bg-white grid grid-cols-11 grid-rows-[375px, 1fr] md:h-[375px]"
          style={{ padding: 0 }}
        >
          <ModalContent />
          <LoginForm register={register} />
        </form>
      </dialog>
    </>
  );
};

export default LoginModal;
