const albums = [
  {
    name: "Madonna",
    image: "./img/debut.png",
    page: "./madonna.html"
  },
  {
    name: "Like a Virgin",
    image: "./img/likeavirgin.png",
    page: "./like-a-virgin.html"
  },
  {
    name: "True Blue",
    image: "./img/trueblue.png",
    page: "./true-blue.html"
  },
  {
    name: "Like a Prayer",
    image: "./img/likeaprayer.png",
    page: "./like-a-prayer.html"
  },
  {
    name: "Erotica",
    image: "./img/erotica.png",
    page: "./erotica.html"
  },
  {
    name: "Bedtime Stories",
    image: "./img/bedtimestories.png",
    page: "./bedtime-stories.html"
  },
  {
    name: "Ray of Light",
    image: "./img/rayoflight.png",
    page: "./ray-of-light.html"
  },
  {
    name: "Music",
    image: "./img/music.png",
    page: "./music.html"
  },
  {
    name: "American Life",
    image: "./img/americanlife.png",
    page: "./american-life.html"
  },
  {
    name: "Confessions on a Dance Floor",
    image: "./img/confessions.png",
    page: "./confessions.html"
  },
  {
    name: "Hard Candy",
    image: "./img/hardcandy.png",
    page: "./hard-candy.html"
  },
  {
    name: "MDNA",
    image: "./img/mdna.webp",
    page: "./mdna.html"
  },
  {
    name: "Rebel Heart",
    image: "./img/rebelheart.png",
    page: "./rebel-heart.html"
  },
  {
    name: "Madame X",
    image: "./img/madame-x.png",
    page: "./madame-x.html"
  },
  {
    name: "CONFESSIONS II",
    image: "./img/confessionsii.png",
    page: "./confessions-ii.html"
  }
];

const boton = document.getElementById("albumRandom");
const portada = document.getElementById("album");
albums.forEach(function(album) {
  const imagen = new Image();
  imagen.src = album.image;
});
boton.addEventListener("click", function() {
  boton.disabled = true;
  const seleccionado = albums[
    Math.floor(Math.random() * albums.length)
  ];
  let contador = 0;
  const animacion = setInterval(function() {
    const aleatorio = albums[
      Math.floor(Math.random() * albums.length)
    ];
    portada.src = aleatorio.image;
    contador++;

    if (contador >= 15) {
      clearInterval(animacion);
      portada.src = seleccionado.image;
      setTimeout(function() {
        window.location.href = seleccionado.page;
      }, 1200);

    }

  }, 150);

});