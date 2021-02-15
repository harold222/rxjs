import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.log('error: ', error),
    complete: () => console.log('complete.')
};

// { }
const object$ = new Observable(sub => {
    //emite el valor deseado
    sub.next('hola');
    sub.next('mundo');

    // permite dar fin a los siguientes next
    sub.complete();
});

// object$.subscribe(data => {
//     console.log('data: ', data);
// });

object$.subscribe(observer);



















