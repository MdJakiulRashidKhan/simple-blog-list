import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cart = ({post}) => {
    return (
    <div className="card w-96 bg-base-100 shadow-xl mb-3 mt-3">
        <figure><Image width={600} height={600} src={post.img} alt={post.title} /></figure>
        <div className="card-body">
           <Link href={`/blog/${post.id}`}><h2 className="card-title">{post.title}</h2></Link><span>{post.date}</span>
            <p>{post.content}</p>
            
            <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link href={`/blog/${post.id}`}>Details</Link></button>
            </div>
        </div>
    </div>
    );
};

export default Cart;