

export class Soda{

  constructor(data){
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get selectionTemplate(){
    return `
  <div class="col-md-3">
      <img src="${this.imgUrl}" alt="soda" class="soda-img">
      <h3>${this.name} - $${this.price}</h3>
    </div>
    `
  }

}