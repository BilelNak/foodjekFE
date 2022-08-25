import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Livreurs } from '../livreurs';
import { LivreursService } from '../livreurs.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  livreurForm: Livreurs = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    lattitude: '',
    longitude: '',
  };
  constructor(private route: ActivatedRoute,
    private livreursService:LivreursService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.livreursService.getById(id).subscribe((data) => {
      this.livreurForm = data;
    });
  }

  update() {
    this.livreursService.update(this.livreurForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/livreurs/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

