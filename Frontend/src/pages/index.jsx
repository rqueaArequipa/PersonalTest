import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FormAddImagen from './FormAddImg';
function Index() {

    const url = "http://127.0.0.1:8000/api/photos/"
    const [fotos, setFotos] = useState([])
    const [fotoSeleccionado, setFotoSeleccionado] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseFotos = await axios.get(url)
                setFotos(responseFotos.data)
                console.log(responseFotos.data)
            } catch (error) {
                console.log("Ocurrio un error", error.message)
            }
        }
        fetchData()
    }, [fotoSeleccionado])

    const deleteImg = (idImg) => {
        const rpt = window.confirm('Desea eliminar la imagen?')
        if(rpt){
            axios.delete(url + idImg + '/')
            .then((response) => {
                var temp = fotos.filter((foto) => foto.id !== idImg)
                setFotos(temp)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    const editImg = (idImg) => {
        const foto = fotos.find(foto => foto.id === idImg)
        setFotoSeleccionado(foto)
        console.log(fotoSeleccionado)
    }

    const addEditImg = (idImg, data) => {
        if (idImg) {
            axios.put(url + idImg + "/", data)
            .then((response) => {
                const fotoIndex = fotos.findIndex((foto) =>foto.id === idImg)
                const UpdateFotos = [...fotos]
                UpdateFotos[fotoIndex] = response.data
                setFotos(UpdateFotos)
                setFotoSeleccionado(null)
            })
        } else {
            axios.post(url, data)
                .then((response) => {
                    setFotos([...fotos, response.data])
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <Container>
            <h1 className="text-center my-4">Álbum de Fotos</h1>
            <Row>
                {fotos.map((foto, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <div className="image-container">
                                <Card.Img variant="top" src={foto.imagen} alt={foto.descripcion} className="card-image" />
                            </div>
                            <Card.Body>
                                <Card.Title>{foto.nombre}</Card.Title>
                                <Card.Text>{foto.descripcion}</Card.Text>
                                <div className='text-center'>
                                    <Button variant='primary' type='submit' onClick={() => editImg(foto.id)} style={{marginRight:"20px"}}>
                                        Actualizar
                                    </Button>
                                    <Button variant='danger' type='submit' onClick={() => deleteImg(foto.id)}>
                                        Eliminar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
                <FormAddImagen 
                foto={fotoSeleccionado}
                onSubmit={addEditImg}
                onCancel={() => setFotoSeleccionado(null)} />
            </Row>
        </Container>
    );
}

export default Index