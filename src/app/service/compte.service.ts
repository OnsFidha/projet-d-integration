import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage-service.service';
import { Compte } from '../models/compte';

const  URL="http://localhost:3000/rh/";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient,private token:TokenStorageService) {}

  getById(id:any){
    return this.http.get<Compte>(URL+"/"+ id);
    }

    updateRh(id:any){
      return this.http.put<Compte>(URL+'/'+id,Compte);
      }  
}
