import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import { projects } from "../../../lib/projects";
import { FaGlobe, FaTools, FaArrowLeft } from "react-icons/fa";

export default function ProjectPage({ params }) {
  const allProjects = [...projects.webflow, ...projects.other];
  const project = allProjects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="bg-dark-purple text-white min-h-screen">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Project Not Found
          </h1>
          <p className="text-center">
            <Link
              href="/projects"
              className="text-light-purple hover:text-neon-purple"
            >
              Return to Projects
            </Link>
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-dark-purple text-white min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <Link
          href="/projects"
          className="text-light-purple hover:text-neon-purple mb-6 inline-flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="rounded-lg overflow-hidden glow mb-6">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={600}
                height={400}
                layout="responsive"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-light-purple hover:bg-neon-purple text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                <FaGlobe className="mr-2" /> Visit Website
              </a>
              <span className="text-gray-400">
                <FaTools className="inline mr-2" />
                {project.type === "webflow" ? "Webflow" : "WordPress"}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-3">Technologies Used:</h3>
            <p className="text-gray-300">{project.technologies.join(", ")}</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Project Challenges and Solutions
          </h3>
          <p className="text-gray-300 mb-6">
            {project.challenges ||
              "Every project comes with its unique set of challenges. For this project, we focused on creating a seamless user experience while ensuring the website met all of the client's specific requirements."}
          </p>

          <h3 className="text-2xl font-semibold mb-4">Results and Impact</h3>
          <p className="text-gray-300 mb-6">
            {project.results ||
              "The finished website not only met but exceeded the client's expectations. It provided a significant improvement in user engagement and helped streamline the client's online operations."}
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Interested in a Similar Project?
          </h3>
          <p className="text-gray-300 mb-6">
            If you're looking to create a website like this or have a project in
            mind, I'd love to hear from you!
          </p>
          <Link
            href="/contact"
            className="bg-light-purple hover:bg-neon-purple text-white font-bold py-2 px-6 rounded transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
}
