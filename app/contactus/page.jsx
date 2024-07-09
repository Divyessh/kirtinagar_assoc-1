import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <main className="bg-white">
      <div className=" bg-white  md:px-[120px] px-4 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-secondary ">Contact us</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
            We’d love to hear from you
          </h1>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
          alt=""
          width={800}
          height={800}
          className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96 "
        />

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
          <div className="p-4 rounded-lg bg-secondary md:p-6 ">
            <span className="inline-block p-3 text-white rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Mail us
            </h2>
            <p className="mt-2 text-sm text-white">
              Merchant Legal entity name: KIRTI NAGAR TIMBER AND FURNITURE
              DEALERS ASSOCIATION
            </p>
            <a
              className="mt-2 text-sm text-white"
              href="mailto:kirtinagarwood@gmail.com"
            >
              kirtinagarwood@gmail.com
            </a>
          </div>

          <div className="p-4 rounded-lg bg-secondary md:p-6 ">
            <span className="inline-block p-3 text-white rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Visit us
            </h2>
            <p className="mt-2 text-sm text-white">Visit our office HQ..</p>
            <p className="mt-2 text-sm text-white">
              Kirti Nagar West Delhi DELHI 110015
            </p>
          </div>

          <div className="p-4 rounded-lg bg-secondary md:p-6 ">
            <span className="inline-block p-3 text-white rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Call us
            </h2>
            <p className="mt-2 text-sm ">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-sm text-white ">9810829271</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
