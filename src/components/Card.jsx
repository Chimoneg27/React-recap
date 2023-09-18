import React from 'react'
import { useState } from 'react'
function Card({product}) {
  const [title, setTitle] = useState(product.title);
  const [showPrice, setShowPrice] = useState('Hide Price');
  const [productPrice, setProductPrice] = useState(product.price);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [items, setItems] = useState([{name:'',id:1}]);
  const [titleColor, setTitleColor] = useState(true);

  const hidePrice = (e) => {
    e.preventDefault();
    setShowPrice(showPrice === 'Show Price' ? 'Hide Price' : 'Show Price');
    setProductPrice(showPrice === 'Show Price' ? product.price : '');
  };

  const changeTitle = (event) => {
    setInput(event.target.value)
    setTitle(event.target.value)
  }

  const addUserName = () => {

    setItems([...items, {name:userName}])
    setUserName('')
    setInput('')
  }

  const changeTitleColor = () => {
      setTitleColor(!titleColor)    
  }
  

  return (
    <div className="card py-4" style={{width: "18rem"}}>
    <img src={product.image} className="card-img-top w-full" alt="..."></img>
    <div className="card-body">
      <h5 className={`card-title text-truncate ${titleColor ? "text-primary" : "text-danger"} `}>{title}</h5>
      <p className="card-text">{product.description}</p>
      <div className="d-flex justify-content-between">
      <a href="#" className="btn btn-primary" onClick={hidePrice} >{showPrice}</a>
      <span className='btn text-end'>{productPrice}</span>
      </div>
      <input type="text" onChange={changeTitle} value={input} placeholder='Change Title' className='form-control my-3' />
      <input type="text" className='form-control' value={userName} onChange={(e) => {setUserName(e.target.value)}}  placeholder=' Your Name' />
        <button className='btn btn-primary my-3 ' onClick={addUserName}>Add Name</button>
      <button className='btn btn-primary' onClick={changeTitleColor} >Change Title Color</button>
   
  
      {items.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  </div>
  )
}

export default Card
