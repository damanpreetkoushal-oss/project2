//banner//
<script>
const banner = document.querySelector(".banner-card");

function revealOnScroll() {
  const rect = banner.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    banner.classList.add("active");
    window.removeEventListener("scroll", revealOnScroll);
  }
}

window.addEventListener("scroll", revealOnScroll);
</script>


//--//




/* CART */
function addToCart(id) {
  fetch("add_to_cart.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "product_id=" + id
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

}




// Global Wishlist (No LocalStorage)
let wishlist = [];

// Add To Wishlist
function addToWishlist(id) {
  const product = productList.find(p => p.id === id);

  const alreadyExists = wishlist.find(item => item.id === id);
  if (!alreadyExists) {
    wishlist.push(product);
    alert("Added to Wishlist ❤️");
    updateWishlistCount();
  } else {
    alert("Already in Wishlist");
  }
}

  if (countElement) {
    countElement.innerText = wishlist.length;
  }
}

/* Banner Logic */
let slideIndex = 1;
showSlides(slideIndex);

// Auto Slide every 3 seconds
let slideInterval = setInterval(() => {
  plusSlides(1);
}, 3000);

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer(); // Reset timer on manual interaction
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetTimer();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (!slides || slides.length === 0) return; // Guard clause

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (slides[slideIndex-1]) slides[slideIndex-1].className += " active";
  if (dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}

function resetTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 3000);
}
