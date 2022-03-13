const isArray = (payload) => {
  return payload && Array.isArray(payload);
};

const isEmptyArray = (payload) => {
  return isArray(payload) && payload.length === 0;
};

const isObject = (payload) => {
  return payload && typeof payload == "object";
};

const isEmptyObject = (payload) => {
  return isObject(payload) && Object.keys(payload).length === 0;
};

const isString = (payload) => {
  return payload && typeof payload == "string";
};

export { isArray, isEmptyArray, isObject, isEmptyObject, isString };
