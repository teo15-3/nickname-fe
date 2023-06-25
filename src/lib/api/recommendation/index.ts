import type { AxiosResponse } from "axios";
import Axios from "..";

interface RecommendationData {
  title: string;
  category: string;
  tags: string[];
}

interface Nickname {
  id: string;
  nickname: string;
}

export const getData = async (id: string) => {
  const { data }: AxiosResponse<RecommendationData> = await Axios.get(
    `/nickname/${id}/nickname-userdemand`,
  );
  return data;
};

export const saveNickName = async ({ id, nickname }: Nickname) => {
  return Axios.post(`/nickname/${id}/nickname-request`, { nickname });
};
