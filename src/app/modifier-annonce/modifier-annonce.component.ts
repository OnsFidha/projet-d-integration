import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-modifier-annonce',
  templateUrl: './modifier-annonce.component.html',
  styleUrls: ['./modifier-annonce.component.css']
})
export class ModifierAnnonceComponent implements OnInit {
  annonce:any
  ngForm:FormGroup
  constructor(private activatedRoute:ActivatedRoute,private serAnnon:AnnonceService
    ,private f:FormBuilder) { }
  variable=this.activatedRoute.snapshot.params['idf'];
  ngOnInit(): void {
    this.ngForm=this.f.group({
      titre:[''],
      poste:[''],
      type_emploi:[''],
      mots_cles:[''],
      niveau:[''],
      langue:[''],
      description:[''],
      experience:[''],
      date:['']
    })
  
  this.get()
    console.log(this.annonce,"1");
    
  
  
  }
get(){
  this.serAnnon.getAnnonceById(this.variable).subscribe(data=>{
    console.log(data,"data");
    this.annonce=data
    console.log(this.annonce,"2");
    
    this.ngForm=this.annonce;
  });
}
}
