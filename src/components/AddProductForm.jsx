import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProductForm({products, setProducts}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newCard = {
            title,
            description,
            image,
            price
        }
        setProducts([...products, newCard]);
        setTitle("");
        setDescription('');
        setImage('');
        setPrice("");
       
    }

    const goAboutPage = () => {
      navigate('/about',{state:{name:title}});
    }

    const goContactPage = () => {
      navigate('/contact', {state:{name:description}});
    }
  return (
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" value={description}  onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
    <input type="text" value={image}  onChange={(e) => setImage(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="text" value={price}  onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" onClick={onSubmitHandler} className="me-2 rounded-full">Submit</button>
  <button type="submit" onClick={goAboutPage}   className="me-2 rounded-full">About</button>
  <button type="submit" onClick={goContactPage}  className="me-2 rounded-full">Contact</button>

</form>
  )
}

export default AddProductForm
