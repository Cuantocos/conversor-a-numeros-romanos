const btnSearch = document.getElementById("btn-search");
const numSearch = document.getElementById("txt-search");

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  const numberToConvert = numSearch.value;
  viewResult(numberToConvert);
});

function convertToRoman(num) {
  let numRom = "";
  while (num > 0) {
    if (num >= 1000) {
      numRom += "M";
      num = num - 1000;
    } else if (num >= 900) {
      numRom += "CM";
      num = num - 900;
    } else if (num >= 500) {
      numRom += "D";
      num = num - 500;
    } else if (num >= 400) {
      numRom += "CD";
      num = num - 400;
    } else if (num >= 100) {
      numRom += "C";
      num = num - 100;
    } else if (num >= 90) {
      numRom += "XC";
      num = num - 90;
    } else if (num >= 50) {
      numRom += "L";
      num = num - 50;
    } else if (num >= 40) {
      numRom += "XL";
      num = num - 40;
    } else if (num >= 10) {
      numRom += "X";
      num = num - 10;
    } else if (num >= 9) {
      numRom += "IX";
      num = num - 9;
    } else if (num >= 5) {
      numRom += "V";
      num = num - 5;
    } else if (num >= 4) {
      numRom += "IV";
      num = num - 4;
    } else {
      numRom += "I";
      num = num - 1;
    }
  }

  return numRom;
}
const viewResult = (num) => {
  let resultRom = convertToRoman(num);
  let result = `<div class="result-final__div"><h2 id="result-final">${resultRom}</h2></div>`;

  document.getElementById("result-final-div").innerHTML = result;
};
