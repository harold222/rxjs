import { Observable, interval, Subscriber, timer } from 'rxjs';

const observer = {
    next: val => console.log(val);
    complete: () => console.log('complete');
}

const interval$ = interval(1000);

//este es como un interval que inicia en 2 segundos
// y  cada segundo se ejecuta esa accion
// tambien puedo enviar un tipo date para que empieze en 
//una fecha deseada
const timer$ = timer(2000, 1000);

interval$.subscribe(observer);
timer$.subscribe(observer);
