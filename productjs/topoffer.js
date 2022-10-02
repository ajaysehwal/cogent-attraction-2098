let cartadd=[];
let product_data=[
{
     img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ef804a8/crop/026575134_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Frosted Cranberry",
     name1:"Gentle Forming Hand soap",
     price:8.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa128252c/crop/026541160_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Pumpkin Pecan Waffles",
     name1:"Cleansing gel Hand Soap",
     price:7.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwebc72d86/crop/025147701_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Holiday Traditions",
     name1:"PocketBac Hand SanitiZers, 5-pack",
     price:8.00,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
   
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw99be6830/crop/026232764_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Straberry Pound cake",
     name1:"PocketBac Hand SanitiZers, 5-pack",
     price:8.00,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw184f1974/crop/026557139_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"White Pumpkin",
     name1:"Gentle Foaming Hand Soap",
     price:7.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw53a13f90/crop/026575138_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Winter Citrus Wreath",
     name1:"Gentle Foaming Hand Soap",
     price:8.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
   
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcabace75/crop/026393062_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Kitchen Lemon",
     name1:"Gentle & Clean Foaming Hand Soap",
     price:7.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7f3f4078/crop/026557137_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Sweet Cinnamon Pumpkin",
     name1:"Gentle Formimg Hand Soap",
     price:7.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3e04d4d8/crop/026526089_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Vampire Blood",
     name1:"Gentle Formimg Hand Soap",
     price:7.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa51898cf/crop/026540159_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Flannel",
     name1:"Gentle Formimg Hand Soap",
     price:7.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    {
        img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfeb30185/crop/026575135_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
     name:"Toasted Vanilla Chai",
     name1:"Gentle Formimg Hand Soap",
     price:8.50,
     offer:"Mix & Match: 5/$25",
     cart:"ADD TO BAG"
    },
    
]
let container=document.querySelector("#container");
console.log(product_data.length)
function displaydata(data){
container.innerHTML=null;
data.forEach(function(el){
    let div=document.createElement("div")
    let img=document.createElement("img");
    img.setAttribute("src",el.img);
    img.style.width="200px"
    img.style.height="350px"
    let name=document.createElement("h3");
    name.innerText=el.name;
    let name1=document.createElement("p");
    name1.innerText=el.name1;
    name1.style.fontSize="12px"
    let price=document.createElement("h3");
    price.innerText="$"+el.price;
    let offer=document.createElement("p");
    offer.innerText=el.offer;
    offer.style.color="red"
    offer.style.fontSize="10px"
    offer.style.marginBottom="5px"
    let btn=document.createElement("button");
    btn.innerText="ADD TO BAG";
    btn.addEventListener("click",function(){
     cartadd.push(el);
     localStorage.setItem("cartitems",JSON.stringify(cartadd))
    })
   div.append(img,name,name1,price,offer,btn);
   container.append(div)
})
}
displaydata(product_data)
document.querySelector("#logo").addEventListener("click",function(){
    document.location.href="index.html";
})
function topfun(){
    document.location.href="topoffer.html"
 }
 function bodycare(){
    document.location.href="bodycare.html"
 }
 function candle(){
  document.location.href="candles.html"

 }
 function wall(){
    document.location.href="homefragrance.html"
 }
 function men(){
    document.location.href="men.html"
 }
 function gift(){
    document.location.href="gifts.html"
 }
 function fall(){
    document.location.href="fallshop.html"
 }
 function cart(){
    document.location.href="cart.html"
 }

 let emails=document.querySelector("#email");
 let coemail=document.querySelector("#coemail");
 let LSstore=JSON.parse(localStorage.getItem("subscribe"))||[];
 document.querySelector("#subsubmit").addEventListener("click",function(){
    let obj={
       new_sub:emails.value,
       again:coemail.value,
    }
    if(obj.new_sub===obj.again||obj.new_sub!=""||obj.coemail!=""){
    LSstore.push(obj);
    localStorage.setItem("subscribe",JSON.stringify(LSstore));
    alert("Thank You ")
    }
 })

 let allproduct_data=[

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb031315c/crop/026517929_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Sweet Whiskey",
   name1:"Ultimate Hydration Body Cream",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd24bf42a/crop/026552802_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Bourbon",
   name1:"3-in-1 Hair, Face & Body Wash",
   price:15.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw472930bf/crop/026544410_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Sweet Cinnamon Pumpkin",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw240e57c4/crop/026520997_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Cinnamon Sandalwood",
   name1:"Body Wash and Foam Bath",
   price:15.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8f1efea3/crop/026551695_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Whiskey Reserve",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf42e31a5/crop/026528604_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Pumpkin Pecan Waffles",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82f45b97/crop/026501135_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"White Pumpkin & Chai",
   name1:"Shower Gel",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3ef2d6ce/crop/026495990_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Coffee & Whiskey",
   name1:"Body Spray",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw279c6757/crop/026494139_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Sweater Weather",
   name1:"Sweater Weather",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw91b8b4f2/hires/026490235.jpg?sh=471&yocs=o_s_",
    name:"Midnight Amber Glow",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa6813a85/crop/026491608_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Fall in Bloom",
   name1:"Ultimate Hydration Body Cream",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw45072c4a/crop/026528617_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Strawberry Pound Cake",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8e559fb4/crop/026494140_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Ivory Cashmere",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
  {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe94d668f/crop/026494135_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Pink Suede",
   name1:"Daily Nourishing Body Lotion",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
      cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw130adfa4/crop/026526099_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Strawberry Pound Cake",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
  
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ca41ca6/crop/026495998_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Coffee & Whiskey",
   name1:"3-in-1 Hair, Face & Body Wash",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ed209c3/crop/026494121_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Sweeter Weather",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6be440b/crop/026490241_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Midnight Amber Glow",
   name1:"Shower Gel",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe3f5bab/crop/026533846_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Warm Vanilla Sugar",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
  {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a7addbe/crop/026495999_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Leather & Brandy",
   name1:"3-in-1 Hair, Face & Body Wash",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc0c14c75/crop/026353220_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Eucalyptus Spearmint",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc00ff1b/crop/026502463_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Into the Night",
   name1:"Daily Nourishing Body Lotion",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2fb38c84/crop/026502529_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"A Thousand Wishes",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22111d6f/crop/026353200_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Eucalyptus Spearmint",
   name1:"Body Wash and Foam Bath",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf65c028c/crop/026520996_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name:"Vanilla Patchouli",
   name1:"Body Wash and Foam Bath",
   price:15.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0c223f68/crop/026528900_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Vanilla Patchouli",
   name1:"Ultimate Hydration Body Cream",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe87e819b/crop/026502467_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Into the Night",
   name1:"Fine Fragrance",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwadcbd8a0/crop/026502533_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"The Thousand Wishes",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1f94ae08/crop/026517925_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweet Whiskey",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3279864c/crop/026353202_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Lavender Vanilla",
   name1:"Body Wash and Foam Bath",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ca2df96/crop/026402388_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Lavender Sandalwood",
   name1:"Body Wash and Foam Bath",
   price:15.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dweab7023b/crop/026353222_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Lavender Vanilla",
   name1:"Ultimate Hyration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7864bc9/crop/026402390_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Eucalyptus Sage",
   name1:"Body Wash and Foam Bath",
   price:15.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd1f79f0c/crop/026434225_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fairytale",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf9b1131b/crop/026237209_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Ocean",
   name1:"3-in-1 Hair Face & Body Wash",
   price:13.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcef70510/crop/026449927_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Champagne",
   name1:"Ultimate Hyration Body Cream",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5cc3a85b/crop/026501127_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"White Pumpkin & Chai",
   name1:"Ultimate Hyration Body Cream",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwae11afdf/crop/026438528_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Japanese Cherry Blossom",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9d13677e/crop/026353204_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Orange Ginger",
   name1:"Body Wash And Foam Bath",
   price:14.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf97a6473/crop/026414639_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Butterfly",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7cc1e220/crop/026583302_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Champagne Toast",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4c236fc7/crop/026494127_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweater Weather",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5b9afff4/crop/026434224_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"In the Stars",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc9b51fd5/crop/026353212_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Lavender Vanilla",
   name1:"Moisturizing Body Lotion",
   price:15.50,
   offer:"Mix & Match Full-Size Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
  {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4d0ea3a6/crop/026520256_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Coffe & Whiskey",
   name1:"Shea Butter Cleansing Bar",
   price:8.50,
   offer:"Mix & Match 3/$12",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw27e2f2f7/crop/026533848_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Warm Vanilla Sugar",
   name1:"Ultimate Hyration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdd507265/crop/026434223_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"You're the One",
   name1:"Fine Fragrance Mist",
   price:17.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwae70344e/crop/026495993_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Mineral & Sea Salt",
   name1:"Body Spray",
   price:14.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8731c68e/crop/026394955_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Graphite",
   name1:"Body Spray",
   price:14.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8e20be00/crop/026501151_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Crip Morning Air",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5b9afff4/crop/026434224_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"In the Stars",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfaf9bf9c/crop/026502469_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Into the Night",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw47cf3427/crop/026528622_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Pecan Waffles",
   name1:"Whipped Body",
   price:18.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw107e109d/crop/026499758_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Twilight Woods",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc6262222/crop/026177563_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"TeakWood",
   name1:"3-in-1 Hair, Face & Body Wash",
   price:13.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3279864c/crop/026353202_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Lavender Vanilla",
   name1:"Body Wash and Foam Bath",
   price:14.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw202d1568/crop/026495830_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sunrise Woods",
   name1:"Ultimate Hydration Body",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5c83c693/crop/026494133_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweater Weather",
   name1:"Daily Nourishing Body Lotion",
   price:14.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa554cc7a/crop/026499761_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Twilight Woods",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc37d7e88/crop/026495759_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Twilight Woods",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54d6939b/crop/026397499_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Black Tie",
   name1:"Ultimate Hydration Body Cream",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe48030b9/crop/026397467_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Black Tie",
   name1:"3-in-1 Hair, Face & Body Wash",
   price:15.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb34dc416/crop/026533843_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Warm Vanilla Sugar",
   name1:"Shower Gel",
   price:13.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd87363b4/crop/026491610_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fall in Bloom",
   name1:"Daily Nourishing Body Lotion",
   price:15.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd1d2946d/crop/026529500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Moonlight Path",
   name1:"Fine Fragrance",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1ca91477/crop/026434253_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweet Pea",
   name1:"Fine Fragrance Mist",
   price:16.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw418925c5/crop/026299770_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Rose",
   name1:"Super Smooth Body Lotion",
   price:13.50,
   offer:"Mix & Match Full-Size: Buy 3, Get 1 Free",
   cart:"ADD TO BAG",
   },
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6178ea8e/crop/026578143_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Leaves",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   
   },
  
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3521f1be/crop/026556535_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sugared Pecan pie",
   name1:"Single Wike Candle",
   price:15.50,
   offer:"Mix & Match:2/$22",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c1f170c/crop/026560552_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Pecan Waffles",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw88ba6038/crop/026577216_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Hot Cocoa & Cream",
   name1:"Single Wick Candle",
   price:15.50,
   offer:"Mix & Match:2/$22",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw90fbce9c/crop/026536756_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Leaves",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c288955/crop/026459591_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Mahogany Teakwood Intense",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc0eea8b/crop/026546728_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fresh Balsam",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b32504a/crop/026536765_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fall Farmhouse",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1254df1/crop/026560150_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Apple",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwded231f1/crop/026531868_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweater Weather",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb898fca3/crop/026538792_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Honeycrisp Apple",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1bfbf58e/crop/026560151_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweet Cinnamon Pumpkin",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfeb1e3f8/crop/026538273_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Coffee & Whiskey",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5c354eeb/crop/026546730_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Frosted Cranberry",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4b99d247/crop/026578788_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fall in Bloom",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7aa743cc/crop/026560554_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Caramel Pumpkin Swirl",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd1cb55d7/crop/026560561_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Warm Apple Pie",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw94361467/crop/026575564_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"America's Favorite Pumpkin Snickerdoodle",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa0e64e88/crop/026560149_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Leaves",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7be4d4c4/crop/026546720_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Marshmallow Fireside",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwad4a505a/crop/026552835_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"The Perfect Autumn",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3f1b4b79/crop/026560725_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fireside",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb5c29370/crop/026537144_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Vanpire Blood",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw63db9b03/crop/026560719_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Champagne Toast",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3539ba66/crop/026560152_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Antumn Chai",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8787746d/crop/026553000_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Midnight Amber Glow",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },
   
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4337fc43/crop/026410273_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Eucalyptus Spearmint",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54e0182b/crop/026536766_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Cinnamon Stick",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },
   
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw17274a91/crop/026560555_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Old Fashioned Cider Donut",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },
   
   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08425f04/crop/026537627_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Carving",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw232eab22/crop/026538271_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Spiced Pumpkin & Patchouli",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4cbfaade/crop/026395120_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Modern Branches",
   name1:"3-Wick Candle Holder",
   price:18.95,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw63f0b2cd/crop/026555156_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"World Famous Pumpkin Cinnamon Bun",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7415fe1e/crop/026560553_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Cupcake",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw870aa060/crop/026499131_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Into the Night",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw43ee2ea6/crop/026546122_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"White Pumpkin",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw00a2581a/crop/026578790_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fall in Bloom",
   name1:"Single Wick Candle",
   price:15.50,
   offer:"Mix & Match:2/$22",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3a5fce80/crop/026546723_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Cuddle Weather",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe87f37c8/crop/026560718_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Mountain Teakwood",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd7baff6c/crop/026552832_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweater Weather",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0b24c734/crop/026536753_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Flannel",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4f5f5a2f/crop/026577217_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Cinnamon Bun",
   name1:"Single Wick Candle",
   price:15.50,
   offer:"Mix & Match:2/$22",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwac08f6f3/crop/026556957_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweater Weather",
   name1:"Single Wick Candle",
   price:15.50,
   offer:"Mix & Match:2/$22",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5981cce5/crop/026174124_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Silver Branches",
   name1:"Single Wick Candle Holder",
   price:7.95,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc15ddfff/crop/026544279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Vinnlla Pumpkin Marshmallow",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3f285ef7/crop/026412343_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Cinnamon Spical Vanilla",
   name1:"3-Wick Candle",
   price:26.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87fc1f81/crop/026560562_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Cinnamon Irish Cream",
   name1:"3-Wick Candle",
   price:24.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdeb88ec7/crop/026577218_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Spice Latte",
   name1:"Single Wick Candle",
   price:15.50,
   offer:"Mix $ Match 2/$22",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9bff5121/crop/026537626_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Ghoul Friend",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw50c0777f/crop/026560724_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"White Balsam & Vanilla",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw398a474c/crop/026578151_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Harvest Gathering",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbefca518/crop/026555160_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Five Star Texas Pecan Pie",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3af3f4ab/crop/026546124_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Vanilla Creme",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw458948ec/crop/026578145_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fresh Balsam",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd6ef9cca/crop/026538274_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Leather & Brandy",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2f83764a/crop/026560148_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fall Festival",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5fafc8a3/crop/026537630_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Enchanted Candy Potion",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1a6d1cc/crop/026555158_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Maine's Best Blueberry Cotten Candy",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwac86ae18/crop/026560720_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Walk in the Woods",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw95766b7c/crop/026578149_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Winter",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0d4359ec/crop/026555157_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Washington's Finest Apple Macchiato",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9423574a/crop/026531863_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Salted Butterscotch",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce733a95/crop/026544277_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Pumpkin Pecan Waffles",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa3d361dd/crop/026578780_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Spiced Apple Toddy",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw59fe4e45/crop/026578146_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Frosted Cranberry",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw65a7da93/crop/026537807_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Eucalyptus Mint",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwaa705694/crop/026578150_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"White Eucalyptus & Saga",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa17b7218/crop/026578782_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Sweet Whiskey",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8961c297/crop/026546721_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Fresh Fall Morning",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },

   {img:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8ab88380/crop/026578783_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
   name:"Crenberry Orange Seltzer",
   name1:"3-Wick Candle",
   price:13.50,
   offer:"",
    Cart:"ADD TO BAG"
   },
]
   let searchOptions0=document.querySelector("#searchdiv");
   searchOptions0.innerHTML=null

let search3=document.querySelector("#search");
  
 search3.addEventListener("input",function(){
   if(search3.value===""){
       searchOptions0.style.display="none"
   }else{
       searchOptions0.style.display="grid";
       let filtered=allproduct_data.filter(function(el){
           if(el.name.toLowerCase().includes(search3.value.toLowerCase())){
               return true;
           }else{
               return false;
           }
       })
       searchdata(filtered)
   }
 })


    let searchOptions=document.querySelector("#searchdiv");
 let Detailpage=[];
function searchdata(data){
searchOptions.innerHTML=null
data.forEach(function(el){
   let card = document.createElement("div");
        card.setAttribute("id","change1")
        card.addEventListener("click",function(){
           card.style.cursor="pointer"
           document.location.href="candles.html"
           Detailpage.push(el);
           localStorage.setItem("detailproduct",JSON.stringify(Detailpage));
           document.location.href="detailpage.html";
        })
          
          let name=document.createElement("h3")
          name.innerText=el.name;
        
           card.append(name)
           searchOptions.append(card);
})


}
searchdata(allproduct_data)
let data_per_page=5;
let curr_page=1;
let pages=Math.ceil(allproduct_data.length/data_per_page);
searchdata(allproduct_data.slice(0,data_per_page));
for(let i=1;i<=pages;i++){
 let button=document.createElement("button");
 button.innerText=i;
 button.addEventListener("click",function(){
   let pagedata=allproduct_data.slice((i-1)*data_per_page,i*data_per_page);
   searchdata(pagedata)
 })
}
  //  search.addEventListener("blur", function () {
    // searchOptions.style.display = "none";
    //});

    let headimg=document.querySelector("#headimg");
    headimg.addEventListener("click",function(){
      document.location.href="bodycare.html";
    })