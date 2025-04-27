import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import '../App.css';

export default function Card({ product }) {
  const { name, img, description } = product;
  const dispatch = useDispatch();

  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{description}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}