/* eslint-disable no-console */

"use client";

import React from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { BiError } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import SkeletonCard from "../../blogs/skeletonCard";

const GalleryContent = ({ id }) => {
  // eslint-disable-next-line no-template-curly-in-string
  const { data, isLoading } = useQuery({
    queryKey: ["Provider", id],
    queryFn: async () => {
      const res = await axios.get(`/api/provider/${id}`);
      return res?.data?.data;
    },
  });
  const providerData = data;
  const [imageArray, setImageArray] = React.useState(data?.shopgallery);
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
  const queryClient = useQueryClient();
  const { mutate: handleUpdate } = useMutation({
    mutationFn: async (update) => {
      try {
        const response = await axios.put(`/api/provider/${id}`, update);
        return response.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Something went wrong!", error);
        throw new Error("Failed to add new student");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Provider", id] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });

  const handleSave = async (imageUrl) => {
    handleUpdate({ ...providerData, shopgallery: [...imageArray, imageUrl] });
    console.log("Clicked", imageUrl);
  };

  const handleDelete = async (i) => {
    const newArr = [...imageArray];
    const urlArray = imageArray[i]?.split("/");
    const imgName = urlArray[urlArray.length - 1]?.split(".")[0];
    console.log(imgName);
    newArr.splice(i, 1);
    setImageArray(newArr);
    handleUpdate({ ...providerData, shopgallery: [...newArr] });
    console.log("Clicked");
  };

  const uploadImage = async () => {
    const imageData = new FormData();
    imageData.append("file", newImage);
    imageData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    imageData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    );
    imageData.append("folder", "Cloudinary-React");

    try {
      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: imageData,
        }
      );
      const uploadedImageData = await uploadResponse.json();
      const imageUrl = uploadedImageData.secure_url;
      if (!imageUrl || typeof imageUrl === "undefined") {
        toast.error("Error generating image URL");
        return;
      }
      setPreview(null);
      setNewImage(null);
      setImageArray((prev) => [...prev, imageUrl]);
      console.log(imageUrl);
      await handleSave(imageUrl);
      // useUpdateProviderByIdMutation.invalidateTags(['PROVIDER', id]);
    } catch (error) {
      console.log(error, "Error while image upload");
    }
  };
  const handleResetClick = () => {
    setPreview(null);
    setNewImage(null);
  };
  React.useEffect(() => {
    if (!isLoading) {
      setImageArray(data?.shopgallery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <SkeletonCard />;
  return (
    <div
      className="flex flex-wrap justify-center items-center gap-10"
      style={{ borderBottom: "1px solid #2B1607", paddingBottom: "16px" }}
    >
      <div className="flex flex-wrap items-center gap-10 ml-[10px] w-full">
        {imageArray?.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <h1 className="flex justify-center items-center gap-2 bg-[#ff2600] p-2 rounded-lg text-black">
              <BiError /> No Image in Gallery
            </h1>
          </div>
        ) : (
          imageArray?.map((image, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="relative rounded-[8px] w-[100%] md:w-[48%]">
              {id === isUser && (
                <button
                  type="button"
                  onClick={() => handleDelete(i)}
                  className="top-1/2 left-1/2 absolute bg-[orange] px-[10px] py-[5px] rounded-md font-bold text-[16px] text-[black] uppercase tracking-[5px] -translate-x-1/2 -translate-y-1/2"
                >
                  Delete
                </button>
              )}
              <Image
                alt="gallery"
                placeholder="empty"
                width={300}
                height={300}
                // fill
                loading="lazy"
                className="w-full"
                style={{ objectFit: "contain", maxHeight: "300px" }}
                src={image}
              />
            </div>
          ))
        )}
        {preview && (
          <div className="relative rounded-[8px] w-[100%] md:w-[48%] overflow-hidden">
            <div className="top-0 left-0 z-[2] absolute bg-[#0000003e] w-full h-full transition-all duration-2000 ease-in-out" />
            <div className="top-0 left-0 z-[3] absolute flex justify-center items-center gap-3 w-full h-full transition-all duration-2000 ease-in-out">
              <button
                type="button"
                onClick={uploadImage}
                disabled={!newImage}
                className="bg-[orange] px-[10px] py-[4px] rounded-md font-semibold text-black"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={handleResetClick}
                className="bg-[orange] px-[10px] py-[4px] rounded-md font-semibold text-black"
              >
                Reset
              </button>
            </div>
            <Image
              width={300}
              height={300}
              src={preview}
              alt="preview"
              className="rounded-[8px] w-[100%]"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </div>
        )}
        {isUser === id && (
          <div className="flex justify-center items-center bg-[#85858567] rounded-[8px] w-[100%] md:w-[48%] h-[300px]">
            <input
              type="file"
              id="imageUploader"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
            <button
              type="button"
              className="bg-[orange] px-[10px] py-[5px] rounded-md text-black"
              onClick={() => document.getElementById("imageUploader").click()}
            >
              Add Image +
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default GalleryContent;
