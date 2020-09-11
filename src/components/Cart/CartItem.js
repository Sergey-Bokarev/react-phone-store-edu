import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="" style={{ width: '5rem', height: '5rem' }} className="img-fluid"/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> { title }
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span> $ { price }
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id) }>-</span>
            <span className="btn btn-black mx-1">{ count }</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id) }>+</span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <FontAwesomeIcon className="cart-icon" icon={faTrash} onClick={ () => removeItem(id) } />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : </strong> $ { total }
      </div>
    </div>
  )
}
