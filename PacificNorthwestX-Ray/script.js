
function switchOffers() {
   
    const offer1 = document.getElementById('offer1');
    const offer2 = document.getElementById('offer2');

    
    offer1.classList.toggle('active');
    offer2.classList.toggle('active');
}


setInterval(switchOffers, 3000);




const btn = document.getElementById("show-more-btn");
const moreProducts = document.getElementById("more-products");

btn.addEventListener("click", (event) => {
 
  const isVisible = moreProducts.style.display === "contents";

  moreProducts.style.display = isVisible ? "none" : "contents";
  event.target.textContent = isVisible ? "Show More products" : "Show Less";
});