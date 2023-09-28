let formulaire = document.querySelector(".formulaire");
formulaire.addEventListener("submit",event=>{
    event.preventDefault()
    const form = event.target;
    const categorie = form.categorie;
    const montant =form.montant;
    const duree = form.duree;
    const gobaldata = localStorage.PRETS ? JSON.parse(localStorage.PRETS) : [];
    const objet = {
        categorie : categorie.value,
        montant : montant.value,
        duree : duree.value
    };

    gobaldata.push(objet);
    localStorage.setItem("PRETS",JSON.stringify(gobaldata));
    alert(" requet effectue avec succes")
    categorie.value="";
    montant.value="";
    duree.value="";
    window.location.href="../dosssier_html/info_pret.html"
})