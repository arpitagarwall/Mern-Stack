import { React, useState } from 'react';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {

const [tag, setTag] = useState('car');
const {gif,loading, fetchData} = useGif(tag);

function clickHandler(){
    fetchData(tag);
}

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline font-bold mt-[15px]'>RANDOM {tag} GIF</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} width="450"></img>)
        }

        <input className='w-10/12 py-2 text-lg rounded-lg mb-[3px] text-center' onChange={(event) => setTag(event.target.value)} value={tag}></input>

        <button onClick={clickHandler} className='w-10/12 bg-gray-200 py-2 text-lg rounded-lg mb-[15px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag