import { Configuracion } from './configuracion';
import { BancoArchivos } from '../almacenamiento/banco-archivos';
import { BancoDatabase } from '../almacenamiento/banco-database';
import { ModuloEmail } from '../modulos/modulo-emails';

export interface Wrapper {
  rlp: any;
  conf: Configuracion,
  bancoArchivos: BancoArchivos,
  bancoDatabase: BancoDatabase,
  moduloEmail: ModuloEmail
};