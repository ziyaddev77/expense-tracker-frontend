import { defaultIcon, iconIndex } from "../../../helpers/iconsCategories";
import NoBudgetSet from "../dashboard/NoBudgetSet";
import BudgetLimitSkeleton from "./BudgetLimitSkeleton";

function BudgetLimit({budgets,isLoading}) {
  

  const progressSpendBar = (b) =>
    Math.min(
      (b?.attributes?.total_expenses / b?.attributes?.amount) * 100,
      100,
    );

  if (isLoading) {
    return <BudgetLimitSkeleton />;
  }

  return (
    <div className="pt-5">
      {budgets?.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {budgets?.map((b) => {
            if (b?.relationships?.category === null) return null;
            const Icon =
              iconIndex[b?.relationships?.category?.icon] || defaultIcon;

            return (
              <div
                key={b?.id}
                className="ring ring-gray-400/70 bg-white rounded-md p-6"
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{ background: Icon?.background }}
                    className="p-3 inline-block rounded-md"
                  >
                    <Icon.icon style={{ color: Icon?.color }} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Spent</span>
                    <span className="font-semibold text-lg">
                      {b?.attributes?.total_expenses} DH
                    </span>
                  </div>
                </div>
                {/* category name */}
                <h5 className="text-2xl my-3">
                  {b?.relationships?.category?.name}
                </h5>

                <div className="text-[#16332D] flex items-center justify-between">
                  <span
                    className={`${progressSpendBar(b) >= 100 ? "text-[#BA1A1A]" : progressSpendBar(b) >= 85 ? "text-orange-400" : ""}`}
                  >
                    Usage: {progressSpendBar(b).toFixed(0)}%
                  </span>
                  <span className="text-sm">
                    {b?.attributes?.total_expenses} DH / {b?.attributes?.amount}{" "}
                    DH
                  </span>
                </div>
                <div className="h-2 mt-2 bg-gray-300 rounded-2xl w-full overflow-hidden">
                  <div
                    style={{ width: `${progressSpendBar(b)}%` }}
                    className={`h-full ${progressSpendBar(b) >= 100 ? "bg-[#BA1A1A]" : progressSpendBar(b) >= 85 ? "bg-orange-400" : "bg-[#16332D]"}`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NoBudgetSet title={"Category"}>
          Selected a budget category to view spending details
        </NoBudgetSet>
      )}
    </div>
  );
}

export default BudgetLimit;
