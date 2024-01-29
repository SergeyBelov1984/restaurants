import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="flex gap-2 items-center flex-col">
      <h1 className="flex w-full justify-center font-bold size-5 ">
        Рестораны Твери
      </h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
