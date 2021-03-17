import { asyncScheduler } from 'rxjs';

//esto puede reemplazar un settimeout o un setinterval

const saludar = () => console.log('hello world');
const saludarDos = (name: string) => console.log('bye world '+name);

//ejecuto esta funcion pasados los dos segundos
// asyncScheduler.schedule(saludar, 2000);

//solo puedo enviar un argumento
// asyncScheduler.schedule(saludarDos, 2000, 'harold');

//creando un set interval, no puede ser una funcion flecha
//solo puede ser 1 argumento, se ejecutara liego de 3 segundos
asyncScheduler.schedule(function(state: any) {
    console.log('state: ', state);

    //camvia el estado u seguira ejecutandose cada seg
    this.schedule(state+1, 1000);

}, 3000, 0);



