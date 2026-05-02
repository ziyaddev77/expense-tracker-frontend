import { Outlet } from "react-router-dom"


function GuestRoute() {
  return (
    <div className="h-screen bg-color-main flex items-center justify-center">
        <Outlet />
    </div>
  )
}

export default GuestRoute