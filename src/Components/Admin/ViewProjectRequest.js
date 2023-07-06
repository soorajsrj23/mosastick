import React from 'react';
import useGetData from './useGetData';
import { db } from '../../Firebase/Config';
import { doc, deleteDoc } from 'firebase/firestore';
import { Col, Container, Row } from 'reactstrap';

const ViewProjectRequest = () => {
  const { data: productData, loading } = useGetData('Request');

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'Request', id));
  };

  return (
    <section>
      <Container style={{color:'white',backgroundColor:'#1a1a1a'}}>
        <Row>
          <h2 className='text-center p-5'>Project Requests</h2>
          <Col >
            <div className="table-responsive">
              <table className="table text-white">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center fw-bold">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    productData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.WritedOn}</td>
                        <td>{item.clientName}</td>
                        <td>{item.email}</td>
                        <td>{item.subject}</td>
                        <td>{item.description}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteProduct(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewProjectRequest;
