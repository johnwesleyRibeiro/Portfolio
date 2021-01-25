let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='image/developer.png'){
        myImage.setAttribute('src','image/developer_3.gif');
    }else{
        myImage.setAttribute('src','image/developer.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Por favor, insira seu nome.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome, ' + myName; 
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}