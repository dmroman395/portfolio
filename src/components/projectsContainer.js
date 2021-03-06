import React from "react";
import ProjectCard from "./projectCard";
import ProjectInfo from "./projectInfo";
import data from '../data.json'

const {notflix, covid, portfolio} = data

function ProjectsContainer() {
    return (
        <div className="border-y border-neutral-800" id='projects'>
            <div className="darkBg flex flex-col md:flex-row md:justify-end">
                <ProjectCard title={notflix.title} img={notflix.img} link={notflix.link} code={notflix.code} tech={notflix.tech} id={'project1'} side={'left'}/>
                <div className='divider mx-[20%] md:mx-0 md:my-[10%] xl:my-[6%]'></div>
                <ProjectInfo overview={notflix.info.overview} features={notflix.info.features} lessons={notflix.info.lessons} side={'right'}/>
            </div>
            <div className="darkerBg flex flex-col md:flex-row-reverse md:justify-end">
                <ProjectCard title={covid.title} img={covid.img} link={covid.link} code={covid.code} tech={covid.tech} id={'project2'} side={'right'}/>
                <div className='divider mx-[20%] md:mx-0 md:my-[10%] xl:my-[6%]'></div>
                <ProjectInfo overview={covid.info.overview} features={covid.info.features} lessons={covid.info.lessons} side={'left'}/>
            </div>
            <div className="darkBg flex flex-col md:flex-row md:justify-end">
                <ProjectCard title={portfolio.title} img={portfolio.img} link={portfolio.link} code={portfolio.code} tech={portfolio.tech} id={'project3'} side={'left'}/>
                <div className='divider mx-[20%] md:mx-0 md:my-[10%] xl:my-[6%]'></div>
                <ProjectInfo overview={portfolio.info.overview} features={portfolio.info.features} lessons={portfolio.info.lessons} side={'right'}/>
            </div>
        </div>
    )
}

export default ProjectsContainer