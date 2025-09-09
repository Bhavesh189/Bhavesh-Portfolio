let typeEffectWords = ["Bhavesh", "Web-Developer", "Web Pentester", "Freelancer", "Founder of ChatFinity-Ai"]
let WordLikhneKiGhage = document.querySelector("span")
wi= 0
ci = 0
let remove = false
const id = setInterval(() => {
    let word = typeEffectWords[wi]
    if (!remove) {
        WordLikhneKiGhage.innerText += word[ci]
        ci++

        if (ci === word.length) {
            remove = true

        }
    }
    else {
        WordLikhneKiGhage.innerText = WordLikhneKiGhage.innerText.slice(0, WordLikhneKiGhage.innerText.length - 1)

        if (WordLikhneKiGhage.innerText.length === 0) {
            remove = false
            ci = 0
             wi = (wi + 1) % typeEffectWords.length;
        }
    }


}, 150)
// contact button
let click =0
const cButton = document.querySelector(".cButton")
const cDetails = document.querySelector(".cDetails")
cButton.addEventListener("click",()=>{
    cDetails.style.display="flex";
    click++
    if(click%2!=0){
        cDetails.style.display="none";
    }
});
// sidebar

let threeDots = document.querySelector(".fa-solid.fa-bars")
let nav = document.querySelector(".nav")
let para = document.querySelector(".para.p")
threeDots.addEventListener("click",()=>{
   if (window.innerWidth <= 1200)
{
    if(nav.style.display==="flex"){
        nav.style.display="none";
    }
    else{
        nav.style.display="flex";
        nav.style.flexDirection="column";
        para.style.display="none";  
      }
}
})