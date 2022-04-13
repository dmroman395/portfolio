import React from 'react'

export default function ThankYou() {
    return (
        <div className='flex flex-col text-center h-screen align-middle justify-center'>
            <h1 className='text-slate-100'>Thanks for reaching out!</h1>
            <p>I will get back to you as soon as I can.</p>
            <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className=" max-h-48 h-fit w-1/2" fill="none" viewBox="0 0 24 24" stroke="rgba(94,229,162,255)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>  
            </div>
        </div>
    )
}