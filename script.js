let layar = document.querySelector("#layar");
let tombol = document.querySelector(".container-tombol");
const operator = ["+", "-", "*", "/"];

tombol.addEventListener("click", function (e) {
  let teks = e.target.textContent;
  let lastChar = layar.value.slice(-1);
  switch (teks) {
    case "C":
      layar.value = "";
      break;
    case "<":
      layar.value = layar.value.slice(0, -1);
      break;
    case "=":
      layar.value = eval(layar.value);
      break;
    default:
      if (operator.includes(teks) && operator.includes(lastChar)) {
        layar.value = layar.value.slice(0, -1) + teks;
      }else{
        layar.value += teks;
      }
  }
})