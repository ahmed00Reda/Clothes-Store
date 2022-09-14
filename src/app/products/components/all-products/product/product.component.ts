import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() item: any

  constructor(private router:Router) {

  }

  ngOnInit(): void {

  }

  ayHaga(id:number){

    this.router.navigate(['/product', id])
  }


}
