import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ details}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = details.title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={details.link} target="_blank" rel="noopener noreferrer">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{details.title}</p>
        <p className="mt-7">
        {details.description}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={details.title} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Check out some of my recent projects.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project details={{title:"Project 1", description:" A responsive MERN social media application", link:"https://linkup.up.railway.app/"}}/>
          <Project details={{title:"Project 2", description:"A full-stack chatbot using ChatGPT, enabling users to practice their speaking skills in any language by interacting with the bot using their voice, and receiving responses from the bot as voice", link:"https://github.com/hli1997/SpeakEZ"}}/>

          {/* ROW 2 */}
          <Project details={{title:"Project 3", description:"A student management system using Spring Boot backend API and React", link:"https://github.com/hli1997/spring-boot-fullstack"}}/>
          <Project details={{title:"Project 4", description:"A Chrome extension to search movie information and know more details efficiently.", link:"https://chrome.google.com/webstore/detail/before-watch/pafpjnpkfmbpgpfmpdkmbicpgoclipca?hl=en"}}/>
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
