import readline from 'readline-promise';

import { Configuracion } from '../modelos/configuracion';
import { BancoArchivos } from '../almacenamiento/banco-archivos';
import { mostrarMenuGestores } from './menu-gestores';

// export porque la función se utiliza fuera de este archivo
// async porque dentro se utiliza await
export async function mostrarMenuPrincipal(
  conf: Configuracion, 
  bancoArchivos: BancoArchivos) {

  // configuración de readline-promise
  const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  let opcion: string;

  do {

    console.clear();
    console.log('BANCO');
    console.log('-------------');
    console.log('1. Gestores');
    console.log('2. Clientes');
    console.log('3. Mensajes');
    console.log('4. Transferencias');
    console.log('5. Otros');
    console.log('6. Login');
    console.log('0. Salir');
    
    opcion = await rlp.questionAsync('¿Qué opción deseas?\n');
    console.log(opcion);
    
    if(opcion === '1') {
      await mostrarMenuGestores(conf, bancoArchivos, rlp);
    }

  } while(opcion !== '0');

  // esta es la última línea del programa
  rlp.close();
}