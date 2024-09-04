import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Categorie {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
url = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) { }
  getCategories() :Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url);
  }
}
