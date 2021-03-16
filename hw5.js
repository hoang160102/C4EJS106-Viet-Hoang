//ex1
//1.1 x recieves property from product
//1.2 
// let product = {
//     name: `xiao rice cooker`,
//     price: 1700,
//     brand: `xiaomi`,
//     color: `white`
// }   
// for (let property in product) {
//     console.log(`${property}: ${product[property]}`)
// }
//ex2
// const task = {
//     subject: `Implement login feature`,
//     createdBy: `Hoang Ngoc Duc`,
//     assignTo: `Nguyen Phuong Nam`,
//     dueDate: `2019-10-08T18:00:24+0000`,
//     expectedHours: 0.5,
//     }
//     let {subject, assignTo, dueDate} = task
//     console.log(subject, assignTo, dueDate)


//ex4
// let dictionary = {
//     debug: "The process of figuring out why your program has a certain error and how to fix it",
//     done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//     defect: "The formal word for ‘error’",
//     pm: "The short version of Project Manager, the person in charge of the final result of a project",
//     "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
// } 
// 4.1
// alert(`Hi there, this is dev dictionary`)
// let keyword = prompt("enter a keyword").toLowerCase()
// if (keyword == 'debug'){
//     alert(dictionary.debug)
// } else if (keyword == 'done') {
//     alert(dictionary.done)
// } else if (keyword == 'defect') {
//     alert(dictionary.defect)
// } else if (keyword == 'pm') {
//     alert(dictionary.pm)
// } else if (keyword == 'ui/ux') {
//     alert(dictionary["ui/ux"])
// } else {
//     alert(`We could find your word ${keyword}`)
//     let newKeyword = prompt("We could not find your word ${keyword}, leave your explaination") 
//     alert(`done`) 

//ex5 
//  let products = [
//      {
//          '#': 1,
//         name: 'Xiaomi portable charger 20000mah',
//          brand: 'Xiaomi',
//          price: 428,
//          color: 'White',
//          category: 'Charger',
//      },
//      {
//          '#': 2,
//          name: 'VSmart Active 1',
//          brand: 'Vsmart',
//          price: 5487,
//          color: 'Black',
//          category: 'Phone',
//      },
//      {
//          '#': 3,
//          name: 'Iphone X',
//          brand: 'Apple',
//          price: 21490,
//          color: 'Gray',
//          category: 'Phone',
//      },
//      {
//          '#': 4,
//          name: 'Samsung Galaxy A9',
//          brand: 'Samsung',
//          price: 8490,
//          color: 'Blue',
//          category: 'Phone',
//      }
//  ]
//5.1
//for(let product of products) {
//     console.log(`name: ${product.name}`) 
//     console.log(`price: ${product.price}`)
//5.2
// for (let product of products) {
//     console.log(`#${product[`#`]} ${product.name}`)
//     console.log(`price: ${product.price}`)
// }
// let position = Number(prompt("enter a position"))
// for (let product of products) {
//     if (product[`#`] == position) {
//         console.log(`name: ${product.name}`)
//         console.log(`brand: ${product.brand}`)
//         console.log(`price: ${product.price}`)
//         console.log(`color: ${product.color}`)
//         console.log(`category: ${product.category}`)
//     }
// }
//5.3
// let loaiHang = prompt("enter your category")
// for (let product of products) {
//     if(product.loaiHang == category) {
//         console.log(`----------------------`)
//         console.log(`name: ${product.name}`)
//         console.log(`price: ${product.price}`)
        
//     }
// }
//5.4
// products[0]["providers"] = ["phukienzerro", "dientucc"]
// products[1]["providers"] = ["Tgdd", "Ddghn", "Vhstore"]
// products[2]["providers"] = ["Tgdd"]
// products[3]["providers"] = ["Tgdd"]
// console.log(products)
// 5.5
// ex6
let message = "Hi there, this is your learning tasks to front-end developer career:"
let tasks = [
    {
        id: 1,
        name: "HTML",
        complete: false
    },
    {
        id:2,
        name: "CSS",
        complete:"false"
    },
    {
        id:3,
        name:"Basic of js",
        complete:"false"
    },
    {
        id:4,
        name:"Node Package Manager (npm)",
        complete: "false"
    },
    {
        id:5,
        name:"Git",
        complete:"false"  
    }
]
6.2
let command = prompt("Enter your command(New, Delete, Update, Complete)")
if (command == "new") {
    
    let newTask = prompt("enter new task")
    newTask = {
        id:6,
        name: newTask,
        complete: "false"
    }
    tasks.push(newTask)
    console.log("Hi there, this is your learning tasks to front-end developer career:")
    for(let key of tasks) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`Complete: ${key.complete}`);
    }
} 
//6.3

    else if (command == "Update") {
   
    let position = Number(prompt("enter position"))
    let title = prompt("enter new title")
    tasks[position].name = title
    for (let key of tasks ) {
    console.log(`${key.id}. ${key.name}`);
    console.log(`Complete: ${key.complete}`);
    }
}
//6.4

    else if (command == "complete") {
let newPosition = Number(prompt("enter position"))
tasks[newPosition-1].complete = true 
for (let key of tasks ) {
        console.log(`${key.id}. ${key.name}`);
        console.log(`Complete: ${key.complete}`);
        }
}
//6.5
    else if (command == "delete") {
        let position =  Number(prompt("enter position"))
        tasks.splice(delete_position-1,1)
        for (let key of tasks ) {
            console.log(`${key.id}. ${key.name}`);
            console.log(`Complete: ${key.complete}`);
            }
    }
