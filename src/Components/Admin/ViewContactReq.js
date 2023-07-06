import React from 'react';
import useGetData from './useGetData';
import { db } from '../../Firebase/Config';
import { doc, deleteDoc } from 'firebase/firestore';
import { Col, Container, Row } from 'reactstrap';

const ViewContactReq = () => {
  const { data: productData, loading } = useGetData('ContactRequest');

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'ContactRequest', id));
  };

  return (
    <section>
      <Container style={{color:'white',backgroundColor:'#1a1a1a'}}>
        <Row>
          <h2 className='text-center p-5'>Contact Requests</h2>
          <Col >
            <div className="table-responsive">
              <table className="table text-white">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Budget</th>
                    <th>For Time</th>
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
                        <td>{item.city}</td>
                        <td>{item.budget}</td>
                        <td>{item.TimeRange}</td>
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

export default ViewContactReq;
