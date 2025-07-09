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

let cart = {}

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

updateCartNumber()
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

let label=document.querySelector('#textlabel')
let shoppingCartItems=document.querySelector('#shopping-cart')

let generateCartItems = () => {
    if(cart.length != 0){

    }
    else{
        shoppingCartItems.innerHTML = ``
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <a href="cart.html"><button class="home">Back to Home</button>
        </a>
        `
    }
}