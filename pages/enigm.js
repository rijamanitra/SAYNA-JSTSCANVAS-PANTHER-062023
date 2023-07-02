//alert('enigm');

//POP UP OF ANSWER QUESTION

let popup = document.getElementById("popup");
function openPopup(){
popup.classList.add("open-popup");
}
function closePopup(){
   popup.classList.remove("open-popup")
}

let conteneurtitre = document.getElementById("conteneurtitre");
let conteneurtextgauche = document.getElementById("conteneurtextgauche");
let conteneurtextdroite = document.getElementById("traductionalphabet");
let nextenigm = document.getElementById("nextenigm");
let textEnigmeConteneur = document.getElementById("textenigm");
let i=0;

let dataEnigme = [
   
    {
        'numeroEnigm': `ENIGM NUMERO II`,
        'textIntro': `Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :`,
        'textEnigme': `Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza`,
        'titleKnow': `Le savais tu ?`,
        'textKnow': `Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?`
       
    },
    {
        'numeroEnigm': `ENIGM NUMERO III`,
        'textIntro': `Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?`,
        'textEnigme': `01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010`,
        'titleKnow': `Le savais tu ?`,
        'textKnow': `Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.`
    }
];
//SETTING THE CHANGEMENT OF NEXT ENIGM
function valueChange () {
    if (i<=dataEnigme.length) { let element = dataEnigme[i].textIntro;conteneurtextgauche.innerText =element;
    
    }
    if (i<=dataEnigme.length) { let element2 = dataEnigme[i].textEnigme;
        textEnigmeConteneur.innerText =element2;
         textEnigmeConteneur.style.fontFamily = "cantarell";
         textEnigmeConteneur.style.fontSize = "0.7rem";
    
    }

    if (i<=dataEnigme.length) { let element3 = dataEnigme[i].textKnow;
        conteneurtextdroite.innerText =element3;}

    if (i<=dataEnigme.length) { let element4 = dataEnigme[i].numeroEnigm;
        conteneurtitre.innerText =element4;}




    i++;
};


nextenigm.addEventListener("click", valueChange);

/* function valueChange () {
    if (i===0) {}
    else if (i===1) {
        let element = dataEnigme[1].textIntro;
        conteneurtextgauche.innerText=element;
        textEnigmeConteneur.innerText=element;

    }
    else if (i===2) {
        let element = dataEnigme[2].textIntro;
        conteneurtextgauche.innerText=element;
        textEnigmeConteneur.innerText=element;
       
        
    }
     i++;
}*/











/*function next() {
    if (i<= 0) i = images.length;
    i++;
    return setImg;
}

function setImg () {
    return imageConteneurGauche.setAttribute('src','/Illustrations/personnage-slide/'+images[i])
}
*/


 /* function slideTitreGauche () {
       if (i<= titres.length) {let element1 = titres[i].titre;
           conteneurName1.innerText=element1;
          i++; }};    
       
 function slideTitreMilieu () {
     if (i<= titres.length) {let element = titres[i].titre;
         ConteneurName2.innerText=element;
         i++; }};  */       


        //  letsSlide.addEventListener("click", slideTitreGauche);
        //  letsSlide.addEventListener("click", slideTitreMilieu); 
        
        
         // if ( i===0) {}
                // else if (i===1) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_2.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_3.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_4.png";  }
        
                // else if ( i===2) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_3.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_4.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_5.png";  }
        
                // else if ( i===3) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_4.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_5.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_6.png";  } 
                // else if ( i===4) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_5.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_6.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_7.png";  }
                // else if ( i===5) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_6.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_7.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_8.png";  }
                // else if ( i===6) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_7.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_8.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_9.png";  }
                // else if ( i===7) {imageConteneurGauche.src="/Illustrations/personnage-slide/Pantherhome_slider_8.png";
                //                   imageConteneurMilieu.src="/Illustrations/personnage-slide/Pantherhome_slider_9.png";  
                //                   imageConteneurDroite.src="/Illustrations/personnage-slide/Pantherhome_slider_10.png";  }