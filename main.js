Webcam.set({
    width:310,
    height:100,
    img_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('  MobileNet',modalLoaded);
classifier2 = ml5.imageClassifier('https://drive.google.com/file/d/18yRHJ8N6VWpPk1n7t5FuJxbg9xbKFcv_/view?usp=sharing',modalLoaded1);
function modalLoaded(){
    console.log('Modal Loaded!');
}
function modalLoaded1(){
    console.log('Modal Loaded1!');
}



function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
   }


function gotResult(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result)
        document.getElementById("mobile").innerHTML = result[0].label;
    }
}

function check1(){
    img = document.getElementById('captured_image')
    classifier2.classify(img,gotResult1)
}

function gotResult1(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result)
        document.getElementById("microsoft azure").innerHTML = result[1].label;
    }
}