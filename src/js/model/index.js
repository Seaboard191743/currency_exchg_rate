import { URL, DAILY_RATE_REQ } from "../constants/constants";

export const fetchData = async () => {
  const response = await fetch(`${URL}${DAILY_RATE_REQ}`);
  const data = await response.json();
  return data;
};
