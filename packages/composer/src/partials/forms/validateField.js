const validateField = (target) => {
  const { value, minLength, maxLength } = target;
  // console.log("maxLength", maxLength);
  // console.log("minLength", minLength);
  if (minLength !== -1 && maxLength !== -1) {
    // console.log("minLength !== -1 && maxLength !== -1");
    return value.length > minLength - 1 && value.length < maxLength + 1;
  } else if (minLength !== -1) {
    // console.log("minLength !== -1");
    return value.length > minLength - 1;
  } else if (maxLength !== -1) {
    // console.log("maxLength !== -1");
    return value.length < maxLength - 1;
  }
  return true;
};

export default validateField;
