'use client';

import GallerySwiper from './gallerySwiper';

const GalleryDetails = () => {
  return (
    <div className="w-full flex-col justify-center items-center md:px-6 px-3">
      <div className="flex justify-center items-center">
        <span className="border-b-2 text-black text-xl font-semibold border-black py-2">Gallery</span>
      </div>
      <div className="flex p-4 justify-center items-center w-full">
        <div className="rounded-sm shadow-xl">
          <div>
            <h1 className="bg-secondary text-black text-center text-2xl font-bold py-2 rounded-t-md">
              FELICITATION OF DIGNITORIES AND PATRONS
            </h1>
          </div>
          <div className="px-5 py-4 pt-4">
            <GallerySwiper />
          </div>
          <span className="text-gray-800 text-lg font-semibold px-5 py-4 text-start ">
            <p className="text-break px-5">
              <p className="py-4">
                FELICITATION OF DIGNITORIES AND PATRONS <br />
              </p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque
              ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
              quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores quia dolor sit, amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut
              enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default GalleryDetails;
