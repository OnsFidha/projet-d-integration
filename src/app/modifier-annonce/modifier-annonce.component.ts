import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-modifier-annonce',
  templateUrl: './modifier-annonce.component.html',
  styleUrls: ['./modifier-annonce.component.css']
})
export class ModifierAnnonceComponent implements OnInit {
  annonce= new Annonce();
  constructor(private activatedRoute:ActivatedRoute,private serAnnon:AnnonceService) { }
  variable=this.activatedRoute.snapshot.params['idf'];
  ngOnInit(): void {
    console.log(this.variable);
    console.log(this.annonce);
    
    this.serAnnon.getAnnonceById(this.variable).subscribe(data=>this.annonce=data)
  
    console.log(this.annonce);
  }

}
