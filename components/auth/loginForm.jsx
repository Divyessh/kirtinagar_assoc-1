/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { BiSolidUser, BiLogInCircle } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { CgDanger } from 'react-icons/cg';

const LoginForm = ({ setisForgotPassword }) => {
  const { register, handleSubmit, reset } = useForm();
  const [verified, setVerified] = React.useState(true);
  const [error, setError] = React.useState('');
  // eslint-disable-next-line consistent-return
  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError(res?.error);
        setVerified(false);
        return;
      }
      const modal = document.getElementById('my_modal_4');
      modal.close();
      // eslint-disable-next-line no-shadow
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col justify-center items-center gap-[18px] col-span-11 md:col-span-7 py-10 md:p-0"
    >
      <div>
        <BiLogInCircle className="text-[#FBBC05] text-[60px]" />
        <h1 className="font-extrabold text-[21px]">Log In</h1>
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
            placeholder="Username"
            className="bg-[#f1f0f1] w-full md:w-[200px] text-black outline-none"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...register('username', {
              required: true,
            })}
          />
        </div>
        <div
          className="flex items-center gap-[10px] border-[#8B8484] bg-[#f1f0f1] px-[6px] py-[11px] rounded-[7px] w-[205px] md:w-fit"
          style={{
            boxShadow: '7px 8px 10px 0px #00000040',
          }}
        >
          <AiOutlineLock className="rounded-full text-[#6D6D6D] text-[18px]" />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#f1f0f1] w-full md:w-[200px] outline-none"
            // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
            {...register('password', {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {!verified && (
          <p className="flex items-center gap-[5px] border-[red] border-2 bg-[red] p-[5px] rounded-lg text-[white]">
            <CgDanger /> {error}
          </p>
        )}
        {!verified && error === 'Error: Please verify your email' && <p>Check Your Email</p>}
      </div>
      <div className="modal-action">
        <button
          className="bg-[#FBBC05] hover:bg-[#fbbd05dc] px-[47px] border-none font-700 text-[#765D5F] normal-case btn"
          type="submit"
          style={{ boxShadow: '7px 8px 10px 0px #00000040' }}
        >
          Log In
        </button>
      </div>
      <div className="place-items-center gap-[2px] grid grid-cols-7 w-[80%]">
        <p className="col-span-3 font-400 text-[#00000080] text-[13px] text-center">Don’t have an account?</p>
        <span className="bg-[#8B8484] w-[0.8px] h-full" />
        <p onClick={() => setisForgotPassword(true)} className="col-span-3 font-400 text-[#00000080] text-[13px] text-center">
          Forgot password
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
