    let stocks = ["Adani", "Ambani", "GardenReach", "DiamondBlue"];

    // push()
    stocks.push("RelianceJio");

    // Pop()
    stocks.pop();

    // Unshift()
    stocks.unshift("TATA Motors");

    // Shift()
    stocks.shift();
    // console.log(stocks);

    // concat()
    let valueOfStocks = [2300, 4500, 10000, 5500];
    let combineArray = stocks.concat(valueOfStocks);
        // console.log(combineArray);

    // includes() -> check the elements in the array it is present or not.
        // console.log(stocks.includes("GardenReach"));

    // indexOf()
        // console.log(stocks.indexOf("Ambani", 2));

    //join() - convert array in to string.
        console.log(stocks.join("-"));

    // map()
        let studentMarks = [23, 25, 55, 68]
        let BonusMarks = studentMarks.map((x) => x*2);
        console.log(BonusMarks);

    // filter()
        let studentName = ["Harsh", "Bajrangi", "Sourav", "PrabhuDeva"]
        let wordOperation = studentName.filter((studentName) => studentName.length > 8);
        console.log(wordOperation);

    