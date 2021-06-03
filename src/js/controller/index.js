import "regenerator-runtime/runtime";
import { fetchData } from "../model";
import { createCurrRow, createDataHeader } from "../view/pattern";

export const getData = async () => {
  const result = await fetchData();
  createCurrRow(result);
};
