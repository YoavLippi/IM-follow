//#region ticket 1
const songs = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: 200, plays: 2500000, isLiked: true },
  { title: "Levitating", artist: "Dua Lipa", duration: 203, plays: 1800000, isLiked: false },
  { title: "Save Your Tears", artist: "The Weeknd", duration: 215, plays: 1900000, isLiked: true },
  { title: "Good 4 U", artist: "Olivia Rodrigo", duration: 178, plays: 2200000, isLiked: true },
  { title: "Peaches", artist: "Justin Bieber", duration: 198, plays: 1600000, isLiked: false },
  { title: "Stay", artist: "The Kid LAROI", duration: 141, plays: 2100000, isLiked: true }
];

function GetAllTitles() {
    return songs.map((elem) => {
        return elem.title;
    });
}

function GetLikedSongs() {
    return songs.filter((elem) => {
        return elem.isLiked;
    });
}

function GetLikedTitles() {
    return songs.filter((elem) => {
        return elem.isLiked;
    }).map((elem) => {
        return elem.title;
    })
}

function GetTotalDuration() {
    let totalDuration = songs.reduce((total, elem) => {
        return total + elem.duration;
    }, 0); 

    let seconds = totalDuration%60;
    let minutes = Math.floor(totalDuration/60);

    return `${minutes} minutes ${seconds} seconds`;
}

function GetPopularSongs() {
    return songs.filter((elem) => {
        return elem.plays > 2000000;
    });
}
console.log("===Songs===")
console.log(GetAllTitles());
console.log(GetLikedSongs());
console.log(GetLikedTitles());
console.log(GetTotalDuration());
console.log(GetPopularSongs());
//#endregion

//#region ticket 2
const watchHistory = [
  { title: "Stranger Things", genre: "Sci-Fi", rating: 8.7, hoursWatched: 12, year: 2016 },
  { title: "The Crown", genre: "Drama", rating: 8.6, hoursWatched: 8, year: 2016 },
  { title: "Breaking Bad", genre: "Drama", rating: 9.5, hoursWatched: 25, year: 2008 },
  { title: "Black Mirror", genre: "Sci-Fi", rating: 8.8, hoursWatched: 6, year: 2011 },
  { title: "The Witcher", genre: "Fantasy", rating: 8.2, hoursWatched: 4, year: 2019 },
  { title: "Dark", genre: "Sci-Fi", rating: 8.8, hoursWatched: 10, year: 2017 },
  { title: "Ozark", genre: "Drama", rating: 8.5, hoursWatched: 15, year: 2017 }
];

function GetHighRatedShows() {
    return watchHistory.filter((elem) => {
        return elem.rating >= 8.7;
    });
}

function GetTotalWatchTime() {
    let hours = watchHistory.reduce((total,elem) => {
        return total + elem.hoursWatched;
    }, 0)
    return `You've watched ${hours} hours of content!`;
}

function GetTitlesByGenre(genre) {
    return watchHistory.filter((elem) => {
        return elem.genre === genre;
    }).map((elem) => {
        return elem.title;
    });
}

//Calculate the average rating of all shows. Round to 1 decimal place.
function GetAverageRating() {
    return (watchHistory.reduce((total, elem) => {
        return total + elem.rating;
    },0)/watchHistory.length).toFixed(1);
}

//Create an array of strings in the format: "Title (Year) - Rating/10". For example: "Stranger Things (2016) - 8.7/10"
function GetViewingSummary() {
    return watchHistory.map((elem) => {
        return `${elem.title} (${elem.year}) - ${elem.rating}/10`;
    });
}

/*Find binge-worthy shows (use filter)
Write a function called getBingeWorthy that takes a 
minimum hours parameter and returns shows where you've watched at least that many hours. Test it with 10 hours*/
function GetBingeWorthy(minimumHours) {
    return watchHistory.filter((elem) => {
        return elem.hoursWatched >= minimumHours;
    });
}

console.log("===Netflix===");
console.log(GetHighRatedShows());
console.log(GetTotalWatchTime());
console.log(GetTitlesByGenre("Sci-Fi"));
console.log(GetAverageRating());
console.log(GetViewingSummary());
console.log(GetBingeWorthy(10));
//#endregion

//#region ticket 3
 const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 89, category: "Main", isVegetarian: true },
  { id: 2, name: "Chicken Burger", price: 67, category: "Main", isVegetarian: false },
  { id: 3, name: "Caesar Salad", price: 54, category: "Starter", isVegetarian: false },
  { id: 4, name: "Fries", price: 29, category: "Side", isVegetarian: true },
  { id: 5, name: "Chocolate Brownie", price: 39, category: "Dessert", isVegetarian: true },
  { id: 6, name: "Veggie Wrap", price: 62, category: "Main", isVegetarian: true }
];

const order = [
  { itemId: 1, quantity: 2 },
  { itemId: 4, quantity: 1 },
  { itemId: 5, quantity: 3 }
];

function GetVegetarian() {
    return menuItems.filter((elem) => {
        return elem.isVegetarian;
    });
}

function GetMenuItemsByCategory(category) {
    return menuItems.filter((elem) => {
        return elem.category===category;
    });
}

/*Write a function called calculateSubtotal that takes the order array and calculates the total cost. (reduce and a halper) You'll need to:

Loop through the order items
Find the matching menu item for each order item (use find method or a loop)
Multiply price by quantity for each item
Sum everything up*/
function CalculateSubtotal() {
    return order.reduce((total, elem) => {
        menuItem = menuItems.find((subElem) => {
            return subElem.id === elem.itemId;
        });
        return total + (menuItem.price*elem.quantity);
    }, 0);
}

/*Write a function called calculateTotal that:

Takes the subtotal as a parameter
Adds a 10% service fee
Adds a R15 delivery fee
Returns the final total rounded to 2 decimal places*/
function CalculateTotal(subtotal) {
    output = subtotal*1.1;
    output += 15;
    return output.toFixed(2);
}

/*{
  items:  array of { name, quantity, itemTotal },
  subtotal: number,
  serviceFee: number 
  deliveryFee: 15,
  total: number 
}*/
function CreateOrderSummary() {
    itemsArr = new Array();
    itemsArr = order.map((elem) => {
        menuItem = menuItems.find((subElem) => {
            return subElem.id === elem.itemId;
        });
        return { name: menuItem.name, quantity: elem.quantity, itemTotal: menuItem.price*elem.quantity };
    });
    output = "items: \n";
    itemsArr.forEach((elem) => {
        output += (`Name: ${elem.name}, Quantity: ${elem.quantity}, ItemTotal: ${elem.itemTotal}\n`);
    });
    subtotal = CalculateSubtotal();
    output += `subtotal: ${subtotal}\n`;
    output += `serviceFee: ${(subtotal*0.1).toFixed(2)}\n`;
    output += `deliveryFee: 15\n`;
    output += `total: ${CalculateTotal(subtotal)}`;
    return output;
}

console.log("===Menu===");
console.log(GetVegetarian());
console.log(GetMenuItemsByCategory("Main"));
console.log(CalculateSubtotal());
console.log(CreateOrderSummary());
//#endregion

//#region ticket 4
const classes = [
  { id: 1, name: "Morning Yoga", instructor: "Sarah", duration: 60, capacity: 20, enrolled: 15, time: "07:00" },
  { id: 2, name: "HIIT Bootcamp", instructor: "Mike", duration: 45, capacity: 15, enrolled: 15, time: "06:00" },
  { id: 3, name: "Spin Class", instructor: "Emma", duration: 50, capacity: 25, enrolled: 18, time: "18:00" },
  { id: 4, name: "Pilates", instructor: "Sarah", duration: 60, capacity: 12, enrolled: 8, time: "09:00" },
  { id: 5, name: "Boxing", instructor: "James", duration: 55, capacity: 20, enrolled: 12, time: "17:30" },
  { id: 6, name: "Evening Yoga", instructor: "Sarah", duration: 60, capacity: 20, enrolled: 20, time: "19:00" }
];

function GetAvailableClasses() {
    return classes.filter((elem) => {
        return elem.enrolled < elem.capacity;
    });
}

function GetClassesByInstructor(name) {
    return classes.filter((elem) => {
        return elem.instructor === name;
    });
}

function GetUtilisationRate() {
    return classes.map((elem) => {
        return { name: elem.name, utilisation:Math.round(elem.enrolled/elem.capacity*100) }
    });
}

function GetPopularClasses() {
    return GetUtilisationRate().filter((elem) => {
        return elem.utilisation >=80;
    });
}

function GetTotalEnrolled() {
    return classes.reduce((total, elem) => {
        return total + elem.enrolled;
    }, 0);
}

/*Create class schedule summary (use map)
Create an array of strings in the format: "Time - Name with Instructor (X spots left)". 
For example: "07:00 - Morning Yoga with Sarah (5 spots left)". 
If a class is full, show "(FULL)" instead.*/
function GetScheduleSummary() {
    return classes.map((elem) => {
        return `${elem.time} - ${elem.name} with ${elem.instructor} (${(elem.capacity===elem.enrolled)? "FULL":`${elem.capacity-elem.enrolled} spots left`})`
    });
}

console.log("===Gym===");
console.log(GetAvailableClasses());
console.log(GetClassesByInstructor("Sarah"));
console.log(GetUtilisationRate());
console.log(GetPopularClasses());
console.log(GetTotalEnrolled());
console.log(GetScheduleSummary());
//#endregion

//#region ticket 5
const products = [
    { id: 101, name: "Wireless Headphones", category: "Electronics", price: 599, stock: 45, soldThisMonth: 23 },
    { id: 102, name: "Yoga Mat", category: "Fitness", price: 249, stock: 120, soldThisMonth: 67 },
    { id: 103, name: "Coffee Maker", category: "Appliances", price: 1299, stock: 8, soldThisMonth: 12 },
    { id: 104, name: "Desk Lamp", category: "Home", price: 349, stock: 0, soldThisMonth: 34 },
    { id: 105, name: "Running Shoes", category: "Fitness", price: 1499, stock: 30, soldThisMonth: 45 },
    { id: 106, name: "Blender", category: "Appliances", price: 799, stock: 15, soldThisMonth: 8 },
    { id: 107, name: "Notebook Set", category: "Stationery", price: 129, stock: 200, soldThisMonth: 156 },
    { id: 108, name: "Water Bottle", category: "Fitness", price: 179, stock: 88, soldThisMonth: 91 }
];

function GetOutOfStock() {
    return products.filter(elem => {
        return elem.stock===0;
    });
}

function GetLowStockAlerts(threshold) {
    return products.filter((elem) => {
        return elem.stock < threshold;
    });
}

//Calculate the total value of all products in stock (price × stock for each product, summed up). Format as "R X,XXX".
function GetTotalInventoryValue() {
    let format = Intl.NumberFormat('en-SA', {style:"currency", currency:"ZAR"})
    let value = products.reduce((total, elem) => {
        return total + elem.price*elem.stock;
    }, 0)
    return `${format.format(value)}`;
}

// /Find products that sold more than 50 units this month, and return an array of just their names.
function GetBestSellers() {
    return products.filter((elem) => {
        return elem.soldThisMonth>50;
    }).map((elem) => {
        return elem.name;
    })
}

function GetRevenueByCategory() {
    let revTracker = new Map();
    products.forEach(elem => {
        if (revTracker.has(elem.category)) {
            temp = revTracker.get(elem.category);
            temp += elem.price*elem.soldThisMonth;
            revTracker.set(elem.category, temp);
        } else {
            revTracker.set(elem.category, elem.price*elem.soldThisMonth);
        }
    });
    return revTracker;
}

/*Create an array of objects for each product with:

{
  name: "Product Name",
  soldThisMonth: 23,
  revenue: 13777,
  stockStatus: "In Stock" // or "Low Stock" if < 10, or "Out of Stock" if 0
}*/
function CreateSalesReport() {
    output = new Array();
    products.forEach(elem => {
        let status = "In Stock";
        if (elem.stock < 10) {
            status = "Low Stock"
        }
        if (elem.stock === 0) {
            status = "Out of Stock"
        }
        output.push({ name:elem.name, soldThisMonth:elem.soldThisMonth, revenue:elem.soldThisMonth*elem.price, stockStatus:status });
    });
    return output;
}

/*Find products by category (write a reusable function)
Write a function called getProductsByCategory that takes a category name
and returns all products in that category sorted by price (lowest to highest). Test it with "Fitness".*/
function GetProductsByCategory(category) {
    let output = products.filter(elem => {
        return elem.category === category;
    }).toSorted((a,b) => a.price - b.price);
    return output;
}

console.log("===E-Commerce===")
console.log(GetOutOfStock());
console.log(GetLowStockAlerts(10));
console.log(GetTotalInventoryValue());
console.log(GetBestSellers());
console.log(GetRevenueByCategory());
console.log(CreateSalesReport());
console.log(GetProductsByCategory("Fitness"));
//#endregion