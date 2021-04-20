import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, pluck, map, mergeMap, catchError } from 'rxjs/operators';

// helper
const petition = (login) =>
    ajax.post('https://reqres.in/api/login?delay=1', login);

//formulario
const form = document.createElement('form'),
      email = document.createElement('input'),
      pass = document.createElement('input'),
      submit = document.createElement('button');

//configs
email.type = "email";
email.placeholder = "Ingrese email";
email.value = 'eve.holt@reqres.in';

pass.type = "password";
pass.placeholder = "Ingrese email";
pass.value = 'cityslicka';

submit.innerHTML = 'Ingresar';

form.append(email, pass, submit);
document.querySelector('body').append(form);

const submitForm$ = fromEvent(form,'submit');

submitForm$
.pipe(
    tap((e) => e.preventDefault()),
    tap(() => submit.disabled = true),
    map(e => ({
        email: e.target[0].value,
        password: e.target[1].value
    })),
    mergeMap(login => petition(login)
        .pipe(
            pluck('response', 'token'),
            tap(() => submit.disabled = false),
            catchError(err => of(err?.message))
        )
    )
)
.subscribe(token => console.log('token: ', token));