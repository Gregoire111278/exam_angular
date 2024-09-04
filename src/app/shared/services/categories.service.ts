import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  getCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }


}
