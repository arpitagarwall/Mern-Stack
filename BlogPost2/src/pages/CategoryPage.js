import React from 'react';
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function CategoryPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header></Header>
        <div>
             <button onClick={() => navigation(-1)}>Back</button>
             <h2>Blogs on <span>{category}</span></h2>
        </div>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage