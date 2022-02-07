import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit(props) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        FullName: '',
        Designation: '',
        Salary: '',
        Age: ''
    });
    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.showEditForm)
    }, [props.showEditForm])
    
    useEffect(() => {
        setForm(props.selectedDetails)
    }, [props.selectedDetails])

    // const handleChange = (event) => {
    //     const FormdetailsCopy= { ...Formdetails }
    //     FormdetailsCopy[event.target.name] = event.target.value
    //     setForm(FormdetailsCopy)
    // }

    // const editForm = async () => {
    //     let url = ''
    //     const editUrl = ``
    //     try {
    //         if (props.modalType === 'edit') {
    //             url = editUrl
    //             const response = await.put(url,Formdetails)
    //             console.log(response.data);
    //             if (response.data.error === false) {
    //                 handleClose()
    //                 props.fetchFormdetails()
    //             } else {
    //                 alert(response.data.message)
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
  return <div> 
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='header'>
          {/* closeButton */}
            <Modal.Title >Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><div>
          <div className="row">
            <div className="col">
                 <p>Full Name</p>
                 <input type="text" name="fullname"
                //  value={Formdetails.fullname}
                //                     onChange={(event) => { handleChange(event) }}
                //                     className="form-control" 
                placeholder="test"
                 />
            </div>
            </div>
            <div className="col">
                <p>Designation</p>
                 <input type="text" name="designation"
                //  value={Formdetails.designation}
                //         onChange={(event) => { handleChange(event) }}
                //                     className="form-control" 
                placeholder="qwerty"
                 />
             </div>
            <div className="col">
                <p>Salary</p>
                 <input type="text"  name="salary"
                    //   value={Formdetails.salary}
                    //      onChange={(event) => { handleChange(event) }}
                    //                 className="form-control" 
                    placeholder="12345"
                 />
            </div>
            <div className="col">
                <p>Age</p>
                <input type="number" name="age"
                    //  value={Formdetails.age}
                    //      onChange={(event) => { handleChange(event) }}
                    //                 className="form-control"
                     placeholder="20"
                />
            </div>
           </div>
        
        </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
            {/* <Button variant="primary" onClick={editForm}>
                        {props.modalType === 'edit' ? 'Update Changes' : 'Add'}
                    </Button> */}
          </Modal.Footer>
        </Modal>
      </>

</div>;
}

export default Edit;