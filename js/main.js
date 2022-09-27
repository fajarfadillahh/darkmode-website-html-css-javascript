// change the icons inside the button based on previous settings
if (localStorage.getItem("theme") === "dark") {
  setDarkMode();
}

// theme toggle button
function setDarkMode() {
  // toggle icons inside button
  let emoticon = "";
  let isDark = document.documentElement.classList.toggle("dark");

  // if set via local storage previously
  if (isDark) {
    emoticon = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    emoticon = "🌙";
    localStorage.removeItem("theme");
  }

  // put the theme icon on button
  document.getElementById("theme-toggle").innerHTML = emoticon;
}
