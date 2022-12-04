import React from "react";
import "./index.css"

/*
GoodItem -- компонент карточки товара.
*props:
* "ID": "e646b5f2-9c3e-4861-b1ea-eab4c4549b9d",
* "TITLE": "Куртка",
* "DISCR": "Куртка из натуральной кожи",
* "PRICE": "1200000",
* "IMG": "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/3~IAAOSwHqxbWwNV/$_57.JPG",
* "COUNT": "232"
*/

class GoodItem extends React.Component{
  constructor(){
    super()
  }
  render(){
    const {data} = this.props
    console.log(data)
    return(
      <div className="card">
          Карточка товара
          <img className="card__img" src={data.IMG} alt="good" />
          <h2 className="card__title">
            {data.TITLE}
          </h2>
          <p className = "card__discr">
            {data.DISCR}
          </p>
          <p className = "card__price">
            {data.PRICE} руб.
          </p>
      </div>
    )
  }
}

export default GoodItem