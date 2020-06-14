let leftBox = document.querySelector(".jsLF");
let rightBox = document.querySelector(".jsRF");
const leftPK = document.querySelector(".jsLFPK").innerHTML;
const rightPK = document.querySelector(".jsRFPK").innerHTML;
const gijun = document.querySelector(".left_box");

const checkWho = (pk, setValue) => {
  if (pk == r0_pk) {
    console.log("r0");
  } else if (pk == r1_pk) {
    r1_where = setValue;
    console.log("r1");
  } else if (pk == r2_pk) {
    r2_where = setValue;
    console.log("r2");
  } else if (pk == r3_pk) {
    r3_where = setValue;
    console.log("r3");
  } else if (pk == r4_pk) {
    r4_where = setValue;
    console.log("r4");
  } else if (pk == r5_pk) {
    r5_where = setValue;
    console.log("r5");
  } else if (pk == r6_pk) {
    r6_where = setValue;
    console.log("r6");
  } else if (pk == r7_pk) {
    r7_where = setValue;
    console.log("r7");
  }
};

const deleteRecipe = () => {
  leftBox.childNodes[1].remove();
  leftBox.childNodes[2].remove();
  leftBox.childNodes[3].remove();
  rightBox.childNodes[1].remove();
  rightBox.childNodes[2].remove();
  rightBox.childNodes[3].remove();
};

const addNewRecipe = (count) => {
  if (count == 0) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
        <img class="food_image" src="${r2_url}" alt="recipe">
        <p class="food_name">${r2_name}</p>
        <span class="jsRFPK" style="opacity: 0;">${r2_pk}</span>
      `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
        <img class="food_image" src="${r3_url}" alt="recipe">
        <p class="food_name">${r3_name}</p>
        <span class="jsLFPK" style="opacity: 0;">${r3_pk}</span>
        `
    );
  } else if (count == 1) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r4_url}" alt="recipe">
          <p class="food_name">${r4_name}</p>
          <span class="jsRFPK" style="opacity: 0;">${r4_pk}</span>
        `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r5_url}" alt="recipe">
          <p class="food_name">${r5_name}</p>
          <span class="jsLFPK" style="opacity: 0;">${r5_pk}</span>
          `
    );
  } else if (count == 2) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r6_url}" alt="recipe">
          <p class="food_name">${r6_name}</p>
          <span class="jsRFPK" style="opacity: 0;">${r6_pk}</span>
        `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r7_url}" alt="recipe">
          <p class="food_name">${r7_name}</p>
          <span class="jsLFPK" style="opacity: 0;">${r7_pk}</span>
          `
    );
  } else if (count == 3) {
  } else if (count == 4) {
  } else if (count == 5) {
  }
};

let count = 0;
let setValue = 4;

const worldcupClicked = (event) => {
  event.preventDefault();
  if (
    event.target.parentNode.classList.contains("jsRF") ||
    event.target.classList.contains("jsRF")
  ) {
    checkWho(document.querySelector(".jsRFPK").innerHTML, setValue);
    deleteRecipe();
    addNewRecipe(count);
    if (count == 5) {
    }
  } else if (
    event.target.parentNode.classList.contains("jsLF") ||
    event.target.classList.contains("jsLF")
  ) {
    checkWho(document.querySelector(".jsLFPK").innerHTML, setValue);
    deleteRecipe();
    addNewRecipe(count);

    if (count == 5) {
    }
  }
  count = count + 1;
  if (count >= 4 && count <= 5) {
    setValue = 2;
  }
};

const worldcup = () => {
  document.querySelector(".jsLF").addEventListener("click", worldcupClicked);
  document.querySelector(".jsRF").addEventListener("click", worldcupClicked);
};

worldcup();
