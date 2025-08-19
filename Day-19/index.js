// // let fetchData = fetch("https://fakestoreapi.com/products");
// // fetchData.then((response) => response.json()).then((data) => console.log(data));

// async function fetchData() {
// try {
//     let response = await fetch('https://fakestoreapi.com/products')
//     let products = await response.json()
//     let filterproducts = products.filter ((products) => products.price >150)
//     console.log(filterproducts)
//     console.log(products)
// } catch (error) {
//  console.log(error)    
// }    
// }
// fetchData()
fetch("https://fakestoreapi.com./products")
.then((res) => res.json())
.then((data) =>{data.fitler(products => products.price > 30 )})