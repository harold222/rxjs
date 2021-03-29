import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalFunction = (acumulador: number, actual: number) => {
    return acumulador + actual;
}

const total = numbers.reduce(totalFunction, 0);
 
//---------Con rudycer-------

interval(1000)
.pipe(
    tap(val => console.log('valor: ', val)),
    take(5),
    reduce(totalFunction)
)
.subscribe({
    next: val => console.log('fin reduce: ', val),
    complete: () => console.log('complete')
});






