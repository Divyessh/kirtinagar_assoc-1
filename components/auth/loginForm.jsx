import React from 'react';
import { BiSolidUser, BiLogInCircle } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
    const modal = document.getElementById('my_modal_4');
    modal.close();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-10 md:p-0 col-span-11 md:col-span-7 flex items-center justify-center flex-col gap-[18px]"
    >
      <div>
        <BiLogInCircle className="text-[#FBBC05] text-[60px]" />
        <h1 className="font-extrabold text-[21px]">Log In</h1>
      </div>
      <div className="flex gap-[15px] flex-col">
        <div
          className="flex items-center gap-[10px] bg-[#f1f0f1] w-fit px-[6px] py-[11px] rounded-[7px]  border-[#8B8484]"
          style={{
            boxShadow: '7px 8px 10px 0px #00000040',
          }}
        >
          <BiSolidUser className="rounded-full text-[#6D6D6D] border-2 text-[18px]  border-[#6D6D6D]" />
          <input
            type="text"
            placeholder="Username"
            className="outline-none bg-[#f1f0f1] md:w-[200px]"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...register('username', {
              required: true,
            })}
          />
        </div>
        <div
          className="flex items-center gap-[10px] bg-[#f1f0f1] w-fit px-[6px] py-[11px] rounded-[7px]  border-[#8B8484]"
          style={{
            boxShadow: '7px 8px 10px 0px #00000040',
          }}
        >
          <AiOutlineLock className="rounded-full text-[#6D6D6D] text-[18px]" />
          <input
            type="password"
            placeholder="Password"
            className="outline-none bg-[#f1f0f1] md:w-[200px]"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...register('password', {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="modal-action ">
        <button
          className="btn bg-[#FBBC05] hover:bg-[#fbbd05dc] border-none text-[#765D5F] px-[47px] normal-case font-700"
          type="submit"
          style={{ boxShadow: '7px 8px 10px 0px #00000040' }}
        >
          Log In
        </button>
      </div>
      <div className="grid grid-cols-7 gap-[2px] w-[80%] place-items-center">
        <p className="col-span-3 text-[#00000080] text-[13px] font-400 text-center">Don’t have an account?</p>
        <span className="w-[0.8px] h-full bg-[#8B8484]" />
        <p className="col-span-3 text-[#00000080] text-[13px] font-400 text-center">Forgot password</p>
      </div>
    </form>
  );
};

export default LoginForm;
