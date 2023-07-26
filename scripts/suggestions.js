let suggestIndex = -1;
let suggestInput = "";

const getSettingg = (setting) => {
  // enable/disable
  return true;
};

const suggest = () => {
  if (!getSettingg("autocomplete")) {
    return;
  }
  suggestInput = document.getElementById("searchInput").value;
  let input = document.getElementById("searchInput").value;
  suggestIndex = -1;

  if (input == "") {
    document.getElementById("suggestions").style.display = "none";
    document.getElementById("searchbar").style.borderRadius = "var(--bdradius)";
    suggestIndex = -1;
  } else {
    let script = document.createElement("script");
    script.type = "text/javascript";

    script.src = `https://www.google.com/complete/search?client=firefox&q=${input}&callback=getSuggestions`;
    document.body.appendChild(script);
  }
};

const getSuggestions = (data) => {
  if (data[1].length > 0) {
    document.getElementById("suggestions").style.display = "block";
    document.getElementById("searchbar").style.borderRadius =
      "var(--bdradius) var(--bdradius) 0 0";
  } else {
    document.getElementById("suggestions").style.display = "none";
    document.getElementById("searchbar").style.borderRadius = "var(--bdradius)";
  }
  document.getElementById("suggestions").innerHTML = "<hr>";
  data[1].forEach((element, index) => {
    if (element.startsWith("https://")) {
      document.getElementById(
        "suggestions"
      ).innerHTML += `<p id='sug${index}' onclick="location.href='${element}'">${element}</p>`;
    } else {
      document.getElementById(
        "suggestions"
      ).innerHTML += `<p id='sug${index}' onclick="searchSuggestion(${index})">${element}</p>`;
    }
  });
};

const hideSearchSuggest = () => {
  //focus out hide
  document.getElementById("searchbar").addEventListener("focusout", (event) => {
    if (document.querySelector("#suggestions:hover") == null) {
      document.getElementById("suggestions").style.display = "none";
      document.getElementById("searchbar").style.borderRadius =
        "var(--bdradius)";
      suggestIndex = -1;
    }
  });

  document.addEventListener("click", (event) => {
    if (document.querySelector("#suggestions:hover") == null) {
      document.getElementById("suggestions").style.display = "none";
      document.getElementById("searchbar").style.borderRadius =
        "var(--bdradius)";
      suggestIndex = -1;
    }
  });

  // focus in suggest
  document.getElementById("searchbar").addEventListener("focusin", (event) => {
    suggest();
  });

  // move suggest index
  document.addEventListener("keydown", (event) => {
    if (document.getElementById("suggestions").style.display == "block") {
      // arrow down
      if (event.key == "ArrowDown" && suggestIndex < 7) {
        suggestIndex += 1;
        applySuggestions();
      }

      // arrow up
      if (event.key == "ArrowUp") {
        if (suggestIndex > 0) {
          suggestIndex -= 1;
        } else {
          suggestIndex = -1;
          document.getElementById("searchInput").value = suggestInput;
        }
        applySuggestions();
      }

      // arrow right
      if (event.key == "ArrowRight" && suggestIndex >= 0) {
        suggestIndex = -1;
        suggestInput = document.getElementById("searchInput").value;
        applySuggestions();
      }

      // arrow left
      if (event.key == "ArrowLeft" && suggestIndex >= 0) {
        suggestIndex = -1;
        document.getElementById("searchInput").value = suggestInput;
        applySuggestions();
      }
    }
  });
};

const applySuggestions = () => {
  document.querySelectorAll("#suggestions p").forEach((element) => {
    element.style.backgroundColor = "rgba(0,0,0,0)";
  });

  if (suggestIndex >= 0) {
    document.getElementById("searchInput").value = document.getElementById(
      `sug${suggestIndex}`
    ).innerHTML;
    document.getElementById(`sug${suggestIndex}`).style.backgroundColor =
      "rgba(0,0,0,0.2)";
  }

  setTimeout(selectionToEnd, 0);
};

const selectionToEnd = () => {
  document.getElementById("searchInput").setSelectionRange(1000, 1000);
};

const searchSuggestion = (id) => {
  document.getElementById("searchInput").value = document.getElementById(
    `sug${id}`
  ).innerHTML;
  //urlSubmit()
  document.forms[0].submit();
};

hideSearchSuggest();
