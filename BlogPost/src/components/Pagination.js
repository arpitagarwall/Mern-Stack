import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    debugger;
    const{page,handlePageChange,totalPages} = useContext(AppContext);

    return (
        <div className='flex w-full justify-center items-center border-t-2 py-2 fixed bottom-0 bg-white'>

            <div className='flex max-w-[660px] w-11/12 gap-x-2'>
                { page > 1 &&
                    <button className='rounded-md border px-4 py-1' onClick={() => handlePageChange(page-1)}>Previous</button>
                }
                
                { page < totalPages &&
                    <button className='rounded-md border px-4 py-1' onClick={() => handlePageChange(page+1)}>Next</button>
                }
            </div>

            <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
            
        </div>
  )
}

export default Pagination