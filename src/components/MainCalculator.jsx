import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';

const MainCalculator=(props)=>{
    const [widthResult,setWidthResult]=useState('')
    const [lengthResult,setLengthResult]=useState('')
    
    useEffect(()=>{
        setWidthResult('')
        setLengthResult('')
    },[])
    function resultWidht(num){
        setWidthResult((num-6.5)/2)
    }
    function resultLength(num){
        setLengthResult(num-1.75)
    }
    return (

        <div >
            <div>
                <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Calculator
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <div className='d-flex flex-column'>
                                <Form.Label >Enter Width</Form.Label>
                                <Form.Control onChange={(e)=>{
                                    resultWidht(e.target.value)}} style={{width:'100px'}} type="string" placeholder="Enter widht" />
                                <div >
                                    <div className='d-flex flex-row gap-3'>
                                        <h3 style={{fontWeight:'400'}}>Frame:</h3>
                                        <h3 style={{fontWeight:'450'}} >{widthResult}</h3>
                                    </div>
                                    <div className='d-flex flex-row gap-3'>
                                        <h3 style={{fontWeight:'400'}}>Glass:</h3>
                                        <h3 style={{fontWeight:'450'}} >{widthResult+0.5}</h3>
                                </div>
                            </div>
                            </div>
                            <div>
                                <Form.Label>Enter Height</Form.Label>
                                <Form.Control onChange={(e)=>{
                                    resultLength(e.target.value)}} style={{width:'100px'}}  
                                    type="string" placeholder="Enter height" />
                                <div >
                                    <div className='d-flex flex-row gap-3'>
                                        <h3 style={{fontWeight:'400'}}>Frame:</h3>
                                        <h3 style={{fontWeight:'450'}} >{lengthResult}</h3>
                                    </div>
                                    <div className='d-flex flex-row gap-3'>
                                        <h3 style={{fontWeight:'400'}}>Glass:</h3>
                                        <h3 style={{fontWeight:'450'}} >{lengthResult-2}</h3>
                                    </div>
                            </div>
                            </div>
                        </div>
                       
                       
                        <Button className='mt-3' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default MainCalculator;