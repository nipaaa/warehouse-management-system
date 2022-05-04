import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = (props) => {
    const {id,Question,Ans} = props.blog;
    return (
        <div>
            <Accordion.Item eventKey={id}>
    <Accordion.Header>{Question}</Accordion.Header>
    <Accordion.Body>
                {Ans}
    </Accordion.Body>
  </Accordion.Item>
        </div>
    );
};

export default Blog;