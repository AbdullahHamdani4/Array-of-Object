// let product1={
//     nam:"Shoe",
//     price:1999,
//     reviews:[
//         {name:"Azam",Rating:"5Stars",text:"Kya joote hai"},
//         {name:"Abdullah",Rating:"2Stars",text:"Farig Joote hai"},
//         {name:"Bilal",Rating:"3Stars",text:"Haramiiiiiiiii"}
//     ]
// }
// console.log(product1);
// function constructor(nam,price,review1Name,review1Rating,review2Name,review2Rating) {
//     this.name=nam
//     this.price=price
//     this.review=[
//         {nam:review1Name,rating:review1Rating},
//         {nam:review2Name,rating:review2Rating}
//     ]
// }
// let ob1=new constructor("Abdullah",1999,"hasna",5,"biala",4 )
// console.log(ob1);

let checks=document.getElementsByClassName("input")
let activities=[]
function check(e) {
    e.preventDefault()
    console.log(checks[1].checked)
    for(let i=0; i<checks.length;i++){
    if(checks[i].checked){
        activities.push(checks[i].previousElementSibling.innerText)
    }
}
console.log(activities);
}
