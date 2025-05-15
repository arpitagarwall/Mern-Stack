import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from "../baseUrl";
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    

    async function fetchRelatedBlogs(){
        setLoading(true);

        let url = `${baseUrl}?blogId=${blogId}`;

        try{
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error)
        {
            console.log("Error in Blog Page");
            setBlog(null);
            setRelatedBlogs([]);
        }
    }

    useEffect( () => {
        if (blogId){
            fetchRelatedBlogs();
        }
        
    }, [location.pathname])
  return (
    <div>
        <Header></Header>
        <div>
            <button onClick={() => navigation(-1)}>Back</button>
        </div>

        {
            loading ? <p>Loading</p> : 
            blog ? (<div><BlogDetails post={blog}></BlogDetails>
                <h2>Related Blogs</h2>
                {
                    relatedBlogs.map((post) => (
                        <div>
                            <BlogDetails key={post.id} post={post}></BlogDetails>
                        </div>
                    ))
                }
            </div>) : ( <p> No Blog Found</p>)
            
        }
    </div>
  )
}

export default BlogPage