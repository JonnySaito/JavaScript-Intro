var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges", "Dates"];
// console.log(shoppingList);

document.write("<h1>This is my shopping List</h1>");

// document.write("<ul>");
//     document.write("<li>" + shoppingList[0] + "</li>");
//     document.write("<li>" + shoppingList[1] + "</li>");
//     document.write("<li>" + shoppingList[2] + "</li>");
//     document.write("<li>" + shoppingList[3] + "</li>");
//     document.write("<li>" + shoppingList[4] + "</li>");
// document.write("</ul>");

document.write("<ul>");
    for (var i = 0; i < shoppingList.length; i++) {
        document.write("<li>" + shoppingList[i] + "</li>");
    }
document.write("</ul>");

var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];
var tasks = [
    ["Cleaning"],
    ["Homework", "something else", "Shopping"],
    ["Work", "Gym"],
    [],
    ["Cleaning", "Go to the pub"]
];

console.log(days[1]);
console.log(tasks[1][1])


// console.log(tasks[1][2])

console.log(days);
console.log(tasks);

document.write("<h2>Daily Tasks</h2>");

document.write("<ul>");
    for (var i = 0; i < days.length; i++) {
        document.write("<li>" + days[i]);
            document.write("<ul>");
                if(tasks[i].length === 0){
                    document.write("<li>Well done, you have no tasks today</li>");
                } else {
                    for (var a = 0; a < tasks[i].length; a++) {
                        document.write("<li>" + tasks[i][a] + "</li>");
                    }
                }
            document.write("</ul>");
        document.write("</li>");
    }
document.write("</ul>");








// namePrompt();
// Functions

function namePrompt(){
    console.log("this is coming from namePrompt");
    var name = prompt("What is your name?");
    console.log("Hello " + name);
    document.getElementById("welcoming").innerHTML += "<h4>Hello "+name+" , welcome to the site</h4>";
}
