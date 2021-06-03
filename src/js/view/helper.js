export const createElement = ({
  selector,
  className = [],
  attributes = {},
}) => {
  const element = document.createElement(selector);
  className.length > 0
    ? element.classList.add(...className.filter((item) => item))
    : null;
  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr])
  );
  return element;
};
