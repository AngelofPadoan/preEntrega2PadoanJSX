import React from 'react';
import { useParams, useLocation } from "react-router-dom";

function DetalleItem() {
    const { id } = useParams();
    const location = useLocation();
    const remeras = location.state ? location.state.remeras : null;

    const itemSeleccionado = remeras ? remeras.find((remera) => remera.id === Number(id)) : null;

    if (!remeras) {
        return (
            <div>
                <h1>Producto no encontrado</h1>
            </div>
        );
    }

    if (!itemSeleccionado) {
        return (
            <div>
                <h1>Producto no encontrado</h1>
            </div>
        );
    }
    return (
        <>
            <h1>Detalle del Producto</h1>
            <div className='detalladoProduc'>
                <img className='imagenn' src={itemSeleccionado.imagen} alt={itemSeleccionado.nombre} />
                <h2>{itemSeleccionado.nombre}</h2>
                <p className='detallito'><strong>DESCRIPCION:</strong> {itemSeleccionado.detalle}</p>
                <p className='presio'>Precio: {itemSeleccionado.precio} $</p>
            </div>
        </>
    );
}
<h1>Detalles del Producto</h1>
export default DetalleItem;


