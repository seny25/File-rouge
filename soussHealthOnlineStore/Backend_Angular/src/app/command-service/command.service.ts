import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../models/command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  
  private baseURL = "http://localhost:8080/command";
  constructor(private httpClient: HttpClient) { }

getCommandList():Observable<Command[]>{

  return this.httpClient.get<Command[]>(`${this.baseURL}`);
}

createCommand(command:Command): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, command);
}

getCommandById(command_id: number): Observable<Command>{
  return this.httpClient.get<Command>(`${this.baseURL}/${command_id}`);
}

updateCommand(command_id:number, command: Command): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${command_id}`,command);
}

deleteCommand(command_id: number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${command_id}`);

}
}
