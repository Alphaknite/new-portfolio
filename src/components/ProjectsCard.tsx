
const ProjectsCard = ({ title, desc, link }: { title: string, desc: string, link: string }) => {
    return (
        <div className="bg-gray-700 shadow-md rounded-lg p-6 w-64">
            <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-300 mb-4">{desc}</p>
            <a href={link} target="blank" className="text-blue-500 hover:text-blue-700 transition-colors">
                View Project
            </a>
        </div>
    );
}

export default ProjectsCard;