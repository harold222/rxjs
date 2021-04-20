import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');


letras$
.pipe(
    mergeMap((letra: string) => {
        return interval(1000)
            .pipe(
                take(3)
            )
    })
)
// .subscribe({
//     next: val => console.log('val: ', val),
//     complete: () => console.log('completado')
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$
.pipe(
    mergeMap(() => interval$
        .pipe(
            // takeUntil(mouseUp$)
        )
    )
)
.subscribe(console.log);