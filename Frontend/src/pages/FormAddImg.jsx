import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
function FormAddImagen({onSubmit, foto, onCancel}) {
    const [title, steTitle] = useState("Agregar Imagen")
    const [titulo, setTitulo] = useState('')
    const [linkImg, setLinkImg] = useState('')
    const [descripcion, setDescripcion] = useState('')

    useEffect(
        () => {
            if(foto){
                setTitulo(foto.nombre)
                setLinkImg(foto.imagen)
                setDescripcion(foto.descripcion)
            }

            console.log(foto)
        }, [foto]
    )

    const handleSubmit = (e) => {
        e.preventDefault()

        if (titulo.trim() === '' || linkImg.trim() === '' || descripcion.trim() === ''){
            console.log("Relllene los campos")
        }else {
            console.log("perfecto")
        }

        const data = {
            nombre : titulo,
            imagen : linkImg,
            descripcion : descripcion
        }

        setTitulo('')
        setLinkImg('')
        setDescripcion('')
        onSubmit(foto? foto.id : null, data)
    }


    const handleFormCancel = () => {
        setTitulo('')
        setLinkImg('')
        setDescripcion('')
        onCancel()
    }


    return (
        <Col md={6} className='text-center'>
            <Form onSubmit={handleSubmit}>
                <h2 className='mt-3'>{foto? "Editar Imagen" : "Agregar Imagen"}</h2>
                <Form.Group controlId='formName' className='mb-3'>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type='text' 
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder='titulo'/>
                </Form.Group>
                <Form.Group controlId='formName' className='mb-3'>
                    <Form.Label>Link de Imagen</Form.Label>
                    <Form.Control type='text' 
                    value={linkImg}
                    onChange={(e) => setLinkImg(e.target.value)}
                    placeholder='imagen'/>
                </Form.Group>
                <Form.Group controlId='formName' className='mb-3'>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                    as="textarea"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder='descripcion'/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Button variant='success' type='submit' style={{marginRight: "20px"}}>
                        {foto? "Actualizar" : "Agregar"}
                    </Button>
                    <Button variant='danger' type='submit'>
                        Cancelar
                    </Button>
                </Form.Group>
            </Form>
        </Col>
    )
}

export default FormAddImagen