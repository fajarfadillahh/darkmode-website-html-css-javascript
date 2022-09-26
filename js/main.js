// check localstorage theme
if (localStorage.getItem("theme") === "dark") {
  setDarkMode();
}

// theme toggle button
function setDarkMode() {
  let emoticon = "";
  let isDark = document.documentElement.classList.toggle("dark");

  // check theme toggle
  if (isDark) {
    emoticon = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    emoticon = "🌙";
    localStorage.removeItem("theme");
  }

  // change theme toggle icon
  document.getElementById("theme-toggle").innerHTML = emoticon;
}
