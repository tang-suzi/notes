function flatten(arr) {
  // 如果数组中存在数组，则继续遍历，直到数组中不存在数组为止
  // 如果数组中不存在数组，则返回数组
  //   console.log(arr.some((item) => Array.isArray(item)))
  //   while (arr.some((item) => Array.isArray(item))) {
  //     // 将数组拆分成多个元素，并将其添加到新数组中
  //     arr = [].concat(...arr);
  //   }
  //   return arr;

  //   return [].concat(...arr.map((item) => {
  //     return Array.isArray(item) ? flatten(item) : item;
  //   }));

  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}

console.log(flatten([1, 2, 3, [4, 5, [6, 7]]]));
