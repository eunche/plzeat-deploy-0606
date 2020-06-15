let reader = new FileReader();

reader.onload = (readerEvent) => {
  document
    .querySelector("#image_section")
    .setAttribute("src", readerEvent.target.result);
};
const avatar = document.querySelector("#id_avatar");
document
  .querySelector("#id_avatar")
  .addEventListener("change", (changeEvent) => {
    let imgFile = changeEvent.target.files[0];
    reader.readAsDataURL(imgFile);
  });
