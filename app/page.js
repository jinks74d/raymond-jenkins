import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { projects } from "../lib/projects";

export default function Home() {
  const featuredProjects = [...projects.webflow, ...projects.other].slice(0, 4);

  return (
    <div className="container mx-auto px-6 py-12">
      <section className="flex flex-col md:flex-row items-center mb-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Hello! I&apos;m{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Raymond Jenkins
            </span>
          </h1>
          <h2 className="text-2xl mb-4">A Web Developer who</h2>
          <p className="text-3xl font-bold mb-4">
            Builds websites that{" "}
            <span className="text-accent-light dark:text-accent-dark">
              convert
            </span>
          </p>
          <p className="mb-6">
            Welcome to my digital workspace. I&apos;m Raymond, a seasoned web
            developer with over a decade of experience in crafting robust,
            user-centric web solutions.
          </p>
          <h2 className="text-2xl mb-4">What I Bring to the Table:</h2>
          <ul className="mb-4 list-disc pl-5">
            <li>🚀 10+ years of web development expertise</li>
            <li>💻 Certified Webflow Expert</li>
            <li>⚛️ React and Next.js specialist</li>
            <li>🎨 Passion for clean, intuitive design</li>
            <li>🛠️ Full-stack capabilities</li>
          </ul>
          <p className="mb-4">
            From concept to deployment, I transform ideas into high-performing
            websites and applications. My unique background in military service
            and law enforcement has instilled in me a disciplined approach to
            problem-solving and an unwavering commitment to delivering results.
            <br />
            <br />
            Whether you&apos;re a startup looking to establish your digital presence
            or an established business aiming to revamp your online strategy,
            I&apos;m here to turn your vision into reality.
          </p>
          <h2 className="text-2xl mb-4">
            Let&apos;s Build Something Extraordinary Together!
          </h2>
          <Link
            href="/projects"
            className="bg-accent-light dark:bg-accent-dark text-white font-bold py-2 px-4 mr-6 rounded hover:opacity-90 transition duration-300"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="bg-accent-light dark:bg-accent-dark text-white font-bold py-2 px-4 rounded hover:opacity-90 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-96 h-96 overflow-hidden">
            <Image
              src="/images/raymond-0041.jpg"
              alt="Raymond Jenkins"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/raymondjenkins1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-accent-light dark:hover:text-accent-dark"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:raymond_jenkins@hotmail.com"
            className="text-3xl hover:text-accent-light dark:hover:text-accent-dark"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}
