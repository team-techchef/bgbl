const getObjValue = (obj, path) => {
  if (typeof path !== 'string') {
    console.error('Type Error: path for getObjValue must be a string');
    return;
  }
  const pathArr = path.split('.');

  let curObj = obj;
  while (pathArr.length > 0) {
    const prop = pathArr.shift();
    curObj = curObj[prop];
  }
  return curObj;
};

export default getObjValue;
