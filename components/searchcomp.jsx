/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import statement
import { useForm } from 'react-hook-form';

const Searchcomp = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const keywordValue = watch('keyword', '');
  const onClickHandler = (e) => {
    const selectedKeyword = e.target.textContent;
    setValue('keyword', selectedKeyword);
    if (selectedKeyword.trim() !== '') {
      router.push(`/services?keyword=${encodeURIComponent(selectedKeyword)}`);
    }
  };
  const onSubmit = (data) => {
    router.push(`/services?keyword=${encodeURIComponent(data?.keyword)}`);
    reset();
  };
  const onKeyDownHandler = (e) => {
    // Handle Enter key press
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      onSubmit({ keyword: keywordValue });
    }
  };
  return (
    <div className="md:block hidden bg-primary text-primary">
      <div className="form-control">
        <form className="input-group" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            {...register('keyword', { required: true, maxLength: 40 })}
            onKeyDown={onKeyDownHandler}
          />
          <button type="submit" onClick={onClickHandler} onKeyDown={onKeyDownHandler} className="btn btn-square" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchcomp;
