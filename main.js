function startclassifictaion()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
       classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bzWZiL-yD/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log(results); 
}