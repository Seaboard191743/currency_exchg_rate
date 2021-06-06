import "regenerator-runtime/runtime";
import { fetchData } from "../model";
import { createCurrRow } from "../view";

export const getData = async () => {
  const result = await fetchData();
  createCurrRow(result);
};
