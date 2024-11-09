import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function ModalPickLocation(props) {
    const { show, setShow } = props;
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const apiKey = 'AIzaSyDtk7qet6fKjvoVOoWp-2UyL5OJCHRQ1X4';
        const endpoint = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=f4615ca71ae324702:omuauf_lfve&q=${query}`;
        try {
            const response = await axios.get(endpoint);
            setResults(response.data.predictions);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }


    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
    }


    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
            backdrop='static'
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                        <div>
                            <form onSubmit={handleSearch}>
                                <input type="text" placeholder="Search for a location" value={query} onChange={(e) => setQuery(e.target.value)} />
                                <button type="submit">Search</button>
                            </form>
                            <ul>
                                {results.map((result, index) => (<li key={index}>{result.description}</li>))}
                            </ul>
                        </div>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ModalPickLocation