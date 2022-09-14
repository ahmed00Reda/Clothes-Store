import { ProductsService } from './../../services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  id!:any
  data: any = {}
  @Output() item = new EventEmitter()
  constructor(private route:ActivatedRoute, private service:ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  add(){
    this.item.emit(this.data)
  }

  getProduct(){
    this.service.getProductById(this.id).subscribe(res => {
      this.data = res
    })
  }


}

