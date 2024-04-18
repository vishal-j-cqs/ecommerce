import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item">
       <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-price"></div>
        <div className="item-price-new">
            Rs {props.new_price * 20}
        </div>
        <div className="item-price-old">
            Rs {props.old_price * 20}
        </div>
    </div>
  )
}

export default Item