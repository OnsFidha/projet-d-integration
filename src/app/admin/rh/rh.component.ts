import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/service/compte.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RHComponent implements OnInit {

  rh: any;

  constructor(private token:TokenStorageService,private compte:CompteService) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.compte.getById(this.rh).subscribe(data => {
      this.rh = data;
    });

  }

   updateRh(): void{
    this.compte.updateRh(id).subscribe(data=>{
      this.getById();
});

   }
  
  }
