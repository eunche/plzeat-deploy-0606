const need_plus = document.querySelector(".jsNeedPlus");
const copyed = document.querySelector(".jsNeed");
const gijun = document.querySelector(".need_plus");
console.log(need_plus);

const clickedPlusIcon = (event) => {
  console.log("클릭됨");
  gijun.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="input need_food">
        <input type="text" name="need_food" placeholder="필요 식자재" required id="id_need_food">
    </div>
  `
  );
};

const clickedNeedPlus = () => {
  need_plus.addEventListener("click", clickedPlusIcon);
};

clickedNeedPlus();
