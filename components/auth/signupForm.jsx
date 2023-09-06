import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
    const modal = document.getElementById('my_modal_4');
    modal.close();
  };
  const inputArray = [
    {
      label: 'Name of the firm*',
      name: 'nameOfFirm',
    },
    {
      label: 'Owner Name(s)*',
      name: 'ownerName',
    },
    {
      label: 'Address*',
      name: 'address',
    },
    {
      label: 'Contact Number(s)*',
      name: 'contactNumber',
    },
    {
      label: 'Services*',
      name: 'services',
    },
    {
      label: 'Website link*',
      name: 'websiteLink',
    },
    {
      label: 'Additional Links*',
      name: 'additionalLinks',
    },
  ];
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-6 md:p-0 col-span-11 md:col-span-7 flex items-center justify-center flex-col gap-[10px] md:gap-[15px]"
    >
      <h1 className="font-extrabold text-[21px]">Sign Up</h1>
      <div className="rounded-[4px] mb-[8px]">
        <button
          type="button"
          className="font-400 text-[12px] bg-[#F8B800] px-[14px] py-[6px] rounded-tl-[4px] rounded-bl-[4px]"
          style={{ border: '1px solid #F8B800' }}
        >
          Provider
        </button>
        <button
          type="button"
          className="font-400 text-[12px] bg-[#FFFDFD] px-[14px] py-[6px] rounded-tr-[4px] rounded-br-[4px] border-[#8B8484]"
          style={{ border: '0.5px solid #8B8484' }}
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
              className="outline-none p-1 px-[10px] rounded-[6px] text-[16px]"
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
