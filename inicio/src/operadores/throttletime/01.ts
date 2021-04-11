import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(1000)
).subscribe(a => console.log(a));

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe( //primer y ultimo valor
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    distinctUntilChanged()
).subscribe(console.log);
