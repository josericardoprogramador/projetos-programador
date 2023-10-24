let list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
    <li>
       <img src=${product.src}>
       <p>${product.name}</p>
       <p class="item-price">R$ ${product.price}</p>
    </li>
       `
})

    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, 
     
    }))

    showAll(newPrices)


} 

function sumAllItens(){
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)

   list.innerHTML =  `
    <li>
       <p>Valor total é R$ ${totalValue}</p>
    </li>
    
    `
}


function filterAllItens() {
    const filterJusVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItens)
filterAll.addEventListener('click', filterAllItens)




