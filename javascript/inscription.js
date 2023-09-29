let bouton = document.querySelector(".bouton")


bouton.addEventListener('click' , () =>{
let tabUser = JSON.parse(localStorage.getItem("userList")) || []
let nom = document.querySelector("#nom").value
let email  = document.querySelector("#email").value
let passe = document.querySelector("#passe").value


let user = {
    nom:nom,
    email:email,
    passe : passe

}
tabUser.push(user)
localStorage.setItem("userList" , JSON.stringify(tabUser))

})
