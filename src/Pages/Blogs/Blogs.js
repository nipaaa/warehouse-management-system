import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center text-warning pb-5'>Some Question Answers...</h2>
            <Accordion>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}></Blog>)
            }
            </Accordion>
        </div>
    );
};

export default Blogs;