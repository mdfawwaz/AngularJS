import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CycleService {
  constructor(private _http:HttpClient)
{}
getCycles()
{
  return this._http.get('http://localhost:8080/api/cycle/list');
}

// getBorrowedCycles()
// {
//   return this._http.get('http://localhost:8080/api/cycles/borrowed')
// }
}

 