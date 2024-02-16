let count =0;
const allCards=document.getElementsByClassName('card-body')
// console.log(allCards);
for(const card of allCards){
    // console.log(card);
    
    
    const cardName=card.childNodes[3].innerText
        const cardPrice=card.childNodes[5].innerText
    card.addEventListener('click',function () {
      const cardContainer=document.getElementById('cards-container')
      count= count +1
      const li=document.createElement('li')
       const p0 = document.createElement('p')
       const p1 = document.createElement('p')
       const p2 = document.createElement('p')
       p0.innerText=count 
       p1.innerText=cardName
       p2.innerText=cardPrice
       li.appendChild(p0)
       li.appendChild(p1)
       li.appendChild(p2)
       cardContainer.appendChild(li)
       card.parentNode.style.backgroundColor=('gray')
       const totalPrice=document.getElementById('total-price').innerText
       const total=parseInt(totalPrice)+parseInt(cardPrice)
       setInnerText('total-price',total)
       const btn =document.getElementById('apply')
    btn.addEventListener('click',function(){
        const couponCode=document.getElementById('coupon').value
       const coupon=  couponCode.split(' ').join('').toUpperCase()
       if(total>=200 && coupon==='SELL200' ){
        const discount =total*.20
        setInnerText('total-discount',discount.toFixed(2))
        const totalBail=total-discount
        setInnerText('total',totalBail)
       }else{
        setInnerText('total',total)
       }
     
    })
       
    })
   
   
}
const Purchase=document.getElementById('Purchase')
    
Purchase.addEventListener('click',function(){
   const  home =document.getElementById('go-home')
   home.classList.remove('hidden')
   

})
   
const home=document.getElementById('home')
    
home.addEventListener('click',function(){
   const  home =document.getElementById('go-home')
   home.classList.add('hidden')


})

function getText(id){
    document.getElementById(id).innerText
}
function setInnerText(id,value){
    document.getElementById(id).innerText=value
}