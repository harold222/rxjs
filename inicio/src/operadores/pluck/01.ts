import { pluck } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const key$ = fromEvent<KeyboardEvent>(document, 'keyup');

const pluck$ = key$
.pipe(
    pluck('key') //tomo solo la propiedad que necesito
)
.subscribe(console.log);
