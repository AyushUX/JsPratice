const dataSet = [500, 200, 400, 500, 1000];

  const ayush = dataSet.reduce((acc, curr) => acc + curr, 100);
  console.log(ayush);

  const data = [
    { name: "ayush", score: 20 },
    { name: "piyush", score: 30 },
    { name: "shivangi", score: 25 },
    { name: "aakrati", score: 1 },
    { name: "lav", score: 11 }, 
  ];
  const sumData = data.reduce((acc, curr) => acc + curr.score, 100);
  console.log(sumData);


  //Filter 
  const filterData = data.filter((item) => item.id > 3);
  console.log(filterData);