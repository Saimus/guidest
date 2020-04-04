import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function App() {
    return (
    <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
        <Link to="/page">Clique para página 2</Link>
    </Jumbotron>
    )
}