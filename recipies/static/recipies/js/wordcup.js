let leftBox = document.querySelector(".jsLF");
let rightBox = document.querySelector(".jsRF");
const leftPK = document.querySelector(".jsLFPK").innerHTML;
const rightPK = document.querySelector(".jsRFPK").innerHTML;
const gijun = document.querySelector(".left_box");
const final_box = document.querySelector(".div_container_flex");
const final_gijun = document.querySelector(".div_container");
const worldcup_title = document.querySelector(".worldcup_title");

const checkWho = (pk, setValue) => {
  if (count < 4) {
    if (pk == r0_pk) {
      r0_where = setValue;
      rr0_url = r0_url;
      rr0_name = r0_name;
      rr0_pk = r0_pk;
    } else if (pk == r1_pk) {
      r1_where = setValue;
      rr0_url = r1_url;
      rr0_name = r1_name;
      rr0_pk = r1_pk;
    } else if (pk == r2_pk) {
      r2_where = setValue;
      rr1_url = r2_url;
      rr1_name = r2_name;
      rr1_pk = r2_pk;
    } else if (pk == r3_pk) {
      r3_where = setValue;
      rr1_url = r3_url;
      rr1_name = r3_name;
      rr1_pk = r3_pk;
    } else if (pk == r4_pk) {
      r4_where = setValue;
      rr2_url = r4_url;
      rr2_name = r4_name;
      rr2_pk = r4_pk;
    } else if (pk == r5_pk) {
      r5_where = setValue;
      rr2_url = r5_url;
      rr2_name = r5_name;
      rr2_pk = r5_pk;
    } else if (pk == r6_pk) {
      r6_where = setValue;
      rr3_url = r6_url;
      rr3_name = r6_name;
      rr3_pk = r6_pk;
    } else if (pk == r7_pk) {
      r7_where = setValue;
      rr3_url = r7_url;
      rr3_name = r7_name;
      rr3_pk = r7_pk;
    }
  }
  if (count == 4 || count == 5) {
    if (pk == rr0_pk) {
      rr0_where = setValue;
      rrr0_url = rr0_url;
      rrr0_name = rr0_name;
      rrr0_pk = rr0_pk;
    } else if (pk == rr1_pk) {
      rr1_where = setValue;
      rrr0_url = rr1_url;
      rrr0_name = rr1_name;
      rrr0_pk = rr1_pk;
    } else if (pk == rr2_pk) {
      rr2_where = setValue;
      rrr1_url = rr2_url;
      rrr1_name = rr2_name;
      rrr1_pk = rr2_pk;
    } else if (pk == rr3_pk) {
      rr3_where = setValue;
      rrr1_url = rr3_url;
      rrr1_name = rr3_name;
      rrr1_pk = rr3_pk;
    }
  } else {
    if (pk == rrr0_pk) {
      rrr0_where = setValue;
      final_url = rrr0_url;
      final_name = rrr0_name;
      final_pk = rrr0_pk;
    } else if (pk == rrr1_pk) {
      rrr1_where = setValue;
      final_url = rrr1_url;
      final_name = rrr1_name;
      final_pk = rrr1_pk;
    }
  }
};

const deleteRecipe = () => {
  leftBox.childNodes[1].remove();
  leftBox.childNodes[2].remove();
  leftBox.childNodes[3].remove();
  rightBox.childNodes[1].remove();
  rightBox.childNodes[2].remove();
  rightBox.childNodes[3].remove();

  if (count == 3) {
    worldcup_title.innerHTML = `
    레시피 월드컵 4강
    `;
  }

  if (count == 5) {
    worldcup_title.innerHTML = `
    결승
    `;
  }

  if (count == 6) {
    final_box.remove();
    worldcup_title.remove();
  }
};

const addNewRecipe = (count) => {
  if (count == 0) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
        <img class="food_image" src="${r2_url}" alt="recipe">
        <p class="food_name">${r2_name}</p>
        <span class="jsLFPK" style="opacity: 0;">${r2_pk}</span>
      `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
        <img class="food_image" src="${r3_url}" alt="recipe">
        <p class="food_name">${r3_name}</p>
        <span class="jsRFPK" style="opacity: 0;">${r3_pk}</span>
        `
    );
  } else if (count == 1) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r4_url}" alt="recipe">
          <p class="food_name">${r4_name}</p>
          <span class="jsLFPK" style="opacity: 0;">${r4_pk}</span>
        `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r5_url}" alt="recipe">
          <p class="food_name">${r5_name}</p>
          <span class="jsRFPK" style="opacity: 0;">${r5_pk}</span>
          `
    );
  } else if (count == 2) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r6_url}" alt="recipe">
          <p class="food_name">${r6_name}</p>
          <span class="jsLFPK" style="opacity: 0;">${r6_pk}</span>
        `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
          <img class="food_image" src="${r7_url}" alt="recipe">
          <p class="food_name">${r7_name}</p>
          <span class="jsRFPK" style="opacity: 0;">${r7_pk}</span>
          `
    );
  } else if (count == 3) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
            <img class="food_image" src="${rr0_url}" alt="recipe">
            <p class="food_name">${rr0_name}</p>
            <span class="jsLFPK" style="opacity: 0;">${rr0_pk}</span>
          `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
            <img class="food_image" src="${rr1_url}" alt="recipe">
            <p class="food_name">${rr1_name}</p>
            <span class="jsRFPK" style="opacity: 0;">${rr1_pk}</span>
            `
    );
  } else if (count == 4) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
            <img class="food_image" src="${rr2_url}" alt="recipe">
            <p class="food_name">${rr2_name}</p>
            <span class="jsLFPK" style="opacity: 0;">${rr2_pk}</span>
          `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
            <img class="food_image" src="${rr3_url}" alt="recipe">
            <p class="food_name">${rr3_name}</p>
            <span class="jsRFPK" style="opacity: 0;">${rr3_pk}</span>
            `
    );
  } else if (count == 5) {
    leftBox.insertAdjacentHTML(
      "afterbegin",
      `
            <img class="food_image" src="${rrr0_url}" alt="recipe">
            <p class="food_name">${rrr0_name}</p>
            <span class="jsLFPK" style="opacity: 0;">${rrr0_pk}</span>
          `
    );
    rightBox.insertAdjacentHTML(
      "afterbegin",
      `
            <img class="food_image" src="${rrr1_url}" alt="recipe">
            <p class="food_name">${rrr1_name}</p>
            <span class="jsRFPK" style="opacity: 0;">${rrr1_pk}</span>
            `
    );
  } else if (count == 6) {
    final_gijun.insertAdjacentHTML(
      "afterbegin",
      `<a href="/recipies/detail/${final_pk}/" style="display:flex; flex-direction:column; align-items:center; justify-contents:center;">
            <span style="font-size:4em;font-weight:bold; margin-top:5px;">우승!</span>
            <h3>클릭해서 레시피를 확인하세요!</h3>
            <img style="width:250px; height:250px;"class="food_image" src="${final_url}" alt="recipe">
            <h1 class="food_name">${final_name}</h1>
        </a>
        `
    );
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
  } else if (
    event.target.parentNode.classList.contains("jsLF") ||
    event.target.classList.contains("jsLF")
  ) {
    checkWho(document.querySelector(".jsLFPK").innerHTML, setValue);
    deleteRecipe();
    addNewRecipe(count);
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
