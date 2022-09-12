$(document).ready(function () {
  $(window).scroll(function () {
    // comprueba si la ventana se desplaza más de 500 px, agrega/elimina la clase sólida
    if ($(this).scrollTop() > 550) {
      $(".navbar").addClass("solid");
      $(".back-to-top").addClass("visible");
    } else {
      $(".navbar").removeClass("solid");
      $(".back-to-top").removeClass("visible");
    }
  });
});

$(document).ready(function () {
  // Agrega desplazamiento suave a todos los enlaces
  $("a").on("click", function (event) {
    // Asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
    if (this.hash !== "") {
      // Evita el comportamiento de clic de anclaje predeterminado
      event.preventDefault();

      // variable hash
      var hash = this.hash;

      // Usa el método animate () de jQuery para agregar un desplazamiento de página suave
      // El número opcional (800) especifica el número de milisegundos que se tarda en desplazarse al área especificada
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Agregue hash (#) a la URL cuando termine de desplazarse (comportamiento de clic predeterminado)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
