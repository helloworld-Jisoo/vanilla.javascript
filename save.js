
const country = document.querySelector(".country");
const Korea = document.querySelector("select.country option[value='Korea']");
const Greece = document.querySelector("select.country option[value='Greece']");
const Turkey = document.querySelector("select.country option[value='Turkey']");
const Finland = document.querySelector(
  "select.country option[value='Finland']"
);

const COUNTRY_LS = "currentCountry";
const VALUE_LS = "currentValue";

function saveValue(value) {
  const selected = country.options[country.Korea,Greece,Turkey,Finland];
  localStorage.setItem(COUNTRY_LS, selected);
}

function handleChange(event) {
  const currentValue = localStorage.setItem;
  saveValue(currentValue);
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry == null) {
 
  } else {
    country.addEventListener("change", handleChange);
    if(COUNTRY_LS == undefined) {
      currentCountry = localStorage.getItem(Korea) 
    }
    }
  }


function init() {
  handleChange();
  saveValue();
  loadCountry();
}

init();


function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry==null){
    console.log("pick")
  }else {
    country.addEventListener("change", handleChange);
  }
}

function init(){
  handleChange();
  saveValue();
  loadCountry();
}

init();