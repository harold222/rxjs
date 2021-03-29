import { interval, from } from 'rxjs';
import { reduce, take, tap, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalFunction = (acumulador: number, actual: number) => {
    return acumulador + actual;
}

from(numbers)
.pipe(
    // tap(val => console.log('valor: ', val)),
    take(5),
    scan(totalFunction) // emite esa emision
)
.subscribe({
    next: val => console.log('fin reduce: ', val),
    complete: () => console.log('complete')
});






