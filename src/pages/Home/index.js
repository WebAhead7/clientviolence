import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import './style.css'
const Home = () => {
  return (
    <>
      <Accordion defaultActiveKey='0'>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              Test 1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 1 dummy text-- of the printing-12/01/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              Test 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              Test 2 dummy text-- of the printing-12/01/20
              <Button className='float-right' variant='success'>
                Start Test
              </Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='3'>
              Test 3
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='3'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 3 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='4'>
              Test 4
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='4'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 4 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>{' '}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='5'>
              Test 5
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='5'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 5 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>{' '}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='6'>
              Test 6
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='6'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 6 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='7'>
              Test 7
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='7'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 7 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>{' '}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='8'>
              Test 8
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='8'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 8 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>{' '}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='9'>
              Test 9
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='9'>
            <Card.Body className='d-flex align-items-center justify-content-between '>
              <h5>Test 9 dummy text-- of the printing-12/02/20</h5>
              <Button variant='success'>Start Test</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default Home
