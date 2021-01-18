import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
const TestAccordination = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='0'>
            Test 1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='d-flex align-items-center justify-content-between '>
            Test 1 dummy text-- of the printing<p>20/20/2020</p>
            <Button variant='success'>Start Test</Button>{' '}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default TestAccordination
