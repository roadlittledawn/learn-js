const weights = ["10", "-100", "-98", "-94", "1"];

const sort = (numbers) => {
  return numbers.sort((a, b) => a - b);
};

console.log(sort(weights));

const weightObjs = [
  {
    title: "cognac",
    weight: "-100",
  },
  {
    title: "rum",
    weight: "30",
  },
  {
    title: "gin",
    weight: "-83",
  },
  {
    title: "whiskey",
    weight: "1",
  },
  {
    title: "fernet",
    weight: "5",
  },
];

console.log();
