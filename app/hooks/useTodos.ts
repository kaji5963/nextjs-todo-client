import { API_URL } from "@/constants/url";
import useSWR from "swr";
const fetcher = async (key: string) => {
  return await fetch(key).then((res) => res.json());
};

export const useTodos = () => {
  const { data, isLoading, error, mutate } = useSWR(
    `${API_URL}/allTodos`,
    fetcher
  );

  return {
    todos: data,
    isLoading,
    error,
    mutate,
  };
};
