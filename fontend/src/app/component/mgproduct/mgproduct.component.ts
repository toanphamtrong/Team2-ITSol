import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddproductService } from '../../services/addproduct.service';

@Component({
  selector: 'app-mgproduct',
  templateUrl: './mgproduct.component.html',
  styleUrls: ['./mgproduct.component.scss']
})
export class MgproductComponent implements OnInit {
  public productsList: any;


  constructor(
    private productservice: AddproductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.LoadProduct();
  }

  public LoadProduct(): void{
    this.productservice.getAllProducct().subscribe(
      data =>{
        console.log(data);
        this.productsList= data;
        
        
      },
      err =>console.log(err)
      )
  }

  public addProduct(){
    this.router.navigate(['products-form']);
  }

}
