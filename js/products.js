/* Products Page */
/*Price Range */
const range = document.querySelectorAll(".range-slider input");
let progress = document.querySelector(".range-slider .progress");
let gap = 1000;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minrange = parseInt(range[0].value),
      maxrange = parseInt(range[1].value);

    if (maxrange - minrange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxrange - gap;
      } else {
        range[1].value = minrange + gap;
      }
    } else {
      progress.style.left = (minrange / range[0].max) * 100 + "%";
      progress.style.right = 100 - (maxrange / range[1].max) * 100 + "%";
      inputValue[0].value = minrange;
      inputValue[1].value = maxrange;
    }
  });
});

/*Grid Products */
const gridViewBtn = document.querySelector(".btn-grid-3");
const detailsViewBtn = document.querySelector(".btn-list");
const productsWrapper = document.querySelector(".products-wrapper");

gridViewBtn.addEventListener("click", () => {
  productsWrapper.classList.add("grid-3");
  productsWrapper.classList.remove("grid-list");
  detailsViewBtn.classList.remove("active");
  gridViewBtn.classList.add("active");
});

detailsViewBtn.addEventListener("click", () => {
  productsWrapper.classList.add("grid-list");
  productsWrapper.classList.remove("grid-3");
  gridViewBtn.classList.remove("active");
  detailsViewBtn.classList.add("active");
});

