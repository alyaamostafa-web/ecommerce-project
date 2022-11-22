// Menu
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;

  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";

  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

/*-----------------preloader ----------------------------*/
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

/*-------------SCROLL UP----------------*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*Slick Slider*/
$(".brands-logo").slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1000,
  dots: true,
  arrows: false,
  // rtl: true,
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 898,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".products").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // rtl: true,
  dots: false,
  arrows: true,
  pauseOnHover: false,
  mobileFirst: true,

  responsive: [
    {
      breakpoint: 576,
      settings: "unslick",
    },

  ],
});

// Product Main img Slick
$("#product-main-img").slick({
  infinite: true,
  speed: 300,
  dots: false,
  arrows: true,
  fade: true,
  // rtl: true,
  asNavFor: "#product-imgs",
});
// Product imgs Slick
$("#product-imgs").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  // rtl: true,
  centerPadding: 0,

  vertical: true,
  asNavFor: "#product-main-img",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        vertical: false,
        arrows: false,
        dots: true,
      },
    },
  ],
});

// Increment And Decrement
const decrementBtn = document.querySelectorAll(".dec");
const incrementBtn = document.querySelectorAll(".inc");

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.value);
    increment++;
    this.previousElementSibling.value = increment;
  });
  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.value);
    decrement <= 1 ? 1 : decrement--;
    this.nextElementSibling.value = decrement;
  });
}

var btnEye = document.querySelectorAll(".btn-eye");
btnEye.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var item = e.target.closest(".product-item");
    var src = item.getElementsByTagName("img")[0].src;
    document.querySelector(".modal-body").innerHTML = `
    <div class="row">
    <div class="col-lg-6 col-md-6 col-12">
      <div class="qwick-view-left">
      <div class="product-main-image__item">
      <div class="img_box_1">
      <img class="full-width" alt="" src=${src}>
      </div>
    </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-12">
      <div class="qwick-view-right">
        <div class="qwick-view-content">
          <h1 class="product_title">Product name</h1>
          <div class="product-meta">
            <div class="product-model">
              <span>Model:</span>
              A248458
            </div>

            <div class="brand-wrapper">
              <span>Band:</span>
              <span class="brand">brand name</span>
            </div>
          </div>
          
            <div class="product-stock in-stock">In Stock</div>
            <!-- If Product Is Out Stock put class out-stock and content out Of Stock like this -->
      <!-- <div class="product-stock out-stock">out Of Stock</div> -->
       
          <div class="product-price product-info__price price-part">
            <span class="main amount price-box__old"><span class="money">29.00 L.E</span></span>
            <span class="price-box__new"><span class="money">19.00 L.E</span></span>
          </div>


          <div class="description">
            <ul>
              <li><i class="fas fa-play"></i>5.0 inch HD Screen</li>
              <li><i class="fas fa-play"></i>Android 4.4 KitKat OS</li>
              <li><i class="fas fa-play"></i>1.4 GHz Quad Core™ Processor</li>
              <li><i class="fas fa-play"></i>20 MP front Camera</li>
            </ul>
          </div>

        </div>
        <!-- <div class="quickview-plus-minus">
          <div class="cart-plus-minus">
            <div class="dec qtybutton">-</div>
            <input type="text" value="0" name="quantity" class="cart-plus-minus-box">
            <div class="inc qtybutton">+</div>
          </div>
          <div class="quickview-btn-cart">
            <button type="submit" class="addtocartqv btn-main">Add to Cart</button>
          </div>
        </div> -->
        <a href="./product-details.html" class="btn-main">View Details</a>

      </div>
    </div>
  </div>
    `;
    const myModal = new bootstrap.Modal(
      document.getElementById("quickViewModal")
    );
    myModal.show();
  });
});
const fitlerBtn = document.querySelector(".filter-button");
const sidebarFilter = document.querySelector(".sidebar-widget");
const closeFilter = document.querySelector(".filter-close");

fitlerBtn.addEventListener("click", () => {
  sidebarFilter.classList.add("active");
});
closeFilter.addEventListener("click", () => {
  sidebarFilter.classList.remove("active");
});
