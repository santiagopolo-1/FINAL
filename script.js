const albums = [
  {
    name: "Madonna",
    image: "./img/debut.png"
  },
  {
    name: "Like a Virgin",
    image: "./img/likeavirgin.png"
  },
  {
    name: "True Blue",
    image: "./img/trueblue.png"
  },
  {
    name: "Like a Prayer",
    image: "./img/likeaprayer.png"
  },
  {
    name: "Erotica",
    image: "./img/erotica.png"
  },
  {
    name: "Bedtime Stories",
    image: "./img/bedtimestories.png"
  },
  {
    name: "Ray of Light",
    image: "./img/rayoflight.png"
  },
  {
    name: "Music",
    image: "./img/music.png"
  },
  {
    name: "American Life",
    image: "./img/americanlife.png"
  },
  {
    name: "Confessions on a Dance Floor",
    image: "./img/confessions.png"
  },
  {
    name: "Hard Candy",
    image: "./img/hardcandy.png"
  },
  {
    name: "MDNA",
    image: "./img/mdna.webp"
  },
  {
    name: "Rebel Heart",
    image: "./img/rebelheart.png"
  },
  {
    name: "Madame X",
    image: "./img/madame-x.png"
  },
  {
    name: "CONFESSIONS II",
    image: "./img/confessionsii.png"
  }
];
const boton = document.getElementById("albumRandom");
const portada = document.getElementById("portadaResultado");
boton.addEventListener("click", function() {
  boton.disabled = true;
  let contador = 0;
  const animacion = setInterval(function() {
    const aleatorio = Math.floor(Math.random() * albums.length);
    portada.src = albums[aleatorio].image;
    contador++;
    if (contador >= 15) {
      clearInterval(animacion);
      const albumFinal = albums[
        Math.floor(Math.random() * albums.length)
      ];
      portada.src = albumFinal.image;
      setTimeout(function() {
        window.location.href =
          "album.html?album=" + encodeURIComponent(albumFinal.name);
      }, 1000);
    }
  }, 130);
});