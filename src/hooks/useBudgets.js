import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { budgetService } from "../services";

// get all budgets
export function useGetBudgets() {
  const { data, isLoading } = useQuery({
    queryKey: ["budgets"],
    queryFn: budgetService.getAll,
    select: (data) => data?.data?.data,
  });

  return { data, isLoading };
}

// create new budget
export function useAddBudget() {
  const queryClient = useQueryClient();

  const { mutate: addBudgetMutation, isPending } = useMutation({
    mutationFn: budgetService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });

  return { addBudgetMutation, isPending };
}

// edit budget
export function useEditBudget() {
  const queryClient = useQueryClient();

  const { mutate: editBudgetMutation, isPending } = useMutation({
    mutationFn: budgetService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });

  return { editBudgetMutation, isPending };
}

// delete budget
export function useDeleteBudget() {
  const queryClient = useQueryClient();

  const { mutate: deleteBudgetMutation, isPending } = useMutation({
    mutationFn: budgetService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });

  return { deleteBudgetMutation, isPending };
}
