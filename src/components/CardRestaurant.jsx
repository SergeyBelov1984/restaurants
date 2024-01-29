import { useSearchParams, useParams } from "react-router-dom";
import { data } from "../api/config";

const CardRestaurant = () => {
  const { id } = useParams();
  const res = data.restaurant.find((element) => element.id.toString() === id);
  return (
    <div className="flex justify-center bg-black rounded-md w-4/6 gap-1">
      <div className="flex bg-slate-510 items-start p-1 w-32">
        <img
          className="flex object-contain rounded-md"
          src={res.url}
          alt="photo"
        />
      </div>
      <div className="flex flex-col w-4/5 p-2">
        <div className="flex font-bold text-white w-96"> {res.name}</div>
        <div className="py-2 font-serif text-xs antialiased text-white">
          {res.info}
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
