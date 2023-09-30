import CardSwiper from '../featuredProviders/cardSwiper';

const Cards = () => {
  return (
    <div className="card  border shadow-lg">
      <figure>
        <CardSwiper className="h-1/2" />
      </figure>
      <h3 className="card-body text-wrap text-[#807979] text-xl">FELICITATION OF DIGNITORIES AND PATRONS</h3>
    </div>
  );
};
export default Cards;
