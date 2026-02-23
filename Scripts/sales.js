const sales = [
  { day: "Monday", amount: 1240, region: "North" },
  { day: "Monday", amount: 890, region: "South" },
  { day: "Tuesday", amount: 1560, region: "North" },
  { day: "Tuesday", amount: 2100, region: "South" },
  { day: "Wednesday", amount: 980, region: "North" },
  { day: "Wednesday", amount: 1450, region: "South" },
  { day: "Thursday", amount: 1820, region: "North" },
  { day: "Thursday", amount: 1670, region: "South" }
];

/*Write a function that calculates total sales across all days and regions.

Write a function that finds the day with the highest total sales (combine North + South for each day).

Write a function that calculates the average sale amount per transaction.*/

function GetTotalSales() {
    let output = 0;
    sales.forEach((elem) => {
        output += elem.amount;
    })
    return output;
}

function GetBestDay() {
    let days = new Map();
    sales.forEach((elem) => {
        if (days.has(elem.day)) {
            let currentVal = days.get(elem.day);
            currentVal += elem.amount;
            days.set(elem.day, currentVal);
        } else {
            days.set(elem.day, elem.amount); 
        }
    });
    let bestDay = {day:"", amount:0};
    days.forEach((value, key) => {
        //console.log(`${key}:${value}`);
        if (bestDay.amount<value) {
            bestDay.day = key;
            bestDay.amount = value;
        }
    });
    return bestDay;
}

function GetAvg() {
    return GetTotalSales()/sales.length;
}

/*Create a summary report that logs to the console in this format:

=== Weekly Sales Report ===
Total Sales: R[amount]
Best Day: [day] (R[amount])
Average Transaction: R[amount]
=========================
Use template literals for the report format. Make sure all currency amounts display properly (no need to format with commas, just the number). 
Your code should work if someone adds more days or regions to the sales array. Don't hardcode day names or assume there are only 2 regions.*/

function LogSummary() {
    let bestDay = GetBestDay();
    output = `
    === Weekly Sales Report ===
    Total Sales: R${GetTotalSales()}
    Best Day: ${bestDay.day} (R${bestDay.amount})
    Average Transaction: R${GetAvg()}
    ===========================`;
    return output;
}

console.log(LogSummary());