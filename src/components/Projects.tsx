import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <>
            <div className="flex flex-col mt-10 items-center w-full">
                <h1 className="text-4xl mb-8">Projects</h1>
                <div className="flex flex-wrap justify-center gap-6 w-3/4 mb-6">
                    <ProjectsCard
                        title="Blog Crud App"
                        desc="A simple blog application with CRUD functionality using Next.js and MongoDB."
                        link="https://github.com/Alphaknite/Blog-crud-app" />
                    <ProjectsCard
                        title="Crud API"
                        desc="A CRUD API, backend, for storing user information using Next.js and MongoDB. Tested using Postman."
                        link="https://github.com/Alphaknite/crud-api" />
                    <ProjectsCard
                        title="TicTacToe"
                        desc="TicTacToe game built using HTML, CSS, and JavaScript."
                        link="https://github.com/Alphaknite/TicTacToe" />
                    <ProjectsCard
                        title="Portfolio"
                        desc="Personal portfolio website built using Vite and Tailwind CSS."
                        link="https://github.com/Alphaknite/new-portfolio"/>
                </div>
                <div className="border-b-2 border-gray-700 w-2/3 mt-10"></div>

            </div>
        </>
    );
}

export default Projects;