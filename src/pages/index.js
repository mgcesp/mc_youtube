/* eslint-disable @next/next/no-img-element */
import React from "react"
import {
    Button,
    Navbar,
    Stack,
    Container,
    Form,
    Row,
    Col,
    Card,
    Modal
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://www.dropbox.com/s/g3w3ng90j96fu1r/yt_logo_rgb_light.png?raw=1"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Youtube Logo"
                        />
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="secondary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={3} style={{ margin: '16px 0 32px' }}>
                            <Button variant="dark">All</Button>
                            <Button variant="light">UEFA Champions League</Button>
                            <Button variant="light">Sports</Button>
                            <Button variant="light">Live</Button>
                            <Button variant="light">Music</Button>
                            <Button variant="light">News</Button>
                            <Button variant="light">Gaming</Button>
                            <Button variant="light">Bossa Nova</Button>
                            <Button variant="light">Wealth</Button>
                            <Button variant="light">Background Music</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Stack direction="vertical" gap={3}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://www.dropbox.com/s/4yndtj5aea5u9dq/video-placeholder.jpg?raw=1" />
                                <Card.Body>
                                    <Card.Title>Video Title</Card.Title>
                                    <Card.Text>Channel Name</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </>
    )
}
