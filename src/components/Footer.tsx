import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col mt-10 mb-10 items-center w-full">
                <h1 className="text-4xl">See Also</h1>
                <div className="flex mt-8 space-x-14">
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
                        href="https://twitter.com/rudra5oct"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <FaTwitter className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;