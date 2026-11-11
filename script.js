const albums = [
  {
    name: "Madonna",
    image: "./img/debut.png",
    page: "./paginashtml/debut.html"
  },
  {
    name: "Like a Virgin",
    image: "./img/likeavirgin.png",
    page: "./paginashtml/likeavirgin.html"
  },
  {
    name: "True Blue",
    image: "./img/trueblue.png",
    page: "./paginashtml/trueblue.html"
  },
  {
    name: "Like a Prayer",
    image: "./img/likeaprayer.png",
    page: "./paginashtml/likeaprayer.html"
  },
  {
    name: "Erotica",
    image: "./img/erotica.png",
    page: "./paginashtml/erotica.html"
  },
  {
    name: "Bedtime Stories",
    image: "./img/bedtimestories.png",
    page: "./paginashtml/bedtimestories.html"
  },
  {
    name: "Ray of Light",
    image: "./img/rayoflight.png",
    page: "./paginashtml/rayoflight.html"
  },
  {
    name: "Music",
    image: "./img/music.png",
    page: "./paginashtml/music.html"
  },
  {
    name: "American Life",
    image: "./img/americanlife.png",
    page: "./paginashtml/americanlife.html"
  },
  {
    name: "Confessions on a Dance Floor",
    image: "./img/confessions.png",
    page: "./paginashtml/confessions.html"
  },
  {
    name: "Hard Candy",
    image: "./img/hardcandy.png",
    page: "./paginashtml/hardcandy.html"
  },
  {
    name: "MDNA",
    image: "./img/mdna.webp",
    page: "./paginashtml/mdna.html"
  },
  {
    name: "Rebel Heart",
    image: "./img/rebelheart.png",
    page: "./paginashtml/rebelheart.html"
  },
  {
    name: "Madame X",
    image: "./img/madame-x.png",
    page: "./paginashtml/madamex.html"
  },
  {
    name: "CONFESSIONS II",
    image: "./img/confessionsii.png",
    page: "./paginashtml/confessionsii.html"
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