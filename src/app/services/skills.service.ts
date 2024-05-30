import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private http: HttpClient) { }

  // Método para obter as skills
  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(environments.apiUrl)
  }

  // Método para atualizar as skills.
  // Aparentemente a lib não dispoe do método patch, portanto usei o put para atualizar todos os dados, modificando apenas o likes
  patchSkills(id: number, body: any): Observable<any> {
    return this.http.put(environments.apiUrl + id, body)
  }
}
