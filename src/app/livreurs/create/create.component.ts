import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreurs } from '../livreurs';
import { LivreursService } from '../livreurs.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  livreurForm: Livreurs = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    lattitude: '',
    longitude: '',
  };
  constructor(private livreursService:LivreursService,
    private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.livreursService.create(this.livreurForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/livreurs/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}


