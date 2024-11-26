const btn = document.getElementById('btn');
const elementChanged = document.getElementById('element_changed');  
const icon = document.getElementById('icon');
let isIcon = true;

btn.addEventListener('click', ()=>{
    elementChanged.classList.toggle('dark')
    isIcon = !isIcon;
    icon.src = isIcon? './images/mode-dark-svgrepo-com.svg':'./images/light-mode-svgrepo-com.svg'
})

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active")
})

const txtBtn = document.getElementById('button_change_text');
const textBox = document.getElementById('text_changed');
const textArray = [
    "Welsh Cake (Welsh Cake), a cross between a cake and a cookie. It's made with simple ingredients like flour, sugar, butter, eggs, and raisins, but the secret lies in the cooking method: a special griddle with grooves.",
    "Welsh Lamb (Welsh Lamb) Wales is famous for its green pastures and for producing some of the best lamb in the world. Welsh Lamb is known for its tender, flavorful, and lean meat.",
    "Cawl (Cawl), Cawl is considered the national dish of Wales. It's a comforting stew made with lamb, leeks, and seasonal vegetables. Cawl is a simple but flavorful dish, perfect for warming up on cold days.",
    "This part might scare or excite people, depending on the individual. In my case, it was quite exciting. I confess I was hesitant to try the famous local sweet beans, but I ended up liking them. As for the traditional Welsh food, it was a whole different story - click the arrows to find out more."
]

let textIndex = 0;

txtBtn.addEventListener("click", () =>{
    textIndex = (textIndex+1) % textArray.length
    textBox.textContent = textArray[textIndex]
})