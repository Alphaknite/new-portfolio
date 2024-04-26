import Pfp from '/Pfp.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Main = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-20 w-full">
                <div>
                    <img
                        className="w-36 h-36 mx-auto object-cover rounded-full bg-red-400 shadow-lg transition-transform duration-300"
                        src={Pfp}
                        alt="Profile Picture"
                    />
                </div>
                <div className="mt-8 text-center">
                    <h1 className="text-4xl font-bold">Rudra Patel</h1>
                    <p className="text-gray-500 text-xl mt-3">Student</p>
                </div>
                <div className="flex mt-8 space-x-4">
                    <a
                        href="https://github.com/Alphaknite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <FaGithub className="w-10 h-10" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rudrapatel05/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <FaLinkedin className="w-10 h-10" />
                    </a>
                    <a
                        href="https://www.instagram.com/rudra_patel14/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <FaInstagram className="w-10 h-10" />
                    </a>
                </div>
                <div className="border-b-2 border-gray-700 w-2/3 mt-10"></div>
            </div>
        </>
    );
};

export default Main;


//bg-gray-300 pfp 