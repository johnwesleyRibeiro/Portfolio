let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='image/developer_4.gif'){
        myImage.setAttribute('src','image/developer_3.gif');
    }else{
        myImage.setAttribute('src','image/developer_4.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


