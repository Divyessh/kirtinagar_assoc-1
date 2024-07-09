"use client";

/* eslint-disable no-underscore-dangle */

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import SkeletonCard from "../blogs/skeletonCard";
import Card from "../featuredProviders/card";

const SearchedProvider = ({ searchEle }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["providers"],
    queryFn: async () => {
      const res = await axios.get(`/api/provider`);
      return res;
    },
  });
  const providerData = data?.data?.data.filter(
    (provider) => provider?.isVerified
  );
  let newArr = [];
  let newArr2 = [];
  if (providerData) {
    newArr = providerData?.map((item) => {
      return item?.services?.some((service) =>
        service.toLowerCase().includes(searchEle.toLowerCase())
      )
        ? item
        : null;
    });
    newArr2 = providerData?.map((item) => {
      return item?.nameOftheFirm.toLowerCase().includes(searchEle.toLowerCase())
        ? item
        : null;
    });
  }
  // eslint-disable-next-line no-nested-ternary
  let searchedArr =
    newArr && newArr2
      ? [...new Set([...newArr, ...newArr2])]
      : newArr && !newArr2
      ? [...newArr]
      : newArr2 || [];
  searchedArr = searchedArr.filter((item) => item !== null);
  /* eslint-disable no-console */
  console.log(searchedArr);
  return isLoading ? (
    <SkeletonCard />
  ) : (
    <div>
      <span className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={"30px"}
          className="mt-[4px]"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>

        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6 mx-[4px]">
          Search Result
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[4px]"
          height={"30px"}
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </span>
      <div className="grid grid-cols-4 gap-[20px] pt-4 pb-12">
        {searchedArr?.map(
          (item) =>
            item == null ||
            (" " && item?._id && (
              <div
                key={item?._id}
                className="  px-8 col-span-4 md:col-span-1 flex items-center justify-center"
              >
                <Link href={`/services/${item?._id}/about`}>
                  <Card item={item} />
                </Link>
              </div>
            ))
        )}

        {/* {providerData?.map((item) => (
          <div key={item?._id} className="bg-transparent px-8 col-span-4 md:col-span-1  flex items-center justify-center">
            <Link href={`/services/${item?._id}/about`}>
              <Card item={item} />
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SearchedProvider;
