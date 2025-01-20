// Code here!
/* 1 */
// Byt namn på första hoodien från Ash till Potato.
let ashRef = document.querySelector('.art-1').querySelector('h3');
ashRef.textContent = 'Potato';

/* 2 */
// Byt namn på Home till Start.
// let homeRef = document.querySelector('nav>a');
// homeRef.textContent = 'Start';

let navRefs = document.querySelectorAll('nav>a');
for(let navRef of navRefs) {
    if(navRef.textContent === 'Home') {
        navRef.textContent = 'Start';
    }
}

/* 3 */
// Byt namn på Contact till Mail Us.
for(let navRef of navRefs) {
    if(navRef.textContent === 'Contact') {
        navRef.textContent = 'Mail Us';
    }
}

/* 4 */
// Byt ut informationen om Sinus Hoodie - Fire.
let infoRef = document.querySelector('.art-2').querySelector('p');
infoRef.textContent = 'En riktigt jävla fet tröja! Missa inte!';

/* 5 */
// Byt bakgrundsfärg och text på en knapp.
let btnRef = document.querySelector('.art-3').querySelector('button');
console.log(btnRef);
// Bajja ajja!
// btnRef.setAttribute('style', 'color: red; background-color: green;');
// btnRef.style = 'color: red; background-color: green;';

// Villket som av nedanstående är superbra!
// btnRef.style.color = 'green';
// btnRef.style.backgroundColor = 'red';
btnRef.classList.add('btn-red');

/* 6 */
// Byt bakgrundsfärg på någon av produkterna.
let prodRef = document.querySelector('.art-1');
prodRef.style.backgroundColor = 'yellow';

/* 7 */
// Byt ut adressen på sidan.
let addressRef = document.querySelector('#address>p');
// addressRef.innerHTML = `Jesper Nyberg<br />
//             Anjalagatan 5 <br />
//             664 34, Grums`;
addressRef.innerText = ` Jesper Nyberg
             Anjalagatan 5
             664 34, Grums`;

/* 8 */
// Byt färg på samtliga <p>
let pRefs = document.querySelectorAll('p');
pRefs.forEach(pRef => pRef.style.color = 'orange');

/* 9 */
// Ändra text på samtliga knappar till add to cart.
let btnRefs = document.querySelectorAll('button');
for(let btnRef of btnRefs) {
    btnRef.textContent = 'Add to Cart!';
}

/* 10 */
// Lägg till classen active på menyalternativet home.
let homeRef = document.querySelector('#home');
homeRef.classList.add('active');

/* 11 */
// Ta bort classen logo på logotypen.
// document.querySelector('header>img').classList.remove('logo');

/* 12 */
// Lägg till ett nytt menyalternativ.
let optionRef = document.createElement('a');
let navRef = document.querySelector('nav');
optionRef.href = '#';
optionRef.textContent = 'Alternativ';
// let textNodeRef = document.createTextNode('Alternativ');
// optionRef.appendChild(textNodeRef);
navRef.insertBefore(optionRef, navRef.querySelector('img'));


/* 13 */
// Lägg till en ny produkt med följande info.
const articleRef = document.createElement('article');
articleRef.classList.add('art-4');

let figureRef = document.createElement('figure');
articleRef.appendChild(figureRef);

let imgRef = document.createElement('img');
imgRef.src = './img/hoodie-forrest.png';
imgRef.alt = 'hoodie';
figureRef.appendChild(imgRef);

let headRef = document.createElement('h2');
headRef.textContent = 'Sinus Hoodie';
articleRef.appendChild(headRef);

headRef = document.createElement('h3');
headRef.textContent = 'Forrest';
articleRef.appendChild(headRef);

let infoNodeRef = document.createElement('p');
infoNodeRef.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';
articleRef.appendChild(infoNodeRef);

let btnNodeRef = document.createElement('button');
btnNodeRef.textContent = 'Add to Cart!';
articleRef.appendChild(btnNodeRef);

document.querySelector('main').appendChild(articleRef);

// console.log(articleRef);
/*
<article class="art-1">
    <figure><img src="img/hoodie-ash.png" alt="hoodie" /></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Ash</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        doloremque ducimus enim!
    </p>
    <button>buy</button>
</article>

*/

/* 14 */
// Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
let logoRef = document.querySelector('.logo');
logoRef.addEventListener('click', () => {
    console.log('Found you!');
});


/* 15 */
// Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
let articleRefs = document.querySelectorAll('main>article');
for(let articleRef of articleRefs) {
    articleRef.addEventListener('click', (event) => {
        console.log(event.currentTarget);
        console.log(`Hi! Im article ${event.currentTarget.querySelector('h3').textContent}`);
    });
}


