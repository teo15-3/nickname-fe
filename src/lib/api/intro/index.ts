import type { AxiosResponse } from "axios";
import Axios from "..";

interface IntroData {
  userCount: number;
}

const getIntroData = async () => {
  const { data }: AxiosResponse<IntroData> = await Axios.get("/usercount");
  return data;
};

export default getIntroData;
