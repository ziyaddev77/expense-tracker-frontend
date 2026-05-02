function Dashboard() {
  return (
    <div>
      {/* status && top categories */}
      <div className="flex gap-7 mb-7">
        {/* status */}
        <div className="rounded-md ring space-y-7 ring-gray-400/70 shadow p-5 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Monthly Budget Summary</h1>
              <p className="text-sm text-gray-500">Your Status for Mars 2026</p>
            </div>
            <span className="text-[10px] p-1 rounded-full bg-[#D6E2DD] text-[#5B6763]">
              74% USED
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600/70 font-semibold">
                TOTAL BUDGET
              </span>
              <span className="text-black font-bold">2,500.00 DH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600/70 font-semibold">
                TOTAL SPENT
              </span>
              <span className="text-black font-bold">1,500.00 DH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600/70 font-semibold">
                REMAINING
              </span>
              <span className="font-bold text-green-600">650.00 DH</span>
            </div>
          </div>
          {/* total spent in percentage */}
          <div>
            <div className="flex text-sm items-center justify-between">
              <span className="font-semibold text-black">Budget Health</span>
              <span className="font-semibold text-gray-500">Good Standing</span>
            </div>
            <div className="rounded-lg overflow-hidden h-4 mt-4 bg-gray-200">
              <div className="w-[74%] rounded-xl h-full bg-[#16332D]"></div>
            </div>
          </div>
        </div>
        {/* ==== status ==== */}
        {/* top categories */}
        <div className="rounded-md ring ring-gray-400/70 w-80 shadow p-5">
          <h1 className="text-xl font-semibold">Top Categories</h1>
          <div className="space-y-1">
            {/* category */}
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold">Category name</span>
                <span className="text-[13px] text-gray-600">
                  420.00DH (total Budget)
                </span>
              </div>
              <div className="rounded-xl w-full overflow-hidden bg-gray-300 h-2 mt-1">
                <div className="w-[62%] h-full bg-green-800 rounded"></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold">Category name</span>
                <span className="text-[13px] text-gray-600">
                  420.00DH (total Budget)
                </span>
              </div>
              <div className="rounded-xl w-full overflow-hidden bg-gray-300 h-2 mt-1">
                <div className="w-[62%] h-full bg-green-800 rounded"></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold">Category name</span>
                <span className="text-[13px] text-gray-600">
                  420.00DH (total Budget)
                </span>
              </div>
              <div className="rounded-xl w-full overflow-hidden bg-gray-300 h-2 mt-1">
                <div className="w-[62%] h-full bg-green-800 rounded"></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold">Category name</span>
                <span className="text-[13px] text-gray-600">
                  420.00DH (total Budget)
                </span>
              </div>
              <div className="rounded-xl w-full overflow-hidden bg-gray-300 h-2 mt-1">
                <div className="w-[62%] h-full bg-green-800 rounded"></div>
              </div>
            </div>
            {/* category */}
          </div>
        </div>
        {/* === top categories === */}
      </div>
      {/* ==== status && tpo categories === */}

      <div className="flex gap-7">
        <div className="rounded-md ring space-y-7 ring-gray-400/70 shadow p-5 flex-1"></div>
        <div className="rounded-md ring ring-gray-400/70 w-100 shadow p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Recent Expenses</h1>
            <button className="cursor-pointer text-sm text-green-900 font-semibold">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
