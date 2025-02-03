import Card from "./ui/Card";

const TopOffers = () => {
  const cardData = [
    {
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/u/i/-original-imah6aj6kyrzysmz.jpeg?q=70&crop=false",
      alt: "Shoes",
      brands: "Reebok, HRX...",
      offer: "Min. 70% Off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/bag/u/t/s/-original-imah4v4humxgxsf9.jpeg?q=70&crop=false",
      alt: "Purse",
      brands: "Michael Kors, DKNY ...",
      offer: "Min. 70% Off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/w/c/11-fst-ki-3629e-blue-45-fausto-blue-original-imah7rkbdzhenqsu.jpeg?q=70&crop=false",
      alt: "Shoes",
      brands: "Ethnics",
      offer: "Min. 70% Off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/necklace-chain/g/y/o/1-51937-2024-07-necklace-vembley-original-imah77keecbsxt5g.jpeg?q=70&crop=false",
      alt: "Accessories",
      brands: "Fashion Jewellery",
      offer: "Min. 70% Off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/f/t/i/-original-imah46v7hgdsysqm.jpeg?q=70&crop=false",
      alt: "Men wear",
      brands: "UCB, Levi's, WROGN..",
      offer: "55-80% Off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/c/z/i/s-sk-4-big-carry-multicolor-st-kurta-kjfab-original-imah7kvnwmjugbjw.jpeg?q=70&crop=false",
      alt: "Ladies wear",
      brands: "Kurta Sets",
      offer: "Min. 70% Off",
    },
  ];

  return (
    <div className="mt-10 bg-white p-5 rounded">
      <h1 className="text-2xl font-semibold">Top Offers</h1>
      <div className="flex flex-wrap gap-3 justify-evenly mt-10">
        {cardData.map((val, idx) => (
          <Card key={idx} data={val} />
        ))}
      </div>
    </div>
  );
};

export default TopOffers;
