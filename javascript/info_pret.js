const formulaire =document.querySelector(".formulaire");
formulaire.addEventListener("submit",event=>{
    event.preventDefault()
    const donnee = {};
    const local= localStorage.pret?JSON.parse(localStorage.pret): [];
    const input_global = event.target.querySelectorAll("input[type= 'radio']:required:checked, input[type='text']:required,input[type='file']:required, select");
    input_global.forEach(input => {
        if(input.name=="matrimoniale") donnee.statutMatrimoniale=input.value;

        if(input.name=="matrimoniale") donnee.statutMatrimoniale=input.value;
        if(input.name=="enfant") donnee.enfant=input.value;
        if(input.name=="locataire") donnee.locataire=input.value;
        if(input.name=="fonction") donnee.fonction=input.value;
        if(input.name=="carteId") donnee.carteId=input.files[0];
    });


    let reader = new FileReader();
    //image = document.createElement('img');
    reader.readAsDataURL(donnee.carteId);
    setTimeout(() => {
        donnee.carteId = reader.result;
        localStorage.setItem("pret", JSON.stringify(local.push(donnee)));
        alert("votre demande est en cours de traitement");
    }, 50);
    
})