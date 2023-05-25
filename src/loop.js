const data = [
  { date: "2023-04-07", totalIn: "73", totalPass: "2865" },
  { date: "2023-04-08", totalIn: "161", totalPass: "4397" },
  { date: "2023-04-09", totalIn: "181", totalPass: "5188" },
  { date: "2023-04-10", totalIn: "89", totalPass: "3403" },
  { date: "2023-04-11", totalIn: "112", totalPass: "3095" },
  { date: "2023-04-12", totalIn: "124", totalPass: "4083" },
  { date: "2023-04-13", totalIn: "129", totalPass: "4507" },
  { date: "2023-04-14", totalIn: "151", totalPass: "4674" },
  { date: "2023-04-15", totalIn: "215", totalPass: "4832" },
  { date: "2023-04-16", totalIn: "165", totalPass: "4343" },
  { date: "2023-04-17", totalIn: "87", totalPass: "3527" },
  { date: "2023-04-18", totalIn: "89", totalPass: "2704" },
  { date: "2023-04-19", totalIn: "96", totalPass: "2932" },
  { date: "2023-04-20", totalIn: "96", totalPass: "2639" },
  { date: "2023-04-21", totalIn: "1", totalPass: "205" },
];
let options = {
  xaxis: {
    categories: [],
  },
};
let series = [
  {
    name: "",
    data: [],
  },
  {
    name: "",
    data: [],
  },
];
function getitem() {
  series[0].name = "Total In";

  series[1].name = "Total Pass";
  for (let item of data) {
    series[0].data.push(item.totalIn);
    series[1].data.push(item.totalPass);
    options.xaxis.categories.push(item.date);
  }
}

getitem();
console.log(series);
