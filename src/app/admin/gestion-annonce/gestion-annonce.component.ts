import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/service/annonce.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-gestion-annonce',
  templateUrl: './gestion-annonce.component.html',
  styleUrls: ['./gestion-annonce.component.css']
})
export class GestionAnnonceComponent implements OnInit {

  annonces: Annonce[];
  constructor(private token:TokenStorageService,private ser:AnnonceService) { }
  ngOnInit(): void {
    this.getAnnonce();
    console.log(this.annonces)

  }
  getAnnonce(){
    this.ser.getAnnonces().subscribe(data=>this.annonces=data)
 };
}
