
// https://restcountries.com/v3.1/all

const elboy = document.querySelector(".body");
const toggleNight = document.querySelector(".butoon");
const elList = document.querySelector(".main-boss-ul");
const elInput = document.querySelector(".countri-boss");
const elForm = document.querySelector(".form-boss");
const elinfutSearch = document.querySelector(".searchJs");
const elBtnList = document.querySelector(".modalJS");




toggleNight.addEventListener("click", function () {
  elboy.classList.toggle("body-night");
});

const elFrag = new DocumentFragment()
async function RenderAPI (url) {
  try {
    const ras = await fetch(url)
    const data = await ras.json()
    data.forEach(item => {
      elList.innerHTML = ""
      const elTemp = document.querySelector(".template").content.cloneNode(true)
      
      elTemp.querySelector(".main-boss-img").src = item.flags.svg
        elTemp.querySelector(".countryName").textContent = item.name.common
        elTemp.querySelector(".countryPopulation").textContent = item.population
        elTemp.querySelector(".countryRegion").textContent = item.region
        elTemp.querySelector(".countryCapital").textContent = item.capital



        elFrag.appendChild(elTemp)
      });
      elList.appendChild(elFrag)

  } catch (error) {
    console.log(error);
  }
}



RenderAPI(`https://restcountries.com/v3.1/all`)




async function searchAPI (url) {
  try {
    const ras = await fetch(url)
    const data = await ras.json()
    data.forEach(item => {
      elList.innerHTML = ""
      const elTemp = document.querySelector(".template").content.cloneNode(true)
      
      console.log(item);
      elTemp.querySelector(".main-boss-img").src = item.flags.svg
        elTemp.querySelector(".countryName").textContent = item.name.common
        elTemp.querySelector(".countryPopulation").textContent = item.population
        elTemp.querySelector(".countryRegion").textContent = item.region
        elTemp.querySelector(".countryCapital").textContent = item.capital
        elTemp.querySelector(".modalJS").dataset.id = item.name.common
        elTemp.querySelector(".itemjs").dataset.id = item.name.common
        elBtnList.dataset.id = item.name.common



        elFrag.appendChild(elTemp)
      });
      elList.appendChild(elFrag)

  } catch (error) {
    console.log(error);
  }
}




elForm.addEventListener("submit", evt =>{
  evt.preventDefault()
  const serachVal = elinfutSearch.value
  const elRegek = new RegExp (serachVal , "gi")
 console.log(elRegek);
 searchAPI(`https://restcountries.com/v3.1/name/${elinfutSearch.value}`)
RenderAPI(`https://restcountries.com/v3.1/region/${elInput.value}`)


})

elList.addEventListener("click", evt => {
  
  if ( evt.target.matches(".modalJS") ) {
 
  }
  
})