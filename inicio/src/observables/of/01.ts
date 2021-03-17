import { Observable, Observer, of, Subscriber } from 'rxjs';

const obs = of(1,2,3,4);

obs.subscribe(
    next => console.log(next),
    null,
    () => console.log('fin')
);