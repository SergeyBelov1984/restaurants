import { useEffect, useState } from "react";
import { data } from "../api/config";
import CardRes from "../components/CardRes";
import { useSearchParams } from "react-router-dom";

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const searchText = searchParams.get("search")?.toLowerCase();
    setFiltered(
      data?.restaurant.filter(
        (element) =>
          element.name.toLowerCase().includes(searchText) ||
          element.info.toLowerCase().includes(searchText) ||
          element.address.toLowerCase().includes(searchText) ||
          searchText?.length === 0
      )
    );
  }, [searchParams]);

  const searchChange = (event) => {
    const newSearchText = event.target.value;
    searchParams.set("search", newSearchText);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <input
        className="w-4/6 border-2 border-black rounded-md"
        type="text"
        value={searchParams.get("search")}
        placeholder="Найти"
        onChange={searchChange}
      />
      {filtered.map((res) => (
        <CardRes res={res} key={res.id} />
      ))}
    </div>
  );
};

export default Restaurants;
