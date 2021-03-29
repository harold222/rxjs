import { of, from } from 'rxjs';

/*
El of permite tomar los argumentos para generar una secuencia
de valores.

from = crea un observable en base a un arreglo, promesa, iterable
o observable
*/

const observer = {
    next: val => console.log('val: ', val),
    complete: () => console.log('complete')
}

// const source$ = from([1, 2, 3, 4, 5]);
const source$ = from([1, 2, 3, 4, 5]);
const sourceDos$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);
sourceDos$.subscribe(resp => {
    resp.json();
});

