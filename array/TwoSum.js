const ToSum = (Array, target) => {
  let index = 0;
  while (index < Array.length) {
    const firstNum = Array[index];
    for (let i = index + 1; i < Array.length; i++) {
      if (firstNum + Array[i] === target) {
        return [index, i];
      }
    }
    index++;
  }
};
