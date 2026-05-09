import { iconIndex } from "../../../helpers/iconsCategories";

const CategoryBudgetCard = ({ category }) => {
  const hasBudget = !!category?.total_budget;

  const Icon = iconIndex[category?.icon];

  return (
    <div className="flex flex-col py-2">
      {/* icon + name + amount */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <Icon.icon size={16} />
          <span className="font-medium text-sm">{category.name}</span>
        </div>
        {hasBudget ? (
          <span className="font-medium text-gray-800">
            ${category.total_spent?.toFixed(2)}
          </span>
        ) : (
          <span className="text-sm italic text-gray-400">Budget not set</span>
        )}
      </div>

      {/* progress bar or description + set budget */}
      {hasBudget ? (
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-green-600"
            style={{
              width: `${Math.min((category?.total_budget / category?.total_spent) * 100, 100)}%`,
            }}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400 truncate max-w-45">
            {category.description}
          </span>
          <button className="text-sm font-semibold cursor-pointer text-green-600">
            Set budget
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryBudgetCard;
