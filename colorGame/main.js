let numOfSquars = 6,
    colors = generateRandomColors(numOfSquars);


let squars = document.querySelectorAll('.square'),
    colorDisplay = document.querySelector('#colorDisplay'),
    messageDisplay = document.querySelector('#messageDisplay'),
    resetBtn = document.querySelector('#resetBtn'),
    h1 = document.querySelector('h1'),
    easyBtn = document.querySelector('#easyBtn'),
    hardBtn = document.querySelector('#hardBtn'),
    pickedColor = pickColor();

easyBtn.addEventListener('click', function(){
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numOfSquars = 3;
    colors = generateRandomColors(numOfSquars);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squars.length; i += 1){
        if(colors[i]){
            squars[i].style.backgroundColor = colors[i];
        }else{
            squars[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numOfSquars = 6;
    colors = generateRandomColors(numOfSquars);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squars.length; i += 1){
            squars[i].style.backgroundColor = colors[i];
            squars[i].style.display = 'block';
        
    } 
});


resetBtn.addEventListener('click', function(){
    colors =  generateRandomColors(numOfSquars);
    pickedColor = pickColor();
    messageDisplay.textContent = '';
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent= 'New Color';
    for(let i = 0; i < squars.length; i +=1){
        squars[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor ='steelblue';
    
});
    

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squars.length; i +=1){
    //add colors to squers
    squars[i].style.backgroundColor = colors[i];

    //add eventListener to squers
    squars[i].addEventListener('click', function(){
        let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!';
                resetBtn.textContent = 'Play again?';
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try again';
        }
    });

}
//change the same color for all squars
function changeColor(color) {
    for(let i = 0; i < squars.length; i +=1){
        squars[i].style.backgroundColor = color;
    }
    
}
//chosse correct color
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}


function generateRandomColors(num){
//make an array
let arr = [];

//reapeat n times
for(let i = 0; i < num; i +=1){
arr.push(randomColor());
}
//return that array
return arr;
}

//create new color
function randomColor(){
    let r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    let color = 'rgb(' + r +', ' + g + ', ' + b + ')';
    return color;
}
















