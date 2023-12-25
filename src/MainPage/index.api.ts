import instance from "../api/instance";
import { FetchCategory, FetchCategoryResult } from "./index.type";

export const fetchCategory = async (): Promise<FetchCategory> => {
  const { data }: { data: FetchCategoryResult } = await instance.get(
    "category"
  );

  return data.data;
};
