import { createElement } from "./helper";
import { root, title } from "../constants/constants";

export const createDataHeader = (data) => {
  const { Date } = data;
  const titleDate = new Intl.DateTimeFormat().format(Date);
  console.log(titleDate);
  const titles = [
    "Наименование иностранной валюты",
    "Количество единиц иностранной валюты, буквенный код валюты",
    "Официальный курс",
  ];
  const dataHeader = createElement({ selector: "div", className: ["header"] });
  const dataHeaderTitle = createElement({
    selector: "h1",
    className: ["header__heading"],
  });
  dataHeaderTitle.innerText = `${title} ${titleDate}`;
  titles.forEach((item) => {
    const headerTitle = createElement({
      selector: "h3",
      className: ["header__title"],
    });
    headerTitle.innerText = item;
    dataHeader.appendChild(headerTitle);
  });

  return { dataHeader, dataHeaderTitle };
};

export const createCurrRow = (data) => {
  const { dataHeader, dataHeaderTitle } = createDataHeader(data);
  const wrapper = createElement({ selector: "div", className: ["wrapper"] });
  wrapper.append(dataHeaderTitle, dataHeader);
  data.forEach((item) => {
    const { Cur_Abbreviation, Cur_Name, Cur_OfficialRate, Cur_Scale } = item;
    const row = createElement({ selector: "div", className: ["data"] });
    const dataItem = `
        <div class = "data__name">${Cur_Name}</div>
        <div class = "data__abbr">${Cur_Scale} 
        <span class = "data__abbr--st">${Cur_Abbreviation}</span>
        </div>
        <div class = "data__rate">${Cur_OfficialRate}</div>
    `;
    row.insertAdjacentHTML("afterbegin", dataItem);
    wrapper.appendChild(row);
  });
  root.appendChild(wrapper);
};
