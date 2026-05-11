import { CircleCheckBig, DollarSign, Plus, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BudgetPageSkeleton,
  SetBudgetModal,
  WelcomBudgetPage,
} from "../components";
import BudgetLimit from "../components/features/budgets/BudgetLimit";
import BudgetSpendingAnalisis from "../components/features/budgets/BudgetSpendingAnalysis";
import { Button } from "../components/ui/button";
import {
  useAddBudget,
  useDashboard,
  useGetCategories,
  useGetBudgets,
} from "../hooks";


function Budgets() {
  const [navTitle, setNavTitle] = useState("budget_limit");
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // ============= fetch ============
  const { data:categories } = useGetCategories();
  const { addBudgetMutation } = useAddBudget();
  const { data: dashboard, isLoading } = useDashboard();
  const { data: budgets, isLoading:isBudgetLoading } = useGetBudgets();

  const totalBudget = Number(dashboard?.total_budget ?? 0);
  const allocated = Number(dashboard?.allocated ?? 0);
  const remaining = Math.max(totalBudget - allocated, 0);

  useEffect(() => {
    if (!location.state?.openBudgetModal) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNavTitle("budget_limit");
    setSelectedCategoryId(String(location.state.categoryId ?? ""));
    setOpen(true);
    navigate(".", { replace: true, state: null });
  }, [location.state, navigate]);

  // handle save budget limit
  const handleSave = (data) => {
    addBudgetMutation(data, {
      onSuccess: () => {
        toast.success("Budget saved successfully!");
        setOpen(false);
        setSelectedCategoryId("");
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });
  };

  // get all the ids of the budget categories
  const budgetedCategoryIds = budgets?.map(b => b?.relationships?.category?.id)?.filter(Boolean);
  /**
   * get only the categories where not in the budget category ids array 
   * so we clear that we get only the category that have not budget.
   */
  const availableCategories = categories?.data?.filter(cat => !budgetedCategoryIds?.includes(cat?.id))


  if (isLoading) return <BudgetPageSkeleton />;

  return totalBudget === 0 ? (
    <WelcomBudgetPage />
  ) : (
    <div>
      <SetBudgetModal
        onSave={(data) => handleSave(data)}
        open={open}
        categories={availableCategories}
        initialCategoryId={selectedCategoryId}
        onClose={() => {
          setOpen(false);
          setSelectedCategoryId("");
        }}
      />
      {/* generate statistic */}
      <div className="bg-white ring ring-gray-300 shadow p-5 rounded mb-10">
        <h3 className="font-semibold text-2xl">Master Budget</h3>
        <div className="mt-5 flex justify-between flex-col gap-7 xl:flex-row xl:gap-0 items-start">
          <div className="flex-1">
            <p className="text-sm text-gray-500">
              Define your total monthly spending limit. We'll help you
              distribute it across your categories.
            </p>
            <span className="inline-block mt-7 mb-2">Total Monthly Budget</span>
            <div className="relative">
              <input
                type="text"
                disabled
                className="py-2 pl-6 ring text-lg ring-gray-400 rounded "
                value={totalBudget}
              />
              <DollarSign
                size={15}
                className="absolute text-gray-500 top-3.5 left-1"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-full gap-3 items-start flex-1">
            <div className="bg-[#F3F4F5] p-7 w-full ring ring-gray-400/60 min-w-50 h-40 rounded-md flex gap-3 flex-col">
              <Wallet size={30} />
              <span>ALLOCATED</span>
              <span className="text-2xl text-[#16332D]">{allocated} DH</span>
            </div>
            <div className="bg-[#F5FEFA] p-7 w-full ring ring-[#D1FAE5] min-w-50 h-40 rounded-md flex gap-3 flex-col">
              <CircleCheckBig className="text-[#197857]" size={30} />
              <span className="text-[#197857]">REMAINING</span>
              <span className="text-2xl text-[#1F5F4E]">{remaining} DH</span>
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
        <Button
          onClick={() => {
            setSelectedCategoryId("");
            setOpen(true);
          }}
        >
          <Plus /> Create New Budget
        </Button>
      </div>
      {/* === header title & create budget button */}

      {/* budget section navigation */}
      <div>
        <div className="border-b border-gray-300 space-x-4">
          <span
            onClick={() => setNavTitle("budget_limit")}
            className={`inline-block py-3 border-b-3 ${navTitle === "budget_limit" ? "border-green-700 text-[#16332D]" : "text-gray-500 border-transparent"}  cursor-pointer`}
          >
            Budget Limits
          </span>
          <span
            onClick={() => setNavTitle("spending_analisis")}
            className={`inline-block py-3 ${navTitle !== "budget_limit" ? "border-green-700 text-[#16332D]" : "text-gray-500 border-transparent"} border-b-3  cursor-pointer`}
          >
            Spending Analysis
          </span>
        </div>
      </div>
      {/* === budget section navigation */}

      {/* budget content */}
      {navTitle === "budget_limit" ? (
        <BudgetLimit budgets={budgets} isLoading={isBudgetLoading}/>
      ) : (
        <BudgetSpendingAnalisis />
      )}
      {/* === budget content === */}
    </div>
  );
}

export default Budgets;
