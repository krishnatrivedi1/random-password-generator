// const btn = document.querySelector(".btn")
// const input = document.querySelector(".input")
// const copy = document.querySelector(".fa-copy")
// const alertcontainer = document.querySelector(".alert-container")

// btn.addEventListener("click" , () => {
// createPassword()
// })

// copy.addEventListener("click" , () =>{
//     copypasword()
//     if(input.value){
// alertcontainer.classList.remove("active")
//      setTimeout(() => {
//         alertcontainer.classList.add("active")
//     },2000)
//     }
   
    
// })
// function createPassword(){
//     const chars = "0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const passwordLength = 8
//     let password = ""
//     for (let index = 0; index <passwordLength; index++) {
//       const randomNum = Math.floor(Math.random() * chars.length);
//       console.log(randomNum);
      
//       password += chars.substring(randomNum , randomNum + 1)
//         // console.log(randomNum , password);
//       console.log(chars.substring(randomNum , randomNum +1));
      
        
//         input.value = password
//     }
//     alertcontainer.innerHTML = password + " copied!"
// }
// function copypasword(){
//     input.select() 
//     input.setSelectionRange(0, 9999);
//     navigator.clipboard.writeText(input.value)
// }


const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const copy = document.querySelector(".fa-copy");
const alertcontainer = document.querySelector(".alert-container")

copy.addEventListener("click" , () => {
    copied()
    if(input.value){
        alertcontainer.classList.remove("active")


        setTimeout(() => {
            alertcontainer.classList.add("active")
        } , 2000)
    }
    input.value = ""
    
})

btn.addEventListener("click" , () =>{
    grneratePassword()
})

function grneratePassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
for (let index = 0; index < passwordLength; index++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random , random + 1)
    input.value = password 
     
}
alertcontainer.innerText = input.value + "  copied!" 
}

function copied(){
    input.select()
    navigator.clipboard.writeText(input.value)
}