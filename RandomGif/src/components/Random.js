import React from 'react';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Random() {

    const {gif,loading, fetchData} = useGif();

    function clickHandler(){

        fetchData();
    }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline font-bold mt-[15px]'>A RANDOM GIF</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} width="450"></img>)
        }

        <button onClick={clickHandler} className='w-10/12 bg-gray-200 py-2 text-lg rounded-lg mb-[15px]'>
            Generate
        </button>
    </div>
  )
}

export default Random