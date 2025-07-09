let items = [{
    id:'item1',
    name:'Casual Shirts',
    details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, illo.',
    price:'700',
    image:'img1.jpg'
},
{
    id:'item2',
    name:'Formal Shirts',
    details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, illo.',
    price:'600',
    image:'img2.jpg'
},
{
    id:'item3',
    name:'T-Shirts',
    details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, illo.',
    price:'400',
    image:'img3.jpg'
},
{
    id:'item4',
    name:'Polo T-Shirts',
    details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, illo.',
    price:'500',
    image:'img4.jpg'
}]

let cartValue = 0
let cartNumber = 0
let cart = {}

// !If data exists in localStorage, it is loaded and parsed.

// !If not, all item quantities are set to 0.

// !This ensures cart data persists after refreshing the page.

let savedCart = localStorage.getItem("cart")
if(savedCart){
    cart = JSON.parse(savedCart)
}
else {
    // Initialize cart quantities to 0
    for (let item of items) {
        cart[item.id] = 0;
    }
}



function decreament(idi){
    let value = parseInt(document.getElementById(`${idi}`).innerText)   // conversion of string to integer
    --value
    if(value<0){
        value=0
    }
    cart[idi]=value  
    displayNumber(value,idi)
    updateCartNumber()
}

function increament(idi){
    let value = parseInt(document.getElementById(`${idi}`).innerText)   // conversion of string to integer
    ++value 
    cart[idi]=value 
    displayNumber(value,idi)
    updateCartNumber()
}

function displayNumber(abcd,idii){
    document.getElementById(`${idii}`).innerText = abcd
}

function updateCartNumber(){
    let total = 0
    for(let item of items){
        total+=cart[item.id] || 0 //if that defualt value is not set as 0 it will show NaN because if either of them is not increamented they the cart[item.id] that is "value" will remain null
    }
    cartNumber=total
    let cn=document.querySelector(".cartAmount")
    cn.innerText=total

    localStorage.setItem("cart",JSON.stringify(cart))
}




//!how to repeat the content and addon
let shop = document.querySelector(".shop")


let generateShop = () => {
    return (shop.innerHTML = items.map((x) => {
        return (`
        <div class="item" >
            <img width="220" src="${x.image}">
            <div class="details">
                <h3>${x.name}</h3>
                <p>${x.details}</p>
                <div class="price-quantity">
                    ₹${x.price}
                    <div class="buttons">
                        <i class="bi bi-dash-lg" onclick="decreament('${x.id}')"></i>
                        <div id="${x.id}" class="quantity">${cart[x.id] || 0}</div>
                        <i class="bi bi-plus-lg" onclick="increament('${x.id}')"></i>
                    </div>
                </div>
            </div>
        </div>
        `)
    }).join(""))
}



generateShop()
updateCartNumber()
localStorage.clear() //with this after two refreshes the cart gets clear