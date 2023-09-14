export default function orderByProps(obj, arr) {
  const array1 = [];
  const array2 = [];

  arr.forEach((element) => {
    for (const key in obj) {
      if (key === element) {
        array1.push({
          key: `${key}`,
          value: obj[key],
        });
      }
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      array2.push({
        key: `${key}`,
        value: obj[key],
      });
    }
  }

  const sortedArray = array2.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });

  const array = [...array1, ...sortedArray];

  return array;
}
