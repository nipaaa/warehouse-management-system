import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
              <Spinner animation="border" />
        </div>
    );
};

export default Loading;