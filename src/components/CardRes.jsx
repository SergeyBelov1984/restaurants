import { useNavigate } from "react-router-dom";

const CardRes = ({ res }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center bg-black rounded-md w-4/6 gap-1"
      onClick={() => navigate(`/${res.id}`)}
    >
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
        <div className="flex flex-row justify-between text-white">
          <div>
            <p className="text-xs font-medium">Телефон</p>
            <p className="text-xs">{res.tel}</p>
          </div>
          <div>
            <p className="text-xs font-medium">Средний чек</p>
            <p className="text-xs">{res.price} &#8381;</p>
          </div>
          <div>
            <p className="text-xs font-medium">Время работы</p>
            <p className="text-xs">{res.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRes;
