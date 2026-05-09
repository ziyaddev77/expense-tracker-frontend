import { useQuery } from "@tanstack/react-query";
import { api } from "../services";

export const useDashboard = () => {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => api.get("/dashboard"),
    select: (data) => data?.data
  });

  return { data };
};
