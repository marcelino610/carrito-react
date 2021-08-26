import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CartForm({ total, buy }) {
    const [emptyFields, setEmptyFields] = useState(false)

    function emptyField() {
        let value = true

        if (document.getElementById('name').value === '' || document.getElementById('phone').value === '' || document.getElementById('mail').value === '') {
            value = true
        } else {
            value = false
        }
        return value
    }

    function changeState(ev) {
        ev.preventDefault()
        setEmptyFields(true)
    }

    return (
        <Form onSubmit={(ev) => emptyField() ? changeState(ev) : buy(ev, total)}>
            <Form.Group className='mb-3'>
                <Form.Label>
                    Nombre
                </Form.Label>
                <Form.Control type='text' placehholder='Nombre' id='name' autocomplete='off' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>
                    Número de contacto
                </Form.Label>
                <Form.Control type='text' placehholder='Número de contacto' id='phone' autocomplete='off' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>
                    Correo de contacto
                </Form.Label>
                <Form.Control type='mail' placehholder='Correo de contacto' id='mail' autocomplete='off' />
                <Form.Text className={emptyFields ? 'red' : 'invisible'}>
                    <i>Todos los campos deben ser completados</i>
                </Form.Text>
            </Form.Group>
            <Button variant='success' type='submit'>
                Finalizar
            </Button>

        </Form>
    )
}

export default CartForm;