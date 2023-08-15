
import React from 'react';
import blogData from '../data/blogData.json';
import Cart from '../component/cart/Post';

const Blog = () => {
    return (
        <>
            <div className='flex justify-center mt-16'>
                <h1 className='text-6xl font-bold'>Blog List</h1>
            </div>
            <div className='container mx-auto'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-6'>
                    {
                        blogData.map(post => (<Cart key={post.id} post={post}/>))
                    }
                </div>
            </div>
        </>
    );
};

export default Blog;
