import {Component, Input, OnInit} from '@angular/core';
import {Categorie, RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-plat-edit',
  templateUrl: './plat-edit.component.html',
  styleUrls: ['./plat-edit.component.scss'],
})
export class PlatEditComponent implements OnInit {

  @Input() plat = {
    libelle: '',
    ingredients: '',
    categorie: {
      id: null,
    },
    allergene: '',
    regime: '',
    image: ''
  };

  categories: Categorie[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getPlat(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.plat = data;
      }
    );
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      }
    );
  }
  editPlat(): void {
    console.log(this.plat);
    this.rest.updatePlat(this.plat).subscribe(
      (result) => {
        this.router.navigate(['/plats-admin']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
