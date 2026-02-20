const chunk = (arr, size) => {
  const chunkedArr = [];
  let index = 0;
  while (index < arr.length) {
    const chunk = arr.slice(index, index + size);
    chunkedArr.push(chunk);
    index += size;
  }
  return chunkedArr;
};
