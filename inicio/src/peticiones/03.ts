import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const petition = 'https://httpbin.org/delay/1';

const errorCatch = (err: AjaxError) => {
    console.warn(err.message);
    // return of({});
    return of([]);//podria retronar otra peticion, otro observable, arreglo, etc
};


ajax.post(petition, {
    id:2, name: 'prueba'
}, { 'token': '123' }).subscribe(console.log);

ajax.put(petition, {
    id:2, name: 'prueba'
}, { 'token': '123' }).subscribe(console.log);

ajax.delete(petition, {}).subscribe(console.log);

ajax({
    url: petition,
    method: 'POST',
    headers: {},
})







