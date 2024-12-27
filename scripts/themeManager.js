const THEMES_BUTTON = document.querySelector("#bd-theme");
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

(() => {
  function changeImages(hrefEnd) {
    let a = document.querySelectorAll(".image");
    let img = document.querySelectorAll("img");

    for (let i = 0; i < a.length; i++) {
      href = a[i].href;
      href = href.slice(0, href.length - 6) + hrefEnd;
      a[i].href = href;
      img[i].src = href;
    }
  }

  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === LIGHT_THEME) {
    document.documentElement.setAttribute("data-bs-theme", LIGHT_THEME);
    changeImages("-L.png");
  } else if (currentTheme === DARK_THEME) {
    document.documentElement.setAttribute("data-bs-theme", DARK_THEME);
    changeImages("-D.png");
  }

  THEMES_BUTTON.addEventListener("click", function () {
    if (currentTheme === LIGHT_THEME) {
      changeImages("-D.png");
      theme = DARK_THEME;
    } else if (currentTheme === DARK_THEME) {
      changeImages("-L.png");
      theme = LIGHT_THEME;
    } else {
      changeImages("-L.png");
      theme = LIGHT_THEME;
    }

    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    currentTheme = theme;
  });
})();
