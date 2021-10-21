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
    const ctx = canvas.getContext ("2d");
    const width = image.width;
    const height = image.height;

    // For update canvas background
    canvas.widht = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, 350, 400);   //image, position (0), postinon (0) & widht/height

}
