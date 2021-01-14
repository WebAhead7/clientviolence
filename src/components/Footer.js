import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter color='blue'>
      <div className='footer-copyright text-center py-3 my-0'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href='https://www.icelp.info/'> The Feuerstein Institute </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
