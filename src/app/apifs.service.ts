import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, debounceTime, tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApifsService {

  endpoint: string = 'http://localhost:3000/'
  // endpoint: string = 'https://www.lefrecce.it/msite/api/'

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

  solutions(
    origin: string, destination: string,
    arflag: string, direction: string,
    adate: string, atime: string,
    adultno: string, childno: string,
    onlyRegional: boolean = false,
  ) {
    // return this.http.get(this.endpoint+'solutions'+'?origin=BARLETTA&destination=BARI%20(%20TUTTE%20LE%20STAZIONI%20)&arflag=A&adate=16/10/2021&adultno=1&childno=0&direction=A&atime=16')
    return this.http.get(this.endpoint+'solutions',{
      params: {origin, destination, arflag, direction, adate, adultno, childno, atime, onlyRegional: "false" }
    })
    .pipe(
      map((response) => {
        // return {
        //   id: response.body.idsolution,
        // }
        return Object.values(response)
        .filter(sol => {
          if (sol.saleable)
            return sol
        })
        .map((sol, index) => {
          return {
            ...sol,
            key: index,
            departuretime: new Date(sol.departuretime).toLocaleString("it-IT"),
            arrivaltime: new Date(sol.arrivaltime).toLocaleString("it-IT"),
            train: (<Array<any>>sol.trainlist).filter(train => (train["traintype"] !== "U"))
          }
        })
      })
    )

  }
}
