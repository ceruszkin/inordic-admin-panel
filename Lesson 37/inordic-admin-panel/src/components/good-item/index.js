import React from "react";
import "./index.css"
import { Link } from "react-router-dom";

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
    this.state = {
      currentForDel: false
    }
  }

  setCurrent(operation){
    console.log(operation)
    if(operation == '+'){
      this.setState({
        currentForDel: true
        })
    }else{
      this.setState({
        currentForDel: false
        })
    }
      
    }
  }

  render(){
    const {data, delGood, goodListContext} = this.props

  const currentClassName = "card" + this.state.currentForDel ? "del" : null
    console.log(data)
    return(
        <div className={currentClassName}>
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
            <div className='card__button-block'>
              <button onClick={ () => delGood (data.ID, goodListContext)} className="card__del-button link">Delete</button>
              <Link to={`/goods/${data.ID}`}>
                  Редактировать
              </Link>
            </div>
            <div className='card__del-block'>
              <button onClick={() => setCurrent("+")}>+</button>
              <button onClick={() => setCurrent("-")}>-</button>
            </div>
        </div>
    )
  }

export default GoodItem