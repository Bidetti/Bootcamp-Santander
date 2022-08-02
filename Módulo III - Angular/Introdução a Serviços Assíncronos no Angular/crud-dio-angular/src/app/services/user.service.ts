import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://sheet.best/api/sheets/9f3877e4-4a86-4b2e-bf9d-603e7e1d57b4";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  //CRUD
  //Retorna a lista de usuarios READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva usuario
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  // Excluir usuario
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //Edita usuario
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //Lista usuario
  getUser(id:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
