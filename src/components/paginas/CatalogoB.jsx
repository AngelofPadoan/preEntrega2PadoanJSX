import React, {useState} from "react";
import DetalleItem from "./DetalleComprita";
import { useNavigate } from "react-router-dom";
import remeras from "../componentes/Item";
import { useCart, cartActions } from "../componentes/CartContext";

function CatalogoB () {
    const [remeraSeleccionada, setRemeraSeleccionada] = useState(null);
    const navigate = useNavigate();
    const { cartState, dispatch } = useCart();

    const handleClickVerDetalles = (remera) => {
        setRemeraSeleccionada(remera);
        navigate(`/Item/${remera.id}`,  { state: { remeras } });
    };

    const addToCart = (remera) => {
        const itemInCart = cartState.cartItems.find((item) => item.id === remera.id);

        if (itemInCart) {
            dispatch({ type: cartActions.INCREASE_QUANTITY, payload: remera.id });
        } else {
            dispatch({ type: cartActions.ADD_TO_CART, payload: remera });
        }
        dispatch({ type: cartActions.TOGGLE_CART });
    };

    return(
        <>
            <h1>PaperShop Catalogo</h1>
            <div className="productosContainer">
                <ul className="productos">
                    {remeras.map((remera) => (
                        <li className="producto" key={remera.id}>
                            <img className="imagencita" src={remera.imagen} alt="" />
                            <p className="name">{remera.nombre}</p>
                            <p className="precio">Precio: {remera.precio} $</p>
                            <div className="botoness">
                                <button className="buttoncito" onClick={() => handleClickVerDetalles(remera)}
                                title={`Ver detalles de la zapatilla ${remera.nombre}`}>
                                    Ver detalles
                                </button>
                                <button className="btn" onClick={() => addToCart(remera)}>
                                    Añadir al carrito
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                {remeraSeleccionada && (
                    <DetalleItem producto={remeraSeleccionada} />
                )}
            </div>
        </>
    );
}

export default CatalogoB;


