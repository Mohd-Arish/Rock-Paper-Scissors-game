const contain= document.querySelector(".con")
const userres= document.querySelector(".user-res img")
const compres= document.querySelector(".comp-res img")
const result= document.querySelector(".res")
const options= document.querySelectorAll(".op")

options.forEach((img, ind)=>{
    img.addEventListener("click",(e) =>{
        img.classList.add("active")

        
        options.forEach((img2, ind2)=>{
            ind != ind2 && img2.classList.remove("active")
        });

            let imagesrc= e.target.querySelector("img").src
            userres.src= imagesrc

            let randnum= Math.floor(Math.random() * 3)
            let compresult= ["imgs/fist.png", "imgs/hand-paper.png", "imgs/scissors.png"]
            compres.src= compresult[randnum]

            let compval= ["R", "P", "S"][randnum]

            let userval= ["R", "P", "S"][ind] 

            let outcomes= {
                RR: "Draw",
                PP: "Draw",
                SS: "Draw",
                RP: "CPU",
                RS: "User",
                PR: "User",
                PS: "CPU",
                SP: "User",
                SR: "CPU"
            }
            let outcomeval= outcomes[userval + compval]
            result.textContent= userval === compval ? "Match Draw" : `${outcomeval} Won!!`
       
    });

});