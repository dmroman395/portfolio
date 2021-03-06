import React, { useRef, useEffect } from "react";
import Image from 'next/image'

function Footer() {
    const paragraph = useRef()
    const form = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {
                entry.target.classList.toggle('showParagraph')
                entry.target.classList.toggle('hideParagraph')
                observer.unobserve(paragraph.current)
            }
        },
        {
            threshold: 0.5
        })
        observer.observe(paragraph.current)
    },[])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {
                entry.target.classList.toggle('showForm')
                entry.target.classList.toggle('hideForm')
                observer.unobserve(form.current)
            }
        },
        {
            threshold: 0.5
        })
        observer.observe(form.current)
    },[])

    return (
        <footer className="darkerBg p-10 h-screen flex flex-col justify-evenly xl:p-40">
            <div className="flex flex-col md:flex-row md:gap-14 xl:gap-32">
                <div ref={paragraph} className="hideParagraph flex flex-col space-y-5 justify-evenly md:max-w-[55%] lg:px-5 xl:max-w-[50%] xl:gap-20">
                    <h1 className="text-slate-100 tracking-wide font-semibold text-base md:text-2xl lg:text-4xl">If you want to collaborate on crafting an amazing experience, you are very welcome to contact me.</h1>
                    <p className="text-zinc-400 tracking-wide md:text-xl lg:text-2xl">I am <span className="greenText">available</span> for freelance projects and full-time employment.</p>
                </div>
                <form ref={form} action="https://formsubmit.co/414b72e79b006dc56f4fdace489834bb" method="POST" className="hideForm my-0 flex-grow mt-12 sm:mt-0" id='contact'>
                    <h1 className="text-neutral-300 text-2xl text-center font-semibold">Contact Me</h1>
                    <div className="flex flex-col">
                        <div className=" flex flex-col mt-3">
                            <label htmlFor='name' className="text-neutral-300 mb-1
                            ">Name<span className="text-red-600">*</span></label>
                            <input type='text' name='name' id='name' className="rounded-md" required/>
                        </div>
                        <div className=" flex flex-col mt-3">
                            <label htmlFor='email' className="text-neutral-300 mb-1
                            ">Email<span className="text-red-600">*</span></label>
                            <input type='email' name='email' id='email' className="rounded-md"  required/>
                        </div>
                    </div>
                    <div className=" flex flex-col my-3">
                        <label htmlFor='subject' className="text-neutral-300 mb-1
                        ">Subject<span className="text-red-600">*</span></label>
                        <input type='text' name='subject' id='subject' className="rounded-md"  required/>
                    </div>
                    <div className=" flex flex-col my-3">
                        <label htmlFor='message' className="text-neutral-300 mb-1
                        ">Message<span className="text-red-600">*</span></label>
                        <textarea name="message" cols="40" rows="5" id='message' className="rounded-md resize-none" ></textarea>
                    </div>
                    <input type='hidden' name='_captcha' value='false'/>
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_next" value='https://davidmiguel.io/thankyou'/>
                    <button type='submit' className="w-full rounded-md p-2 font-medium greenBg hover:bg-green-400 focus:bg-green-500 transition-colors duration-150 ease-in">
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex justify-between xl:mt-32">
                <h1 className='text-lg sm:text-2xl lg:text-3xl lg:px-5'><span className='font-bold text-slate-100'>David</span><span className='text-neutral-300'>Roman</span></h1>
                <div className="flex gap-2">
                    <a href='https://github.com/dmroman395' target='_blank' rel="noreferrer"><Image priority src='/images/github.png' alt='github logo' width={24} height={24} layout='fixed'/></a>
                    <a href='https://www.linkedin.com/in/david-roman-2917b2239/' target='_blank' rel="noreferrer"><Image priority src='/images/linkedin.png' alt='linkedin logo' width={24} height={24} layout='fixed'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer