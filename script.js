console.log(document);

let divRef = document.querySelector('#pageDiv');
// console.log(divRef);
let textRefs = document.querySelectorAll('.text-field');
// console.log(textRefs);

// for(let textRef of textRefs) {
//     textRef.textContent = 'Heja Arsenal';
// }

textRefs.forEach((textRef, index) => {
    textRef.textContent = `Heja Arsenal x ${index + 1}`;
    if(index % 2 === 0) {
        // Funkar men dont touch
        // textRef.setAttribute('style', 'color: red;');
        // textRef.style = 'color: red;';

        // Detta är mer okej
        // textRef.style.color = 'red';
        // textRef.style.backgroundColor = 'black';
        // textRef.style.padding = '1rem';

        // Gör helst såhär!
        textRef.classList.add('t-red');
    } else {
        // textRef.classList.add('d-none');
    }
    if(index === textRefs.length - 1) {
        // textRef.setAttribute('id', 'hejaArsenal');
        textRef.id = 'hejaArsenal';
    }
});
const pRef = document.querySelector('#hejaArsenal');
console.log(pRef);

const textRef = document.createElement('p');
textRef.textContent = 'Heja Arsenal x 6';
divRef.appendChild(textRef);

const pNodeRef = document.createElement('p');
const textNodeRef = document.createTextNode('Heja Arsenal x 4.5');
pNodeRef.appendChild(textNodeRef);
console.log(pNodeRef);

divRef.insertBefore(pNodeRef, pRef);

textRef.addEventListener('click', printTextToConsole);

function printTextToConsole(event) {
    console.log(event.target.textContent);
    event.target.textContent = 'Hata Tottenham!';
}

for(let textRef of textRefs) {
    textRef.addEventListener('mouseleave', (event) => {
        console.log(event.target.textContent);
        event.target.classList.toggle('t-red');
    });
}