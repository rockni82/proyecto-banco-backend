import { Wrapper } from "../modelos/wrapper";
import validator from 'validator';

export async function mostrarMenuOtros(w: Wrapper) {

  let opcion: string;

  do {
    console.clear();
    console.log("MENÚ OTROS");
    console.log("-------------");
    console.log("1. Enviar correo");
    console.log("2. Atrás");

    opcion = await w.rlp.questionAsync("¿Qué opción deseas?\n");

    console.clear();

    // Opción 1 --> Enviar correo
    if (opcion === "1") {

      const correoDestino: string = await w.rlp.questionAsync('Correo destino: ');
      if(!validator.isEmail(correoDestino)) {
        console.log('Correo no válido'); 
        await w.rlp.questionAsync("");
        continue;     
      }

     
      // await bancoGestores.insertarGestor();
      await w.rlp.questionAsync("");
    }

  } while (opcion !== "2");
}
