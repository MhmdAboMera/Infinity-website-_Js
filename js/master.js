// start seting box
document.querySelector(".main .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  this.classList.toggle("open");
  document.querySelector(".seting-box").classList.toggle("open");
};
// function for switch active class
function controlActive(e) {
  e.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  e.target.classList.add("active");
}
// switch colors
document.querySelectorAll(".color-list li").forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-option", e.target.dataset.color);
    controlActive(e);
  });
});
if (localStorage.getItem("color-option") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );

  document.querySelectorAll(".color-list li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === localStorage.getItem("color-option")) {
      li.classList.add("active");
    }
  });
}
// end switch colors
// end seting box
//start set rundam image for landing
let backgeoundOption = true;
let backGroundIntrvel;
function randomImg() {
  if (backgeoundOption === true) {
    let laindingPage = document.querySelector(".landing-page");
    let setImage = [
      "lainding-1.jfif",
      "lainding-2.jfif",
      "lainding-3.jfif",
      "lainding-4.jfif",
      "lainding-5.jfif",
    ];
    backGroundIntrvel = setInterval(() => {
      let rundomImage = Math.floor(Math.random() * setImage.length);
      laindingPage.style.backgroundImage = `url(../imgs/${setImage[rundomImage]})`;
    }, 1000);
  }
}
if (localStorage.getItem("background-option") !== null) {
  if (localStorage.getItem("background-option") === "true") {
    backgeoundOption = true;
  } else {
    backgeoundOption = false;
  }
  document.querySelectorAll(".random-background span").forEach((span) => {
    span.classList.remove("active");
  });
  if (localStorage.getItem("background-option") === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}
//end set rundam image for landing
// start random background
document.querySelectorAll(".random-background span").forEach((span) => {
  span.addEventListener("click", (e) => {
    controlActive(e);
    if (e.target.dataset.background === "yes") {
      backgeoundOption = true;
      randomImg();
      localStorage.setItem("background-option", true);
    } else {
      backgeoundOption = false;
      clearInterval(backGroundIntrvel);
      localStorage.setItem("background-option", false);
    }
  });
});
randomImg();
// end random background
// width to span in skills
let ourSkills = document.querySelector(".skills .our-skills");
window.onscroll = function () {
  let skillsOfsetTop = ourSkills.offsetTop;
  let skillsOuterHight = ourSkills.offsetHeight;
  let windowHight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOfsetTop + skillsOuterHight - windowHight) {
    document
      .querySelectorAll(".skills .our-skills .skill-progers span")
      .forEach((ele) => {
        ele.style.width = ele.dataset.progres;
      });
  }
};
// create popup imges
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overley = document.createElement("div");
    overley.className = "popup-overley";
    document.body.appendChild(overley);
    let popupImg = document.createElement("div");
    popupImg.className = "popup-img";
    document.body.appendChild(popupImg);
    let imge = document.createElement("img");
    imge.className = "imge";
    imge.src = img.src;
    popupImg.appendChild(imge);
    let heding = document.createElement("h3");
    let hedingText = document.createTextNode(img.alt);
    heding.appendChild(hedingText);
    popupImg.prepend(heding);
    let exit = document.createElement("span");
    let exitText = document.createTextNode("X");
    exit.className = "close-popup";
    exit.appendChild(exitText);
    popupImg.prepend(exit);
  });
});
// close popupImge
document.addEventListener("click", (e) => {
  if (e.target.className === "close-popup") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overley").remove();
  }
});
// function for scroll
function scrollTo(ele) {
  ele.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.contant).scrollIntoView({
        behavior: `smooth`,
      });
    });
  });
}
let linkes = document.querySelectorAll(".landing-page .container .links ");
let bullets = document.querySelectorAll(".bullets");
scrollTo(linkes);
scrollTo(bullets);
// show and remove bulltas
document
  .querySelectorAll(
    ".seting-box .seting-container .option-box .bullets-option span"
  )
  .forEach((ele) => {
    ele.addEventListener("click", (e) => {
      if (ele.dataset.display === "yes") {
        document.querySelector(".bullets").style.display = `block`;
        localStorage.setItem("bulltes-option", "yes");
      } else {
        document.querySelector(".bullets").style.display = `none`;
        localStorage.setItem("bulltes-option", "no");
      }
      controlActive(e);
    });
  });
// give value localStorage
if (localStorage.getItem("bulltes-option") !== null) {
  document
    .querySelectorAll(
      ".seting-box .seting-container .option-box .bullets-option span"
    )
    .forEach((ele) => {
      ele.classList.remove("active");
    });
  if (localStorage.getItem("bulltes-option") === "yes") {
    document.querySelector(".bullets").style.display = `block`;
    document
      .querySelector(
        ".seting-box .seting-container .option-box .bullets-option .yes"
      )
      .classList.add("active");
  } else {
    document.querySelector(".bullets").style.display = `none`;
    document
      .querySelector(
        ".seting-box .seting-container .option-box .bullets-option .no"
      )
      .classList.add("active");
  }
}
// rest option
document.querySelector(".seting-box .rest-option").onclick = () => {
  // localStorage.clear();
  localStorage.removeItem("color-option");
  localStorage.removeItem("background-option");
  localStorage.removeItem("bulltes-option");
  window.location.reload();
};
// show togele menu in somll media
document.querySelector(".landing-page .header-area .menu").onclick = function (
  e
) {
  e.stopPropagation();
  document
    .querySelector(".landing-page .header-area .links")
    .classList.toggle("open");
  this.classList.toggle("menu-active");
};
document.querySelector(".landing-page .header-area .links").onclick = function (
  e
) {
  e.stopPropagation();
};
// close toggle menu
document.addEventListener("click", (e) => {
  if (
    e.toggle !== document.querySelector(".landing-page .header-area .menu") &&
    e.toggle !== document.querySelector(".landing-page .header-area .links")
  ) {
    if (
      document
        .querySelector(".landing-page .header-area .links")
        .classList.contains("open")
    ) {
      document
        .querySelector(".landing-page .header-area .menu")
        .classList.toggle("menu-active");
      document
        .querySelector(".landing-page .header-area .links")
        .classList.toggle("open");
    }
  }
});
