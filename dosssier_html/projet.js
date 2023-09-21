let form = document.querySelector("form")
form.addEventListener("submit" , (e) => {
    e.preventDefault()
   
    alert('Votre demande est en cours de traitement merci de patientez!')
    window.location.href=""

})