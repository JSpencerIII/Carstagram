import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../axios";
import { Post } from "../../types/post";
import { AxiosResponse } from "axios";

export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => (await axiosClient.get<Post[], AxiosResponse<Post[]>>("/posts")).data,
    initialData: [] //cache over fetching
  });
}