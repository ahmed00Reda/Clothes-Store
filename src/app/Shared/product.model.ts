export class Product {
  constructor(
    public id : number,
    public title :string ,
    public price : number,
    public description: string,
    public image: string,
    public isAddedToCart:boolean=false,
    public quantity : number =1 ,
    public color? :string ,
    public size? :string ,

  ){}




}
