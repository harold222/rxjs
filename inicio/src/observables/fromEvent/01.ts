import { fromEvent, Observable, Subscriber } from 'rxjs';

//eventos del dom
const obs1 = fromEvent<MouseEvent>(document, 'click');
const obs2 = fromEvent<KeyboardEvent>(document, 'keyup');

obs1.subscribe(
    next => console.log(next),
    null,
    () => console.log('fin')
);