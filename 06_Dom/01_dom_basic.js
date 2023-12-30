
// Run on browser console

// console.log(window);
// console.log(window.document);
// console.log(document);
// console.dir(document);

// document.getElementById('heading').innerHTML = "Welcome"

// document.getElementById('heading')
// document.getElementById('heading').id
// document.getElementById('heading').class // wrong
// document.getElementById('heading').className
// document.getElementById('heading').getAttribute 
// document.getElementById('heading').getAttribute('id')
// document.getElementById('heading').getAttribute('class')
// document.getElementById('heading').setAttribute('class', 'test')
// document.getElementById('heading').setAttribute('class', 'test, heading') 

// const heading = document.getElementById('heading')

// heading.style.backgroundColor = 'green';
// heading.style.padding = "15px";

// heading.textContent // all text display include display none property wala bhi 
// heading.innerText // only text display whose display properties not none
// heading.innerHTML // inner html value bhi milta hai


// document.querySelector('h1'); // return first h1 element
// document.querySelector('.title');
// document.querySelector('#heading');
// document.querySelector('input[type="password"]'); // return first input element which type password
// document.querySelector('p:first-child');
// document.querySelector('ul');

// const myUl = document.querySelector('ul');
// myUl.querySelector('li').backgroundColor = "green";

// document.querySelectorAll('h2'); // return nodeList
// const tempH2 = document.querySelectorAll('h2');

// tempH2.style.color = 'green' // not
// tempH2[1].style.color = 'green' 


// tempH2.forEach((li)=>{
//     li.style.backgroundColor = "green"
// })

// convert nodelist in array then apply array properties

// document.getElementsByClassName('list-item') // return HTML Collections

// const classList = document.getElementsByClassName('list-item')

// Array.from(classList) // convert html collection in array

// const myConvertedArray = Array.from(classList)

// myConvertedArray.forEach((l) => {
//     l.style.color = "red"
// })
