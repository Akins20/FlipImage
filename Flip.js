console.log( "Hi Hi" );

window.onload = function () {
    let output = document.querySelector( "output" );
    let input = document.querySelector( "input" );
    let imgArray = [];
    input.addEventListener( "change", () => {
        const file = input.files
        imgArray.push( file[ 0 ] )
        displayImages();
    } );
    function displayImages() {
        let images = "";
        imgArray.forEach( ( image, index ) => {
            images += `<div class="image">
                <img src="${URL.createObjectURL( image )}" alt="image" id="img"><br>
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
        } );
        output.innerHTML = images;
        function deleteImage( index ) {
            imagesArray.splice( index, 1 );
            displayImages();
        }
    }

}

function displayImages() {
    let images = "";
    imgArray.forEach( ( image, index ) => {
        images += `<div class="image">
                <img src="${URL.createObjectURL( image )}" alt="image" id="img"><br>
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
    } );
    output.innerHTML = images;
}

function deleteImage( index ) {
    imagesArray.splice( index, 1 );
    displayImages();
}

function up() {
    let img = document.getElementById( "img" );
    img.style.transform = "rotate(180deg)";
    img.style.transition = "transform 0.8s";
    img.style.transformStyle = "preserve-3d";
}

function down() {
    let img = document.getElementById( "img" );
    img.style.transform = "rotate(360deg)";
    img.style.transition = "transform 0.8s";
    img.style.transformStyle = "preserve-3d";
}
function backward() {
    let img = document.getElementById( "img" );
    img.style.transform = "rotateY(180deg)";
    img.style.transition = "transform 0.8s";
    img.style.transformStyle = "preserve-3d";
}
function forward() {
    let img = document.getElementById( "img" );
    img.style.transform = "rotateY(360deg)";
    img.style.transition = "transform 0.8s";
    img.style.transformStyle = "preserve-3d";
}