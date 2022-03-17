import React, { useRef, useState, useEffect } from "react";
import {
  Form,
  Button,
  
  Table,
} from "react-bootstrap";
import "./AddDoctorSchedule.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth"
// Every doctor add their schedule
function AddDoctorSchedule() {
  const serviceNameRef = useRef();
  const serviceChargeRef = useRef();
  const FromRef = useRef();
  const ToRef = useRef();
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const User = user.email;
  console.log(services);
  useEffect(() => {
    fetch("http://localhost:5000/addService")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  // handle add service
  const handleAddService = (e) => {
    const serviceName = serviceNameRef.current.value;
    const serviceCharge = serviceChargeRef.current.value;
    const From = FromRef.current.value;
    const To = ToRef.current.value;
    console.log(From)
    const newUser = { serviceName, User, From, To, serviceCharge};
    console.log(newUser);
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the Service.");
          e.target.reset();
        }
      });
  
  };

 
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = services.filter(
              (order) => order._id !== id
            );
            setServices(remainingOrders);
          }
        });
    }
    
  };

  return (
    <div>
      <div>
        <h2>Add a new Schedule</h2>
      </div>
      <Form onSubmit={handleAddService} className="addServiceForm">
        <Form.Group className="mb-3 pb-4" controlId="formBasicEmail">
          <Form.Label> Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={serviceNameRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Time Duration</Form.Label>
 
          <Form.Control type="time" format="HH:mm" required ref={FromRef} />
          <Form.Control type="time" format="HH:mm" required ref={ToRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="price"
            ref={serviceChargeRef}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Doctor Email</th>
            <th>From </th>
            <th>To </th>
            <th> Charge</th>
            <th>Delete Services</th>
          </tr>
        </thead>
         <tbody>
          {services &&
            services.map((item, i) => (
              <tr>
                <td>{item.serviceName}</td>
                <td>{item.User}</td>
                <td>{item.From}</td>
                <td>{item.To}</td>
                <td>{item.serviceCharge}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(item._id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody> 
      </Table>
    </div>
  );
}

export default AddDoctorSchedule;