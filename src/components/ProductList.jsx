function ProductList() {
  const data = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
      title: "Kilos",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home & Furniture",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
      title: "Appliances",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
      title: "Flight Bookings",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty, Toys & More",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
    },
  ];
  return (
    <div className="bg-white p-5 rounded w-full shadow-sm flex gap-10 flex-wrap justify-center cursor-pointer">
      {data.map((val, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={val.image} alt={val.title} className="h-16 w-16" />
          <p className="text-sm mt-2 font-medium">{val.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
