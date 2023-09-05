import React from 'react';
import { BiSolidUser, BiLogInCircle } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';

const LoginForm = (props) => {
  return (
    <div className="col-span-6 flex items-center justify-center flex-col gap-[18px]">
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
            className="outline-none bg-[#f1f0f1]"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...props.register('username', {
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
            className="outline-none bg-[#f1f0f1]"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...props.register('password', {
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
    </div>
  );
};

export default LoginForm;
