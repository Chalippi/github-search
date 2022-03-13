const isArray = (payload) => {
  return Array.isArray(payload);
};

const isEmptyArray = (payload) => {
  return isArray(payload) && payload.length === 0;
};

const isObject = (payload) => {
  return typeof payload == "object";
};

const isEmptyObject = (payload) => {
  return isObject(payload) && Object.keys(payload).length === 0;
};

const isString = (payload) => {
  return typeof payload == "string";
};

export { isArray, isEmptyArray, isObject, isEmptyObject, isString };
