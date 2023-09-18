import React from 'react';
import { useForm } from 'react-hook-form';
import { customerArray, providerArray } from './inputArray';
import { registerUser } from '../../lib/auth/registerUser';

const SignupForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [role, setRole] = React.useState('provider');

  // eslint-disable-next-line consistent-return
  const onSubmit = async (data) => {
    if (role === 'customer') {
      const { username, email, password, confirmPassword } = data;
      // eslint-disable-next-line no-console
      if (confirmPassword !== password) return console.log('passwords do not match');
      const payload = { username, email, password, role };
      await registerUser(payload);
    }
    reset();
    const modal = document.getElementById('my_modal_4');
    modal.close();
  };
  const inputArray = role === 'provider' ? providerArray : customerArray;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-6 md:p-0 col-span-11 md:col-span-7 flex items-center justify-center flex-col gap-[10px] md:gap-[15px]"
    >
      <h1 className="font-extrabold text-[21px]">Sign Up</h1>
      <div className="rounded-[4px] mb-[8px]">
        <button
          type="button"
          className={`font-400 text-[12px] px-[14px] py-[6px] rounded-tl-[4px] rounded-bl-[4px] 
          ${role === 'provider' ? 'bg-[#F8B800]' : 'bg-[#FFFDFD]'}`}
          style={{ border: '1px solid #F8B800' }}
          onClick={() => setRole('provider')}
        >
          Provider
        </button>
        <button
          type="button"
          className={`font-400 text-[12px] px-[14px] py-[6px] rounded-tr-[4px] rounded-br-[4px] border-[#8B8484]
          ${role === 'customer' ? 'bg-[#F8B800]' : 'bg-[#FFFDFD]'}`}
          style={{ border: '0.5px solid #8B8484' }}
          onClick={() => setRole('customer')}
        >
          Customer
        </button>
      </div>
      <div className="grid grid-cols-2 gap-[15px]">
        {inputArray.map((input) => (
          <div className="relative col-span-2 md:col-span-1" key={input.name}>
            <span className="text-[#4E4949] px-[2px] text-[9px] bg-[white] absolute -top-[6px] left-[10px]">{input.label}</span>
            <input
              type="text"
              className="outline-none p-1 px-[10px] rounded-[6px] text-[14px] text-[#3f3c3c]"
              style={{ border: '0.5px solid #4E4949' }}
              // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
              {...register(`${input.name}`, {
                required: true,
              })}
            />
          </div>
        ))}
      </div>
      <div className="modal-action flex flex-col gap-[7px] justify-center items-center">
        <button
          className="btn bg-[#FBBC05] hover:bg-[#fbbd05dc] border-none text-[#765D5F] px-[47px] normal-case font-700"
          type="submit"
          style={{ boxShadow: '7px 8px 10px 0px #00000040' }}
        >
          Sign Up
        </button>
        <span className="text-[#00000080] text-[12px]">Already Registered?</span>
      </div>
    </form>
  );
};

export default SignupForm;
