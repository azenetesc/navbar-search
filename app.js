const btnMenu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.search-input');
// scroll
const boxes = document.querySelectorAll('.box');

btnMenu.addEventListener("click", () =>{
  navMenu.classList.toggle("active");
  btnMenu.classList.toggle("active");
})

navLink.forEach( (link)=>{
link.addEventListener('click', ()=>{
  navMenu.classList.remove('active');
  btnMenu.classList.remove('active');
})
})

btnSearch.addEventListener('click', () =>{
  search.classList.toggle('active');
})

// scroll
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes(){
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
    box.classList.add('show')
  } else{
    box.classList.remove('show')
  }
  })
  
}