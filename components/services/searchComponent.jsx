const searchComponent = () => {
  return (
    <div className="flex w-full justify-center items-center py-4 px-8 ">
      <input type="text" placeholder="Keyword" className="border-2 border-secondary rounded-l-md bg-primary px-8 py-4 w-[35%]" />
      <input type="text" placeholder="Category" className="border-2 border-secondary bg-primary px-8 py-4 w-[35%]" />
      <button type="button" className=" bg-secondary text-black px-8  py-[18px] w-[30%] rounded-r-lg">
        Search
      </button>
    </div>
  );
};
export default searchComponent;
