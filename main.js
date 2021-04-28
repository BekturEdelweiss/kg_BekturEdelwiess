function getPhoenetic(array) {
  const equivalence = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  let res = [];

  for (let num of array) {
    if (num <= 9) {
      res.push(equivalence[num]);
    } else {
      let tempArray = [];
      let numToStr = num.toString().split("");

      for (str of numToStr) {
        tempArray.push(equivalence[str]);
      }

      res.push(tempArray.join(""));
    }
  }
  return res;
}
