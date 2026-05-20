const balloonContainer =
document.getElementById("balloonContainer");

const confettiContainer =
document.getElementById("confettiContainer");

const popupScene =
document.getElementById("popupScene");

const finalScene =
document.getElementById("finalScene");

const continueBtn =
document.getElementById("continueBtn");

const popSound =
document.getElementById("popSound");

/* TOTAL BALON */

const age = 17;

/* NOMOR SEKARANG */

let current = 1;

/* WARNA BALON */

const balloonColors = [

"#ff8fab",
"#ffb3c6",
"#ffc8dd",
"#cdb4db",
"#bde0fe",
"#a2d2ff",
"#b8f2e6"
];

/* WARNA BACKGROUND */

const backgroundColors = [

"#fff0f5",
"#f8edff",
"#edf6ff",
"#fff6e9",
"#f1fff3",
"#fdf0ff",
"#eefcff"
];

/* START */

showBalloon();

/* ========================= */
/* BALON */
/* ========================= */

function showBalloon(){

  /* JIKA SUDAH 17 */

  if(current > age){

    popupScene.style.display = "flex";

    return;
  }

  /* RANDOM WARNA */

  const balloonColor =

  balloonColors[
    Math.floor(
      Math.random()
      * balloonColors.length
    )
  ];

  const bgColor =

  backgroundColors[
    Math.floor(
      Math.random()
      * backgroundColors.length
    )
  ];

  document.body.style.background =
  bgColor;

  /* BUAT BALON */

  const balloon =
  document.createElement("div");

  balloon.className =
  "balloon";

  balloon.style.background =
  balloonColor;

  balloon.innerHTML =
  current;

  balloonContainer.appendChild(balloon);

  /* CLICK */

  balloon.onclick = () => {

    /* SUARA */

    popSound.currentTime = 0;

    popSound.play().catch(() => {});

    /* CONFETTI */

    createConfetti(balloon);

    /* POP */

    balloon.classList.add("pop");

    setTimeout(() => {

      balloon.remove();

      current++;

      showBalloon();

    },350);
  };
}

/* ========================= */
/* CONFETTI */
/* ========================= */

function createConfetti(balloon){

  const rect =
  balloon.getBoundingClientRect();

  for(let i = 0; i < 25; i++){

    const confetti =
    document.createElement("div");

    confetti.className =
    "confetti";

    confetti.style.left =
    rect.left + rect.width / 2 + "px";

    confetti.style.top =
    rect.top + rect.height / 2 + "px";

    confetti.style.background =

    balloonColors[
      Math.floor(
        Math.random()
        * balloonColors.length
      )
    ];

    confetti.style.setProperty(
      "--x",
      Math.random()
    );

    confetti.style.setProperty(
      "--y",
      Math.random()
    );

    confettiContainer.appendChild(confetti);

    setTimeout(() => {

      confetti.remove();

    },1000);
  }
}

/* ========================= */
/* LANJUT */
/* ========================= */

continueBtn.onclick = () => {

  /* TUTUP POPUP */

  popupScene.style.display =
  "none";

  /* TAMPILKAN HALAMAN FINAL */

  finalScene.style.display =
  "block";

  /* PAKSA REPAINT */

  finalScene.offsetHeight;

  /* PLAY VIDEO */

  const video =
  document.getElementById("birthdayVideo");

  if(video){

    video.muted = true;

    video.play().catch((e) => {

      console.log(e);
    });
  }
};
