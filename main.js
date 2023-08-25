var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition ;
function start(){
    document.getElementById('textbox').innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById('textbox').innerHTML=content;
    console.log(content);
    speak();
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utter_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
}

camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

