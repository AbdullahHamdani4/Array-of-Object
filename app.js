// let product1 = {
//     nam: "Shoe",
//     price: 1999,
//     reviews: [
//         { name: "Azam", Rating: "5Stars", text: "Kya joote hai" },
//         { name: "Abdullah", Rating: "2Stars", text: "Farig Joote hai" },
//         { name: "Bilal", Rating: "3Stars", text: "Haramiiiiiiiii" }
//     ]
// }
// console.log(product1);
function Constructor(nam, price, review1Name, review1Rating, review2Name, review2Rating) {
    this.name = nam
    this.price = price
    this.review = [
        { nam: review1Name, rating: review1Rating },
        { nam: review2Name, rating: review2Rating }
    ]
}
let feebacks = [
    { name: "babar azam", description: "Behtareen joote", rating: "5star" },
    { name: "Safee azam", description: "Alaa joote", rating: "3star" },
    { name: "Abdul azam", description: "Harami joote", rating: "1star" }
]
function showReviews(params) {
    reviews.classList.toggle("hide")
    reviews.innerHTML = `
     <ul>
                    <li>${feebacks[0].name}:${feebacks[0].description}</li>
                    <li>${feebacks[1].name}:${feebacks[1].description}</li>
                    <li>${feebacks[2].name}:${feebacks[2].description}</li>
                 </ul>
                `
}
// let ob1 = new constructor("Abdullah", 1999, "hasna", 5, "biala", 4)
// console.log(ob1);
