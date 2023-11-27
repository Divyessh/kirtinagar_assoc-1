/* eslint-disable no-console */

'use client';

import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { BiError } from 'react-icons/bi';
import retryOperation from '../../../lib/retryOperation';
import { useGetProvidersByIdQuery, useUpdateProviderByIdMutation } from '../../../redux/api/apiSlice';
import SkeletonCard from '../../blogs/skeletonCard';

const GalleryContent = ({ id }) => {
  const { data, isLoading } = useGetProvidersByIdQuery(id);
  const providerData = data?.data;
  const imageArray = data?.data?.shopgallery;
  console.log(providerData);
  const [newImage, setNewImage] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  const { data: session } = useSession();
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const [update] = useUpdateProviderByIdMutation();

  // eslint-disable-next-line consistent-return
  const MAX_RETRIES = 10;
  const RETRY_DELAY = 300; // 300 milliseconds

  const handleSave = async (imageUrl) => {
    // console.log({ ...providerData, shopgallery: [...imageArray, imageUrl] });
    const result = await retryOperation(
      () => update({ ...providerData, shopgallery: [...imageArray, imageUrl] }),
      MAX_RETRIES,
      RETRY_DELAY,
    );
    return result;
    // Handle the result as needed
  };

  const uploadImage = async () => {
    const imageData = new FormData();
    imageData.append('file', newImage);
    imageData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    imageData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
    imageData.append('folder', 'Cloudinary-React');

    try {
      const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: imageData,
      });
      const uploadedImageData = await uploadResponse.json();
      const imageUrl = uploadedImageData.secure_url;
      setPreview(null);
      setNewImage(null);
      console.log(imageUrl);
      handleSave(imageUrl);
    } catch (error) {
      console.log(error, 'Error while image upload');
    }
  };
  const handleResetClick = () => {
    setPreview(null);
    setNewImage(null);
  };

  if (isLoading) return <SkeletonCard />;
  return (
    <div className="flex items-center gap-10 flex-wrap justify-center" style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <div className="w-full flex items-center gap-10 flex-wrap ml-[10px]">
        {imageArray?.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            <h1 className="bg-[#ff2600] flex items-center justify-center gap-2 text-black p-2 rounded-lg">
              <BiError /> No Image in Gallery
            </h1>
          </div>
        ) : (
          imageArray?.map((image) => (
            <Image
              key={image?.id}
              alt="gallery"
              placeholder="empty"
              width={300}
              height={300}
              loading="lazy"
              className="w-[100%] md:w-[48%] rounded-[8px]"
              style={{ objectFit: 'cover', height: '300px' }}
              src={image}
            />
          ))
        )}
        {preview && (
          <div className="w-[100%] md:w-[48%] relative rounded-[8px] overflow-hidden">
            <div className="absolute transition-all ease-in-out duration-2000 w-full h-full top-0 left-0 bg-[#0000003e] z-[2]" />
            <div className="flex absolute transition-all ease-in-out duration-2000 w-full h-full top-0 left-0 items-center justify-center gap-3 z-[3]">
              <button
                type="button"
                onClick={uploadImage}
                disabled={!newImage}
                className="bg-[orange] font-semibold text-black px-[10px] py-[4px] rounded-md"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={handleResetClick}
                className="bg-[orange] font-semibold text-black px-[10px] py-[4px] rounded-md"
              >
                Reset
              </button>
            </div>
            <Image
              width={300}
              height={300}
              src={preview}
              alt="preview"
              className="w-[100%] rounded-[8px]"
              style={{ objectFit: 'cover', height: '300px' }}
            />
          </div>
        )}
        {isUser === id && (
          <div className="flex items-center justify-center w-[100%] md:w-[48%] rounded-[8px] h-[300px] bg-[#85858567]">
            <input type="file" id="imageUploader" className="hidden" onChange={handleImageChange} accept="image/*" />
            <button
              type="button"
              className="bg-[orange] px-[10px] py-[5px] rounded-md text-black"
              onClick={() => document.getElementById('imageUploader').click()}
            >
              Add Image +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryContent;
