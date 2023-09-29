let form = document.querySelector(".bat")
let bouton = document.querySelector(".bouton")
bouton.addEventListener("submit" , (e) => {
    e.preventDefault()
    let r;
    let tabUser = JSON.parse(localStorage.getItem("userList"))
    tabUser.forEach(element => {
        if (element.email === document.querySelector(".email").value  && 
            element.passe === document.querySelector(".passe").value)
        {
            r = element
        }
        
    


    if(typeof r != "undefined") {
        alert("correct")
        localStorage.setItem("userList",JSON.stringify(tabUser))
        window.location.replace = "../page_connecté.html"
    } else{
        alert("incorrect")
        window.location.reload()
    }
})
})