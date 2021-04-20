import { of, interval, forkJoin } from 'rxjs';
import { delay, take } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5);
const interval$ = interval(1000).pipe(take(2));
const letras$ = of('a','b','c','d').pipe(delay(3000));

forkJoin(
    {
        numeros$,
        interval$,
        letras$
    }
).subscribe(console.log);