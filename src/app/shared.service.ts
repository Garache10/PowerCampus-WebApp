import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl="https://localhost:44347/api";

  constructor(private http:HttpClient) { }

  getUsersList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/User')
  }

  addUser(val:any){
    return this.http.post(this.APIurl+'/User',val)
  }

  updateUser(val:any){
    return this.http.put(this.APIurl+'/User',val)
  }

  deleteUser(val:any){
    return this.http.delete(this.APIurl+'/User/'+val)
  }
}
