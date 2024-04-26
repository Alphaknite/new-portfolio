import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
    return (
        <>
            <div className="flex flex-col mt-10 items-center w-full">
                <h1 className="text-4xl mb-8">Skills</h1>
                    <div className="flex flex-wrap justify-center gap-20 w-3/4">
                        <div className="flex flex-col items-center">
                            <FaHtml5 className="w-24 h-24 text-red-400" />
                            <p className="text-lg mt-2">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaCss3Alt className="w-24 h-24 text-blue-400" />
                            <p className="text-lg mt-2">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <IoLogoJavascript className="w-24 h-24 text-yellow-400" />
                            <p className="text-lg mt-2">JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiTypescript className="w-24 h-24 text-blue-600" />
                            <p className="text-lg mt-2">TypeScript</p>
                        </div> 
                        <div className="flex flex-col items-center">
                            <FaReact className="w-24 h-24 text-blue-400" />
                            <p className="text-lg mt-2">React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaJava className="w-24 h-24 text-red-600" />
                            <p className="text-lg mt-2">Java</p>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-700 w-2/3 mt-10"></div>
                </div>
        </>
    );
}

export default Skills;