
//récupérer les donnée et les convertir en fichier Json
/*
let coursTemp =  ` <div class="cours"><img src="https://jknweb.github.io/letcode/images/git.png"  aria-placeholder="">
                <div class="title-1">
                    <span class="title-2">Git et Github</span>
                    <span class="duree">5 heures</span>
                </div></div>`*/

let coursListeView = document.querySelector('.cours-list');

if (coursListeView) {
    fetch ('/js/data.json')
    .then((reponse) => reponse.json())
    .then ((data)=>{
        console.log(data)
        let courses = data;

        for (const cour of courses){
            coursListeView.innerHTML += 
            ` <div class="cours"><img src="https://jknweb.github.io/letcode/images/git.png"  aria-placeholder="">
                <div class="title-1">
                    <span class="title-2">${cour.titre}</span>
                    <span class="duree">${cour.description}</span>
                    <span class="duree">${cour.heure}</span>
                </div></div>`;
        }
    });
}

// Ajout avec formulaire

let listView = document.querySelector('.apprenants');
let saveButton = document.querySelector('.enregistrer');
let inputName = document.getElementById('name');

saveButton.addEventListener('click', function(e){
    e.preventDefault()
    let nom = inputName.value
    if (nom != '' && nom != null) {
        let item = document.createElement('li');
        item.innerText = nom;

        listView.appendChild(item);
    }
})
