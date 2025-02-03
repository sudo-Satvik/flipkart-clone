/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center flex-wrap pb-10">
      <img
        src={data.image}
        alt={data.alt}
        className="w-40 object-cover h-50"
      />
      <p className="text-sm text-gray-600 mb-[-5px]">{data.brands}</p>
      <p className="text-md font-medium">{data.offer}</p>
    </div>
  );
};

export default Card;
