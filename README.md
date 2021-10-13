# Trenapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## API

## Cerca stazioni
https://www.lefrecce.it/msite/api/geolocations/locations?name=bari
```
[
   {
      "name":"BARI ( TUTTE LE STAZIONI )",
      "id":830011699,
      "tags":[
         
      ]
   },
   {
      "name":"BARI AEROPORTO KAROL WOJTYLA",
      "id":830055014,
      "tags":[
         
      ]
   },
   {
      "name":"BARI BRIGATA BARI",
      "id":830055003,
      "tags":[
         
      ]
   },
   {
      "name":"BARI C.LE FNB",
      "id":830055001,
      "tags":[
         
      ]
   },
   {
      "name":"BARI CECILIA",
      "id":830055010,
      "tags":[
         
      ]
   }
]
```
## Cerca soluzioni per nome
https://www.lefrecce.it/msite/api/solutions?origin=BARLETTA&destination=BARI%20(%20TUTTE%20LE%20STAZIONI%20)&arflag=A&adate=14/10/2021&adultno=1&childno=0&direction=A&onlyRegional=true&atime=07
```
{
   "idsolution":"7016854fd254fe70d5f57ac9be06871ai0",
   "origin":"Barletta",
   "destination":"Bari Centrale",
   "direction":"A",
   "departuretime":1634188380000,
   "arrivaltime":1634190840000,
   "minprice":4.50,
   "optionaltext":null,
   "duration":"00:41",
   "changesno":0,
   "bookable":false,
   "saleable":true,
   "trainlist":[
      {
         "trainidentifier":"Regionale Veloce 4313",
         "trainacronym":"RV",
         "traintype":"R",
         "pricetype":"D"
      }
   ],
   "onlycustom":false,
   "extraInfo":[
      
   ],
   "showSeat":true,
   "specialOffer":null,
   "transportMeasureList":[
      
   ],
   "originalPrice":4.50
}
```
## Dettagli generali soluzione
https://www.lefrecce.it/msite/api/solutions/7016854fd254fe70d5f57ac9be06871ai0/details
```
[
   {
      "idsolution":"7016854fd254fe70d5f57ac9be06871ai0",
      "idleg":"x82137cd5-7696-41ee-bb49-019ae99259fe",
      "direction":"A",
      "trainidentifier":"Regionale Veloce 4313",
      "trainacronym":"RV",
      "departurestation":"BARLETTA",
      "departuretime":1634188380000,
      "arrivalstation":"BARI C.LE",
      "arrivaltime":1634190840000,
      "duration":"00:41",
      "servicelist":[
         {
            "imagetype":"PNG",
            "imagedata":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAABmJLR0QAAAAAAKrPQPGJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQECRsbsoDfkQAAALZJREFUOMutlTEOwyAMRZ+jDNwmUhefIffoVTvQLbfJFHdCaqNCbMiXEBLgr2cwALACL8DGmhhMBnKIyEMA27ZN9n0npcQdvaraBHCnaUoJgBloLlqWxfijnLPU4gCaxDVTAFW1buKi8xmoql3FNYmLvONu4lq1FHUTRzP5np+uqqJ2oENV0WMaJvaahogjpm7iqGno5kVMXcRX9dqKmz03L/oQuYlr6iaO7u050+f4t/TT3sD6AYOBBuIPsP46AAAAAElFTkSuQmCC",
            "servicedesc":"Servizio di 2ª classe prenotabile"
         },
         {
            "imagetype":"PNG",
            "imagedata":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQECh4mldnZnAAAAOlJREFUOMu1lLEOgzAMRM8VQ76GbOT/x7CZr2Fzh8qVY2IIVbklIsHH6TmGRATruiKlhH3fv2spRQCAmcnuX63LsgAAXgBCUwDIOcuoaUpJyz7G0aHqTuLGODpU/S1xrZX0hbuMTxPbL/+VscfxSOJfGU82Uc5ZADSMFQc6qrVSlHjSRNZUG2jvc8/kLDGJCIhIomJrHsnWNZN3xtJj6amUIt1bcdX9EXnGDYq7w2B7oxIRGk7smdtnZibLukGhh74oaqTfZ2bSBh4m78p89P/cMN62LWRmNdKDeZ6Pk6fJ/f0dHY5D4if0BsI8zlb14ByiAAAAAElFTkSuQmCC",
            "servicedesc":"Treno con carrozze attrezzate per il trasporto di passeggeri su sedia a rotelle. Per le localita' abilitate al servizio consultare l'elenco riportato sul sito www.rfi.it"
         },
         {
            "imagetype":"PNG",
            "imagedata":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQECg0OwYMw9AAAASJJREFUOMvtlD1OBDEMhb8si0i9F4moBiQKxLUpERKukG8zza4pMs4k2QQ4wLqJ/JuX+Nlwk00CgIgQY2Rd13Iuy7OBkf1foffvcYsBqGrYdACOwDBYRKbFYoyklKxG6HaXQ22snb8VXdcVVQ0i4i8uIJrCfdLostnZ57scZ4j97/4jPairPx4VG/2198Dj6570ycDJRARVhUwHy3aKvdavzzvXazlNkh9K8uwywPa8e2uaBzZsCJzpn9c3bES18sdwafjpZHd7Lc7fmsd944aIvWhGkO01X1U1+KS5ntKj9YgPI8rsCKzo/RC0w/K9vTC0hUXew7K8Wb8rZmOdqfbUxb+YyEdolpCqbs5XgzNwQeQz/DV5eVEFIJT4lNJttbfyA4YIZ7ydciOQAAAAAElFTkSuQmCC",
            "servicedesc":"Il servizio di trasporto biciclette è soggetto a limitazione. Per i dettagli consulta le Condizioni generali di Trasporto. Treno con servizio di trasporto biciclette al seguito del viaggiatore."
         },
         {
            "imagetype":null,
            "imagedata":null,
            "servicedesc":""
         },
         {
            "imagetype":null,
            "imagedata":null,
            "servicedesc":". "
         },
         {
            "imagetype":null,
            "imagedata":null,
            "servicedesc":"Obbligo di mascherina secondo la normativa vigente"
         }
      ],
      "stoplist":[
         {
            "stationname":"BARLETTA",
            "arrivaltime":null,
            "departuretime":"2021-10-14T07:13:00.000+02:00"
         },
         {
            "stationname":"TRANI",
            "arrivaltime":"2021-10-14T07:20:00.000+02:00",
            "departuretime":"2021-10-14T07:21:00.000+02:00"
         },
         {
            "stationname":"BISCEGLIE",
            "arrivaltime":"2021-10-14T07:26:00.000+02:00",
            "departuretime":"2021-10-14T07:27:00.000+02:00"
         },
         {
            "stationname":"MOLFETTA",
            "arrivaltime":"2021-10-14T07:33:00.000+02:00",
            "departuretime":"2021-10-14T07:34:00.000+02:00"
         },
         {
            "stationname":"GIOVINAZZO",
            "arrivaltime":"2021-10-14T07:39:00.000+02:00",
            "departuretime":"2021-10-14T07:40:00.000+02:00"
         },
         {
            "stationname":"BARI C.LE",
            "arrivaltime":"2021-10-14T07:54:00.000+02:00",
            "departuretime":null
         }
      ],
      "transportType":null
   }
]
```
## Dettagli costi soluzione
https://www.lefrecce.it/msite/api/solutions/7016854fd254fe70d5f57ac9be06871ai0/standardoffers
```
{
   "idsolution":"7016854fd254fe70d5f57ac9be06871ai0",
   "leglist":[
      {
         "idleg":"x82137cd5-7696-41ee-bb49-019ae99259fe",
         "bookingtype":"N",
         "segments":[
            {
               "trainidentifier":"Regionale Veloce 4313",
               "trainacronym":"RV",
               "departurestation":"Barletta",
               "departuretime":"2021-10-14T07:13:00.000+02:00",
               "arrivalstation":"Bari Centrale",
               "arrivaltime":"2021-10-14T07:54:00.000+02:00",
               "nodexmlid":"x82137cd5-7696-41ee-bb49-019ae99259fe",
               "showseatmap":false
            }
         ],
         "servicelist":[
            {
               "name":"2ª CLASSE PRENOTAZIONE",
               "offerlist":[
                  {
                     "name":"ORDINARIA",
                     "extraInfo":[
                        
                     ],
                     "points":2.25,
                     "price":4.50,
                     "message":"",
                     "offeridlist":[
                        {
                           "xmlid":"xdd8e0ccf-5004-4b81-ba9b-b2344fb2418b",
                           "price":4.50,
                           "eligible":null,
                           "messages":[
                              
                           ]
                        }
                     ],
                     "credentials":null,
                     "available":32767,
                     "visible":true,
                     "selected":true,
                     "specialOffers":[
                        
                     ],
                     "standingPlace":false,
                     "seatToPay":false,
                     "disableSeatmapSelection":false,
                     "transportMeasure":null,
                     "description":"Il biglietto acquistato è già convalidato con la data e l'ora di partenza scelta dal cliente. I biglietti possono avere diverse validità in base alle disposizioni regionali. Cambio e rimborso sono ammessi salvo diverse disposizioni regionali.",
                     "saleable":true
                  }
               ],
               "subservicelist":null,
               "hasGift":false,
               "minprice":4.50
            }
         ],
         "gift":false,
         "trainidentifier":"Regionale Veloce 4313",
         "trainacronym":"RV",
         "departurestation":"Barletta",
         "departuretime":"2021-10-14T07:13:00.000+02:00",
         "arrivalstation":"Bari Centrale",
         "arrivaltime":"2021-10-14T07:54:00.000+02:00"
      }
   ],
   "extraInfo":[
      
   ]
}
```
# Angular
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
