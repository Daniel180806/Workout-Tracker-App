import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  private url = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
  constructor(private http: HttpClient) { }

  /*private getHeaders() {
    return new HttpHeaders({
      'X-RapidAPI-Key': 'd9fa0fef11msh73ccbdb40fde3efp1f1480jsn93a38c9b0502',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    });
  }

  getExercises():Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(this.url, { headers });
  }*/

  getExercises(): Observable<any> {
    return this.http.get(this.url);
  }
}
