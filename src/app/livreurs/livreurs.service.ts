import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreurs } from './livreurs';
@Injectable({
  providedIn: 'root'
})
export class LivreursService {

  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Livreurs[]>('http://localhost:8080/livreur');
  }

  getById(id: number) {
    return this.http.get<Livreurs>(`http://localhost:8080/livreur/${id}`);
   }

  create(l: Livreurs) {
    return this.http.post<Livreurs>('http://localhost:8080/livreur', l);
  }

  update(l: Livreurs) {
    return this.http.put<Livreurs>('http://localhost:8080/livreur', l);
  }


}
