function generarFicha() {
  let datos = [];
  alertify.prompt(
    "Ingrese los datos:",
    "",

    function (evt, nombre) {
      datos.push(nombre);
      console.log(datos);
      alertify.prompt("Ingrese los datos:", "", function (evt, edad) {
        console.log("object");
        datos.push(edad);
        console.log(datos);

        let datosFicha = document.getElementsByClassName("datosFicha");

        for (let i = 0; i < datosFicha.length; i++) {
          datosFicha[i].innerHTML = datos[i];
        }

        document.getElementById("contenedorFicha").classList.remove("d-none");
      });
    }
  );

  // alert("Ingrese los siguientes datos:")
  // let nombreMascota = prompt("Nombre de la mascota");
  // let edadMascota = prompt("Edad de la mascota");
  // let especieMascota = prompt("Especie de la mascota (Gato o Perro)");
  // let generoMascota = prompt("Género de la mascota (Macho o Hembra)");
  // let razaMascota = prompt("Raza de la mascota");
  // let colorMascota = prompt("Alergias de la mascota");
  // let otrosMascota = prompt("Otros datos de interés");

  // datos.push(nombreMascota);
  // datos.push(edadMascota);
  // datos.push(especieMascota);
  // datos.push(generoMascota);
  // datos.push(razaMascota);
  // datos.push(colorMascota);
  // datos.push(otrosMascota);
}
