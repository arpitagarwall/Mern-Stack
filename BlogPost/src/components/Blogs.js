import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

function Blogs() {

    const {posts,loading} = useContext(AppContext);

    return (
        <div className='w-11/12 max-w-[660px] h-screen py-6 flex flex-col gap-y-5 mt-[65px] mb-[65px] justify-center items-center'>
            {
                loading ? (<Spinner></Spinner>) : (
                    posts.length === 0 ? (<div><p>No post found</p></div>) : (posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold text-lg'>{post.title}</p>
                            <p className='text-sm mt-[5px]'>
                                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                            </p>
                            <p className='text-sm mt-[5px]'>Posted on {post.date}</p>
                            <p className='text-md mt-[15px]'>{post.content}</p>
                            <div className='flex gap-x-2 py-2'>{post.tags.map((tag, index) => {
                                return <span key={index} className='text-blue-700 underline font-bold text-xs cursor-pointer'>{`#${tag}`}</span>
                            })}
                            </div>
                        </div>
                    )))
                )
            }
        </div>
    )
}

export default Blogs