const search = document.querySelector('.search')
// selecting search class 
const btn = document.querySelector('.btn')
// selecting search btn class
const input = document.querySelector('.input')
// selecting input class 


// taking the button class adding a click event.
// when i click i want the task of the arrow function to call the active class on the search class i can toggle the class.
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    //input focus for inside the seach bar
    input.focus()
})