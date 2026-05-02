import { Outlet } from "react-router-dom";
import Header from "../features/Header";
import SideBar from "../features/SideBar";

function AppLayout() {
  return (
    <div className="h-screen flex overflow-hidden bg-color-main">
      <div className="w-64 z-20 bg-white ring fixed top-0 bottom-0 left-0 ring-gray-300 shadow">
        <SideBar />
      </div>
      <div className="flex-1 ml-64 flex flex-col">
        <div className="bg-white w-full z-10 sticky top-0 ring ring-gray-300 shadow min-h-14">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
