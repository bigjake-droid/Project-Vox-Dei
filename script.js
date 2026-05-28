// WAIT FOR PAGE LOAD

window.onload = () => {

  // SPLASH SCREEN TIMER

  setTimeout(() => {

    // HIDE SPLASH

    document
      .getElementById("splashScreen")
      .classList.add("hidden");

    // SHOW INITIATE SCREEN

    document
      .getElementById("initiateScreen")
      .classList.remove("hidden");

  }, 5000);

};

// ENTER APP

function enterApp(type){

  localStorage.setItem(
    "caseforgeMode",
    type
  );

  alert(
    "Entering " + type + " Mode"
  );

  // FUTURE:
  // window.location.href = "dashboard.html";

}