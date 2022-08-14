const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "N/A" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "L" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "N/A" },
    { year: "2012", result: "N/A" },
    { year: "2011", result: "N/A" },
    { year: "2010", result: "L" },
    { year: "2009", result: "N/A" },
      { year: "2002", result: "N/A" },
    { year: "2001", result: "W" },
  ];

function superbowlWin(record){
    let result = record.find((record) => record.result==="W");
    return result ? result.year : undefined;
}


console.log(`The year the team first won: YEAR ${superbowlWin(record)} .`);


/*
function add(a, b) {        
    console.log(a + b);
}

const add = function(a, b) {
    console.log(a+b);
}

let add = (a, b) => a + b;
console.log(add(3, 2)); */