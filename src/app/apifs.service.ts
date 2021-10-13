import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, debounceTime } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApifsService {

  endpoint: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  autocomplete(name: string) {
    return this.http.get(this.endpoint+'geolocations/locations',{
      params: {name}
    }).pipe(
      debounceTime(20000),
      map( response => {
        if (Object.values(response).length > 0) {
          // console.log(Object.values(response)[0].name)
          return Object.values(response).map(value => value.name)
        } else {
          throw new Error('Nessun risultato')
        }
      })
    )

  }
}
