import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddproductService } from 'src/app/services/addproduct.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public id= 0;
  public productsForm = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    priceSale: new FormControl(''),
    sale: new FormControl(''),
    title:new FormControl('')
  });

  constructor(
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private addProduct: AddproductService
              ) { }

  ngOnInit(): void {

  }

  public onSubmit(){
    console.log('onSubmit');
    const newProduct = {};
    for(const controlName in this.productsForm.controls){
      if(controlName){
        newProduct[controlName] = this.productsForm.controls[controlName].value;
      }
    }
    console.log(newProduct);
    this.addProduct.addProduct(newProduct).subscribe((data) =>{
      this.router.navigate(['mgproduct']);
    });
  }

  public addPro(): void{
    this.addProduct.addProduct(this.productsForm).subscribe(
      data=>{
        this.router.navigate(['mgproduct']);
      },(err : any)=>{
        console.log(err)
      }
    )
  }

}
