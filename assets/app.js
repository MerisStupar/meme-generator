const imageFileInput = document.querySelector('#imageFileInput');
const topTextInput = document.querySelector('#inputTopText');
const bottomTextInput = document.querySelector('#inputBottomText');
const canvas = document.querySelector('#meme');

let image;

imageFileInput.addEventListener("change", ()=>{     //for change image
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);
    
    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", ()=>{
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    }, { once:true });

});          

function updateMemeCanvas(canvas, image, topText, bottomText){
    console.log(canvas);
    console.log(image);
    console.log(topText);
    console.log(bottomText);
}
