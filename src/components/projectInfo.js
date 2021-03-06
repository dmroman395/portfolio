import React, { useRef, useEffect } from "react";

function ProjectInfo({overview, features,  lessons, side}) {
    const info = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {

                if (side === 'left') {
                    entry.target.classList.toggle('showProjectInfoLeft')
                    entry.target.classList.toggle('hideProjectInfoLeft')
                } else {
                    entry.target.classList.toggle('showProjectInfoRight')
                    entry.target.classList.toggle('hideProjectInfoRight')
                }
                 observer.unobserve(info.current)
            }
        },
        {
            threshold: 0.4
        })
        observer.observe(info.current)
    },[])

    const featList = features.map((feature, i) => {
        return <li key={i} className="tracking-wider mb-2 list-none feature">{feature}</li>
    })

    return (
        <div ref={info} className={`${side === 'left' ? 'hideProjectInfoLeft' : 'hideProjectInfoRight'} p-10 mb-12 mt-5 md:w-[50%] md:p-16 xl:px-28`}>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl">Overview</h1>
                <p className="text-zinc-400 text-base tracking-wider leading-6 md:leading-7 md:my-10 lg:text-lg xl:text-xl xl:mb-12">{overview}</p>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl">Features</h1>
                <ul className="text-zinc-400 text-base tracking-wider leading-6 md:leading-7 md:my-10 xl:text-xl xl:mb-12">{featList}</ul>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl">What I learned</h1>
                <p className="text-zinc-400 text-base tracking-wider whitespace-pre-line leading-6 md:leading-7 xl:text-xl md:my-10">{lessons}</p>
        </div>
    )
}

export default ProjectInfo