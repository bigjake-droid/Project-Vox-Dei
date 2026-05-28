window.onload = () => {

setTimeout(() => {

document
.getElementById("splashScreen")
.classList.add("hidden");

document
.getElementById("initiateScreen")
.classList.remove("hidden");

}, 5000);

};

function enterApp(type){

alert("Entering " + type);

}