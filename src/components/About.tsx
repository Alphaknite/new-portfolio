
const About = () => {
    return (
        <>
            <div className="flex flex-col mt-10 items-center w-full">
                <h1 className="text-4xl">About Me</h1>
                <div className="flex flex-col justify-center items-center ">
                    <p className="text-lg mt-8 w-3/5">
                        I'm a college student studying <span className="text-red-400 font-bold">computer science</span> at a community college, set to graduate in December 2024.
                        My plan is to transfer to Rutgers University to complete my bachelor's degree, where I intend to focus on <span className="text-red-400 font-bold">cyber security</span>.
                        While my primary interest lies in cyber security, I also have a passion for web development, with experience in Next.js, React.js, JavaScript, TypeScript, HTML, and CSS.
                    </p>
                    <p className="text-lg mt-8 w-3/5">
                        Exploring new technologies and building <span className="text-red-400 font-bold">personal projects</span> is what excites me about this field.
                        It allows me to constantly improve my skills and stay current with industry trends.
                        As I approach my graduation, I'm preparing to transition to Rutgers, where I look forward to deepening my understanding of
                        cyber security and learning more about protecting digital systems from various cyber threats.
                    </p>
                    <p className="text-lg mt-8 w-3/5">
                        I'm also interested in understanding the <span className="text-red-400 font-bold">practical applications</span> of cyber security in different industries.
                        The combination of my knowledge in web development and cyber security makes me eager to explore career opportunities that
                        not only involve creating innovative technology solutions but also securing them from potential vulnerabilities.
                        Ultimately, my goal is to carve out a career that lets me pursue my passion for <span className="text-red-400 font-bold">technology</span> while contributing to the safety and
                        security of digital ecosystems.
                    </p>
                </div>
                <div className="border-b-2 border-gray-700 w-2/3 mt-10"></div>
            </div>
        </>
    );
}

export default About;