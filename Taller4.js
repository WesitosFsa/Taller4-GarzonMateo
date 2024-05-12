//Objetos
const perfil = {
    nombre: "Maiz Czes",
    edad: 30,
    comun: "1 Amigos",
    ciudad: "Ecuador"
  };

//Arreglos
const perfiles = [
    {
      nombre: "Juan Ban",
      edad: 25,
      comun: "3 Amigos",
      ciudad: "Ecuador"
    },
    {
      nombre: "Alexandre Solis",
      edad: 35,
      comun: "1 Amigos",
      ciudad: "Ecuador"
    },
    {
      nombre: "Isaac Martin",
      edad: 28,
      comun: "1 Amigos",
      ciudad: "Ecuador"
    }
  ];
  
  const{nombre,edad,comun,ciudad} = perfil
  console.log("Datos del perfil:");
  console.log("Nombre:", perfil.nombre);
  console.log("Edad:", perfil.edad);
  console.log("Ocupación:", perfil.ocupacion);
  console.log("Ciudad:", perfil.ciudad);
  
  // Imprimir datos de los perfiles en el arreglo
  const perfilesBDD = perfiles.map((u)=>{
    return{
        nombre:u.nombre.toUpperCase(),
        edad,
        comun:u.comun.toUpperCase(),
        ciudad:u.ciudad.toUpperCase(),
    }
  })

  console.log(perfilesBDD)