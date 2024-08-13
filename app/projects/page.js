import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-dark-purple text-white min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Webflow Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.webflow.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Other Web Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.other.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
