import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../index.api";

export const useFetchCategory = () =>
  useSuspenseQuery({
    queryKey: ["fetchCategory"],
    queryFn: () => fetchCategory(),
  });
