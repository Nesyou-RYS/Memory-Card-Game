const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const time = document.getElementById("time");
const singature = document.getElementById("singature");
// const livesBox = document.querySelector(".lives-box");
// var boxes = document.querySelector(".live-box");

var colors = ["#CC2936", "#ef765f", "#F9DA4F", "#7ca92d"];

window.addEventListener("load", function () {
  setTimeout(() => {
    console.log("here we are");
    singature.style = "z-index:-1";
    singature.style = "display:none";
  }, 1000);
});

let playerLives = 6;
let totalTime = 0;
time.textContent = "0:00";
playerLivesCount.textContent = playerLives;

const getData = () => [
  {
    imgSrc:
      "https://img.freepik.com/premium-vector/hand-drawn-cartoon-monkey-face-illustration_23-2150506032.jpg?size=626&ext=jpg",
    name: "beatles",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-bunny-face-illustration_23-2150506044.jpg?size=626&ext=jpg",
    name: "blink 182",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-wolf-face-illustration_23-2150506053.jpg?size=626&ext=jpg",
    name: "fka twigs",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-fox-face-illustration_23-2150506056.jpg?size=626&ext=jpg",
    name: "fleetwood",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-vector/hand-drawn-cartoon-puppy-illustration_23-2150500021.jpg?w=740",
    name: "joy division",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-lion-face-illustration_23-2150506041.jpg?w=740&t=st=1692085372~exp=1692085972~hmac=95ae66c913d6859c29c73fbaca15d9c354c02069e5763b7886b762542b22f5f9",
    name: "lep zeppelin",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-horse-face-illustration_23-2150499994.jpg?w=740&t=st=1692085594~exp=1692086194~hmac=8aad84ce40bc6237ec698479710cbf95eba20106861e2c5f90c0d66ea08f8623",
    name: "metallica",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-panda-illustration_23-2150500006.jpg?size=626&ext=jpg",
    name: "pink floyd",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-chick-illustration_23-2150500015.jpg?size=626&ext=jpg",
    name: "last of us",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-pigeon-illustration_23-2150500012.jpg?w=740&t=st=1692085967~exp=1692086567~hmac=7a32246d7977e2f907ea1dfc65de03b57be90b93f2137f767f7130565698f16c",
    name: "eagle abasd",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-vector/hand-drawn-cartoon-monkey-face-illustration_23-2150506032.jpg?size=626&ext=jpg",
    name: "beatles",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-bunny-face-illustration_23-2150506044.jpg?size=626&ext=jpg",
    name: "blink 182",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-wolf-face-illustration_23-2150506053.jpg?size=626&ext=jpg",
    name: "fka twigs",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-fox-face-illustration_23-2150506056.jpg?size=626&ext=jpg",
    name: "fleetwood",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-vector/hand-drawn-cartoon-puppy-illustration_23-2150500021.jpg?w=740",
    name: "joy division",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-lion-face-illustration_23-2150506041.jpg?w=740&t=st=1692085372~exp=1692085972~hmac=95ae66c913d6859c29c73fbaca15d9c354c02069e5763b7886b762542b22f5f9",
    name: "lep zeppelin",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-horse-face-illustration_23-2150499994.jpg?w=740&t=st=1692085594~exp=1692086194~hmac=8aad84ce40bc6237ec698479710cbf95eba20106861e2c5f90c0d66ea08f8623",
    name: "metallica",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-panda-illustration_23-2150500006.jpg?size=626&ext=jpg",
    name: "pink floyd",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-chick-illustration_23-2150500015.jpg?size=626&ext=jpg",
    name: "last of us",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-vector/hand-drawn-cartoon-pigeon-illustration_23-2150500012.jpg?w=740&t=st=1692085967~exp=1692086567~hmac=7a32246d7977e2f907ea1dfc65de03b57be90b93f2137f767f7130565698f16c",
    name: "eagle abasd",
  },
];

//randomise
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

setInterval(() => {
  totalTime++;
  let currentMin = Math.floor(totalTime / 60);
  let currentSec = Math.floor(totalTime % 60);
  if (currentSec < 10) {
    //if sec is less than 10 then add 0 before it
    currentSec = `0${currentSec}`;
  }
  time.innerText = `${currentMin}:${currentSec}`;
}, 1000);

// card generator
const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    back.style.opacity = 0.5;
    setTimeout(() => {
      back.style.opacity = 1;
      back.style.transition = "2s";
    }, 1500);

    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    //attache the card
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.add("toggleCard");
      checkCards(e);
    });
  });
};

const checkCards = (e) => {
  const cardData = getData();
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggleCard");
        }, 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        let cardsssback = document.querySelectorAll(".back");
        cardsssback.forEach((card) => {
          card.style.opacity = ".0";
        });

        restart("try again");
      }
      console.log("not match");
      // decreaseLive();
    }
  }

  if (toggleCard.length === cardData.length) {
    restart("You wooooon");
  }
};

const restart = (text) => {
  let cardData = randomize();
  setTimeout(() => window.alert(text), 3000);
  setTimeout(() => {
    location.reload();
  }, 3500);
};

cardGenerator();
