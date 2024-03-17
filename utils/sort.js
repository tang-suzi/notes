function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // 将剩余的元素添加到结果数组中
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}
function heapify(arr, index, length) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, largest, length);
  }
}
// 从小到大排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // 冒泡排序 重复地遍历要排序的数组，依次比较相邻的两个元素，如果它们的顺序错误就交换它们，直到没有需要交换的元素为止
  //   const len = arr.length;
  //   for (let i = 0; i < len - 1; i++) {
  //     for (let j = 0; j < len - 1 - i; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         // 如果前一个元素大于后一个元素，则交换它们的位置
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       }
  //     }
  //   }
  //   return arr;

  /**
   * 选择排序
   * 1. 首先，找到数组中的最小元素，并将其与第一个元素交换位置（如果最小元素就是第一个元素，则不进行交换）。
   * 2. 然后，在剩余未排序的部分中找到最小的元素，并将其与第二个元素交换位置。
   * 3. 依此类推，直到所有元素都被排序。
   */
  //   const len = arr.length;
  //   for (let i = 0; i < len - 1; i++) {
  //     let minIndex = i;
  //     // 在未排序部分中找到最小元素的索引
  //     for (let j = i + 1; j < len; j++) {
  //       if (arr[j] < arr[minIndex]) {
  //         minIndex = j;
  //       }
  //     }
  //     // 将最小元素与当前位置的元素交换位置
  //     if (minIndex !== i) {
  //       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  //     }
  //   }
  //   return arr;

  /**
   * 插入排序
   * 1. 将数组视为两部分，一部分是已排序部分，一部分是未排序部分。开始时，已排序部分只包含第一个元素，而未排序部分包含剩余的元素。
   * 2. 从未排序部分选择第一个元素，将其插入到已排序部分的正确位置，使得已排序部分仍然保持有序。
   * 3. 重复步骤 2，直到所有元素都被插入到已排序部分
   */
  //   const len = arr.length;
  //   for (let i = 1; i < len; i++) {
  //     let current = arr[i];
  //     let j = i - 1;
  //     // 将当前元素插入到已排序部分的正确位置
  //     while (j >= 0 && arr[j] > current) {
  //       arr[j + 1] = arr[j];
  //       j--;
  //     }
  //     arr[j + 1] = current;
  //   }
  //   return arr;

  /**
   * 归并排序
   * 将待排序数组不断分割成更小的数组，直到每个小数组只包含一个元素，然后通过合并操作将这些小数组逐步合并成一个有序的数组
   * 1. 分割：将数组分成两个长度相等（或近似相等）的子数组。
   * 2. 递归排序：对这两个子数组分别进行归并排序。
   * 3. 合并：合并两个已排序的子数组，得到一个新的有序数组。
   */
  //   const mid = Math.floor(arr.length / 2);
  //   const left = arr.slice(0, mid);
  //   const right = arr.slice(mid);
  //   return merge(mergeSort(left), mergeSort(right));

  /**
   * 快速排序
   *   1. 从数列中挑出一个元素，称为"基准"（pivot）；
   *   2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区操作；
   *   3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
   *   4. 递归排序左右子数列，直到每个子数列只包含一个元素。
   *   5. 合并排序好的子数列，得到完整的排序数列。
   */
  //   const pivot = arr[Math.floor(arr.length / 2)]; // 选择基准值
  //   const left = [];
  //   const right = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i === Math.floor(arr.length / 2)) {
  //       continue;
  //     }
  //     if (arr[i] < pivot) {
  //       left.push(arr[i]);
  //     } else {
  //       right.push(arr[i]);
  //     }
  //   }
  //   return [...quickSort(left), pivot, ...quickSort(right)]; // 递归排序左右子数组，并合并

  /**
   * 堆排序
   * 1. 将数组构建成一个大顶堆（堆的根节点是最大的元素）。
   * 2. 将根节点和最后一个元素交换位置，并将数组长度减 1。
   * 3. 将数组重新调整为一个大顶堆。
   * 4. 重复步骤 2 和 3，直到数组长度为 1。
   */
  //   for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
  //     heapify(arr, i, arr.length);
  //   }
  //   // 交换堆顶元素和堆尾元素，并调整堆
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     [arr[0], arr[i]] = [arr[i], arr[0]];
  //     heapify(arr, 0, i);
  //   }
  //   return arr;

  /**
   * 希尔排序
   * 将整个数组分成若干个间隔为 h 的子序列，然后对每个子序列进行插入排序，最后再对整个数组进行一次插入排序
   */
  // const len = arr.length;
  // let gap = Math.floor(len / 2); // 初始间隔值

  // // 希尔排序主循环
  // while (gap > 0) {
  //   // 对每个子序列进行插入排序
  //   for (let i = gap; i < len; i++) {
  //     let temp = arr[i];
  //     let j = i - gap;
  //     while (j >= 0 && arr[j] > temp) {
  //       arr[j + gap] = arr[j];
  //       j -= gap;
  //     }
  //     arr[j + gap] = temp;
  //   }
  //   // 缩小间隔值
  //   gap = Math.floor(gap / 2);
  // }
  // return arr;

  /**
   * 计数排序
   * 利用一个额外的数组来存储每个元素的出现次数，然后根据这些计数来重新排列数组。计数排序的基本思想是假设输入的元素都是在一个确定的范围内，并且每个元素都是非负整数
   * 1. 找出待排序数组中的最大值和最小值，确定计数数组的长度。
   * 2. 创建一个计数数组，长度为最大值与最小值之间的范围。
   * 3. 遍历待排序数组，统计每个元素出现的次数，并将统计结果存储在计数数组中。
   * 4. 根据计数数组中的统计结果，重新排列待排序数组
   */
  // const len = arr.length;
  //   // 找出最大值和最小值
  //   let max = arr[0], min = arr[0];
  //   for (let i = 1; i < len; i++) {
  //       if (arr[i] > max) {
  //           max = arr[i];
  //       }
  //       if (arr[i] < min) {
  //           min = arr[i];
  //       }
  //   }
  //   // 创建计数数组并统计每个元素出现的次数
  //   const countArray = Array(max - min + 1).fill(0);
  //   for (let i = 0; i < len; i++) {
  //       countArray[arr[i] - min]++;
  //   }
  //   // 将统计结果写回原数组
  //   let index = 0;
  //   for (let i = 0; i < countArray.length; i++) {
  //       while (countArray[i] > 0) {
  //           arr[index++] = i + min;
  //           countArray[i]--;
  //       }
  //   }
  //   return arr;

  /**
   * 桶排序
   * 将待排序的元素分配到有限数量的桶中，然后对每个桶中的元素进行排序，最后将所有的桶合并起来得到有序的结果。桶排序的实现需要知道待排序元素的分布情况，通常用于对均匀分布的元素进行排序
   */
  // 找到最大值和最小值
  // let min = arr[0];
  // let max = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   } else if (arr[i] > max) {
  //     max = arr[i];
  //   }
  // }
  // // 创建桶并初始化
  // const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  // const buckets = new Array(bucketCount);
  // for (let i = 0; i < bucketCount; i++) {
  //   buckets[i] = [];
  // }
  // // 将元素分配到桶中
  // for (let i = 0; i < arr.length; i++) {
  //   const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
  //   buckets[bucketIndex].push(arr[i]);
  // }
  // // 对每个桶中的元素进行排序，并合并桶
  // const result = [];
  // for (let i = 0; i < bucketCount; i++) {
  //   insertionSort(buckets[i]); // 这里使用插入排序对每个桶进行排序
  //   result.push(...buckets[i]);
  // }
  // return result;
  return arr.sort((a, b) => a - b);
}

// 从大到小排序
function quickSortDescending(arr) {
  //   if (arr.length <= 1) {
  //     return arr;
  //   }
  //   return arr.sort((a, b) => b - a);
  return quickSort(arr).reverse();
}
// 数组打乱
function sort(arr) {
  // 循环数组 通过随机数取出放入新数组
  //   const sortArr = [];
  //   while (arr.length) {
  //     const index = Math.floor(Math.random() * arr.length);
  //     sortArr.push(arr[index]);
  //     arr.splice(index, 1);
  //   }

  //
  return arr.sort(() => Math.random() - 0.5);
}
