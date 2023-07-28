// GetStarted - A simple responsive Startpage
// Author: MrAlpha786 (github.con/MrAlpha786)

// Greeting time!
var myDate = new Date();
var hrs = myDate.getHours();

var greet;
var html = "";

if (hrs < 12)
  greet = html + '<span class="morning">' + "Morning" + "</span>";
else if (hrs >= 12 && hrs <= 17)
  greet = html + '<span class="afternoon">' + "Afternoon" + "</span>";
else if (hrs >= 17 && hrs <= 24)
  greet = html + '<span class="evening">' + "Evening" + "</span>";

document.getElementById("greeting").innerHTML = greet;

// Username
// document.getElementById("username").innerHTML = userName;

// Suggestions
function InputBoxReset(inputID) {
  document.getElementById(inputID).value = "";
  document.getElementById("suggestions").value = "";
}

// Show Scrollbar on scrolling
window.addEventListener(
  "scroll",
  function showScrollbar(e) {
    if (e.target.classList.contains("visible-scrollbar") === false) {
      e.target.classList.add("visible-scrollbar");

      // Hide Scrollbar after 1.5s
      setTimeout(hideScrollbar, 1500, e);
    }
  },
  true
);

// Hide Scrollbar
function hideScrollbar(e) {
  e.target.classList.remove("visible-scrollbar");
}

// Check if dark-mode is enabled
if (localStorage.getItem("darkMode") == "enabled") {
  document.body.classList.toggle("dark-mode");
}

// Toggle dark-mode of body
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  // Save mode preference to local storage
  // It will keep dark-mode persistant across browser  sessions
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

//Bookmark Table
var tabs = document.querySelectorAll(".tab");
var contents = document.querySelectorAll(".content");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].innerHTML = cards[i].name;

  var sites = Object.keys(cards[i].bookmarks);
  //Populate content with bookmarks
  for (let j = 0; j < sites.length; j++) {
    var a_link = document.createElement("a");
    a_link.innerHTML = sites[j];
    a_link.href = cards[i].bookmarks[sites[j]];
    a_link.target = "_blank";

    contents[i].appendChild(a_link);
  }

  // Make tab active on mouse click
  tabs[i].addEventListener("click", function () {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
    }
    tabs[i].classList.add("active");

    for (let j = 0; j < contents.length; j++) {
      contents[j].classList.remove("active");
    }
    contents[i].classList.add("active");
  });
}

// Date and Time
// Function to format 1 in 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Creates interval
const interval = setInterval(() => {
  // Get current time
  const now = new Date();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format date as in mm/dd/aaaa hh:ii:ss
  const dateTime =
    " " +
    weekday[now.getDay()] +
    " " +
    month[now.getMonth()] +
    " " +
    zeroFill(now.getDate()) +
    ", " +
    now.getFullYear();
  const timeDate =
    " " +
    zeroFill(now.getHours()) +
    "<span id='dottime'>:</span>" +
    zeroFill(now.getMinutes()) +
    "<span id='dottime'>:</span>" +
    zeroFill(now.getSeconds());

  // Display the date and time on the screen using div#date-time
  document.getElementById("date-time").innerHTML = dateTime;
  document.getElementById("time-date").innerHTML = timeDate;
}, 1000);

// Hide / Show DIV
function buttonClicked() {
  $("#hideDiv").toggle();
}
