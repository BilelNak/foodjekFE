import { Component, OnInit } from '@angular/core';
import { Livreurs } from '../livreurs';
import { LivreursService } from '../livreurs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allLivreurs: Livreurs[] = [];
  constructor(private livreursService: LivreursService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.livreursService.get().subscribe((data) => {
      this.allLivreurs = data;
    });
  }

}


