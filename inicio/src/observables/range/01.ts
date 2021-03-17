import { Observable, range, Subscriber } from 'rxjs';

// numeros del 1 al 100
const a = range(1,100);

a.subscribe(
    next => console.log(next),
    null,
    () => console.log('fin')
);