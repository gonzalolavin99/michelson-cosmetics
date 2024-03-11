import React from 'react'
import Button from 'react-bootstrap/Button';
import { useTicket } from '../context/TicketContext';


const BuyButton = () => {
const {handleCompra} =useTicket(); // Obtener handleCompra del contexto

  return (
    <div>
    <div>
      <Button className='btn-pink' onClick={handleCompra}>
        <div>
          Comprar!
        </div>
      </Button>
    </div>
  </div>
  )
  
}

export default BuyButton