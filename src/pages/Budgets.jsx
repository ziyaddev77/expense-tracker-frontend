import { Plus, DollarSign,Wallet,CircleCheckBig } from "lucide-react"
import { Button } from "../components/ui/button"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react";



function Budgets() {
  const [navTitle, setNavTitle] = useState('budget_limit')
  const navigate = useNavigate();
  return (
    <div>
      {/* generate statistic */}
      <div className="bg-white ring ring-gray-300 shadow p-5 rounded mb-10">
        <h3 className="font-semibold text-2xl">Master Budget</h3>
        <div className="mt-5 flex justify-between flex-col gap-7 xl:flex-row xl:gap-0 items-start">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Define your total monthly spending limit. We'll help you distribute it across your categories.</p>
            <span className="inline-block mt-7 mb-2">Total Monthly Budget</span>
            <div className="relative">
              <input type="text" disabled className="py-2 pl-6 ring text-lg ring-gray-400 rounded " value={20} />
              <DollarSign size={15} className="absolute text-gray-500 top-3.5 left-1"/>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-full gap-3 items-start flex-1">
              <div className="bg-[#F3F4F5] p-7 w-full ring ring-gray-400/60 min-w-50 h-40 rounded-md flex gap-3 flex-col">
                  <Wallet size={30}/>
                  <span>ALLOCATED</span>
                  <span className="text-2xl text-[#16332D]">1.850.00 DH</span>
              </div>
              <div className="bg-[#F5FEFA] p-7 w-full ring ring-[#D1FAE5] min-w-50 h-40 rounded-md flex gap-3 flex-col">
                  <CircleCheckBig className="text-[#197857]" size={30}/>
                  <span className="text-[#197857]">REMAINING</span>
                  <span className="text-2xl text-[#1F5F4E]">550.00 DH</span>
              </div>
          </div>
        </div>

      </div>
      {/* === generate statistic === */}



      {/* header title & create budget button */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-3xl font-semibold">Budget Planner</h1>
          <p className="text-sm text-gray-500">
            Manage your monthly spending limits and stay on track.
          </p>
        </div>
        <Button >
          <Plus /> Create New Budget
        </Button>
      </div>
      {/* === header title & create budget button */}


      {/* budget section navigation */}
      <div>
          <div className="border-b border-gray-300 space-x-4">
            <span onClick={() => {navigate('budget_limit'), setNavTitle('budget_limit')}} className={`inline-block py-3 border-b-3 ${navTitle === 'budget_limit' ? 'border-green-700 text-[#16332D]' : 'text-gray-500 border-transparent'}  cursor-pointer`}>Budget Limits</span>
            <span onClick={() => {navigate('spending_analisis'), setNavTitle('spending_analisis')}} className={`inline-block py-3 ${navTitle !== 'budget_limit' ? 'border-green-700 text-[#16332D]' : 'text-gray-500 border-transparent'} border-b-3  cursor-pointer`}>Spending Analysis</span>
          </div>
      </div>
      {/* === budget section navigation */}
      

      {/* budget content */}
      <Outlet />
      {/* === budget content === */}

    </div>
  )
}

export default Budgets