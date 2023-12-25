export interface FetchCategoryResult {
  status: number;
  message: string;
  data: FetchCategory;
  categories: string[];
}

export interface FetchCategory {
  categories: string[];
}
