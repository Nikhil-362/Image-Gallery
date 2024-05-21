
const closeBtn = document.querySelector("#close");
const fullCont = document.querySelector("#fullCont");
const fullImg = document.querySelector(".fullImg");
const container = document.querySelector("#container");

const start =()=>{
    let myHtml =""
    for (let i = 1; i < 16; i++) {
        
        myHtml += `<img src="Images/${i}.webp" class="fullImg" alt="Image ${i}" onClick="fullScreen(this.src)"> `
        container.innerHTML = myHtml
        
    }
    console.log(myHtml);
}

start()




closeBtn.addEventListener('click',(e)=>{
    console.log(e);
    fullCont.style.display = "none";
})

const fullScreen =(pic)=>{
    console.log(pic);
    fullCont.style.display = "flex";
    fullImg.src = pic
    
}
