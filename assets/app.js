const imageFileInput = document.querySelector('#imageFileInput');
const topTextInput = document.querySelector('#inputTopText');
const bottomTextInput = document.querySelector('#inputBottomText');
const cavnas = document.querySelector('#meme');

let image;

imageFileInput.addEventListener("change", ()=>{     //for change image
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);
    
    console.log(imageDataUrl);

});

function updateMemeCanvas(canvas, image, topTextText, bottomText){
    console.log(canvas);
    console.log(image);
    console.log(topText);
    console.log(bottomText);
}
