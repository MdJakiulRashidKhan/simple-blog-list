import Link from 'next/link';
import React from 'react';
import blogData from '../../data/blogData.json';
import Image from 'next/image';

const Post = ({ params }) => {
    const ID = params.slug;
    const postDetails = blogData.find(item => item.id === parseInt(ID));

    return (
        <div>
            <div className='flex justify-center mt-8 md:mt-16'>
                <h1 className='text-3xl md:text-4xl'>{postDetails.title}</h1>
            </div>
            <div className="container mx-auto mt-8 mb-12 flex justify-around">
                <Image
                    width={500}
                    height={500}
                    src={postDetails.img}
                    alt={postDetails.title}
                    className="rounded-lg"
                />
            </div>
            <div className='container mx-auto text-center'>
                <p className="text-gray-500">Date: <span className="text-gray-700">{postDetails.date}</span></p>
                <p className="mt-4">{postDetails.content}</p>
                <div className="mt-8">
                    <button className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                        <Link href="/blog">Go to Blog</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
