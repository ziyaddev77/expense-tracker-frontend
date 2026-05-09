import { useQuery } from "@tanstack/react-query";
import { api } from "../services";

export const useDashboard = () => {
  const { data,isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => api.get("/dashboard"),
    select: (data) => data?.data
  });

  return { data, isLoading };
};


export const useWeeklyActivityChart = () => {
   const { data,isLoading } = useQuery({
    queryKey: ["weeklyActivity"],
    queryFn: () => api.get("/weekly-activity"),
    select: (data) => data?.data?.data
  });

  return { data, isLoading };
}
