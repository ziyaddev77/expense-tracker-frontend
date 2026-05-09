import { useNavigate } from "react-router-dom";
import { CategoryBudgetCard, DashboardSkeleton, NoBudgetSet, RecentExpenses } from "../components";
import { useDashboard } from "../hooks";
import WeeklyActivityChart from "../components/features/dashboard/WeeklyActivityChart";

function Dashboard() {
  const { data, isLoading } = useDashboard();

  const navigate = useNavigate();

  const calcTotalSpentInPourcentage = () => {
    return Math.min((data?.total_spent / data?.total_budget) * 100, 100).toFixed(0);
  };

  const totalSpent = calcTotalSpentInPourcentage();
  console.log(data)

  if (isLoading) return <DashboardSkeleton />;
  return (
    <div>
      {/* status && top categories */}
      <div className="flex items-start gap-7 mb-7">
        {/* status */}
        {data?.total_budget === 0 ? (
          <NoBudgetSet />
        ) : (
          <div className="rounded-md ring space-y-7 ring-gray-400/70 shadow p-5 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">
                  Monthly Budget Summary
                </h1>
                <p className="text-sm text-gray-500">
                  Your Status for Mars 2026
                </p>
              </div>
              <span className="text-[10px] p-1 rounded-full bg-[#D6E2DD] text-[#5B6763]">
                {totalSpent}% USED
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600/70 font-semibold">
                  TOTAL BUDGET
                </span>
                <span className="text-black font-bold">
                  {data?.total_budget} DH
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600/70 font-semibold">
                  TOTAL SPENT
                </span>
                <span className="text-black font-bold">
                  {data?.total_spent} DH
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600/70 font-semibold">
                  REMAINING
                </span>
                <span className="font-bold text-green-600">
                  {data?.remaining} DH
                </span>
              </div>
            </div>
            {/* total spent in percentage */}
            <div>
              <div className="flex text-sm items-center justify-between">
                <span className="font-semibold text-black">Budget Health</span>
                <span className="font-semibold text-gray-500">
                  Good Standing
                </span>
              </div>
              <div className="rounded-lg overflow-hidden h-4 mt-4 bg-gray-200">
                <div
                  style={{ width: `${totalSpent}%` }}
                  className="rounded-xl h-full bg-[#16332D]"
                ></div>
              </div>
            </div>
          </div>
        )}
        {/* ==== status ==== */}
        {/* top categories */}
        <div className="rounded-md ring ring-gray-400/70 w-80 shadow p-5">
          <h1 className="text-xl font-semibold">Top Categories</h1>
          <div className="space-y-1">
            {/* category */}
            {data?.top_categories?.map((c) => (
              <CategoryBudgetCard category={c} key={c.id} />
            ))}
            {/* category */}
          </div>
        </div>
        {/* === top categories === */}
      </div>
      {/* ==== status && top categories === */}

      <div className="flex items-start justify-between gap-7">
        <WeeklyActivityChart />
       <RecentExpenses expenses={data?.recent_expenses} onViewAll={() => navigate('/expenses')}/>
      </div>
    </div>
  );
}

export default Dashboard;
