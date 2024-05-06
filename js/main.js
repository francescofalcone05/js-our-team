
const ourTeam = [
    {
        nome: 'Wayne Barnette',
        ruolo: 'Founder & CEO',
        immagine: 'wayne-barnett-founder-ceo.jpg'

    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        immagine: 'angela-caroll-chief-editor.jpg'

    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        immagine: 'walter-gordon-office-manager.jpg'

    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        immagine: 'angela-lopez-social-media-manager.jpg'

    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        immagine: 'scott-estrada-developer.jpg'

    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        immagine: 'barbara-ramos-graphic-designer.jpg'

    }
];
const container = document.getElementsByClassName('contenitore');






for (let i = 0; i < ourTeam.length; i++) {

    let membro = ourTeam[i]
    // console.log(membro)

    //const singleCard = document.createElement('div');
    //singleCard.classList.add('card');

    //singleCard.append(`${membro}`)
    //console.log(singleCard)
    container.innerHTML += membro
    console.log(container)




};

// singleCard.innerHTML +=  `<img src="./img/${membro.immagine}" alt=""></img><p>Nome e cognome:${membro.nome}</p><p>Nome e cognome:${membro.ruolo}</p>`
// container.innerHTML += singleCard