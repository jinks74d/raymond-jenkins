import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ id, title, description, imageSrc }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <Image
        src={imageSrc}
        alt={title}
        width={600}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link
          href={`/projects/${id}`}
          className="text-accent-light dark:text-accent-dark hover:underline"
        >
          View Project Details
        </Link>
      </div>
    </div>
  );
}
