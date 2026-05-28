// SPLASH TRANSITION
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

// ENTER APP
function enterApp(type) {

  localStorage.setItem("caseforge_mode", type);

  alert(
    `Entering ${type.toUpperCase()} mode`
  );

  // Future:
  // Redirect to dashboard
  // window.location.href = "dashboard.html";

}