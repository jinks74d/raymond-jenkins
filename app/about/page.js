import Image from "next/image";
import Header from "../../components/Header";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="bg-dark-purple text-white min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-start mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-96 h-96 rounded-lg overflow-hidden glow mx-auto">
              <Image
                src="https://uploads-ssl.webflow.com/63bc61e1031fecb5e2759458/66bbcb0a2f578c1619431ff7_raymond-jenkins.jpg"
                alt="Raymond Jenkins"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-semibold mb-4">Raymond Jenkins</h2>
            <p className="mb-4">
              I&apos;m a passionate web developer and certified Webflow expert
              with over a decade of experience crafting digital experiences that
              make a difference.
            </p>
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="mb-4">
              My path to web development wasn&apos;t a straight line – and
              that&apos;s what makes it interesting. I&apos;ve worn many hats
              throughout my career, from serving in the U.S. Marine Corps and
              Army National Guard to working in law enforcement. These
              experiences taught me the value of discipline, attention to
              detail, and the importance of clear communication – skills that I
              bring to every web project I tackle.
              <br />
              <br />
              In 2017, I took a leap and founded FarsideDev, my own web
              development agency. Here, I&apos;ve had the privilege of working
              with a diverse range of clients, helping them bring their digital
              visions to life.
            </p>
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <p className="mb-4">
              I specialize in creating responsive, user-friendly websites and
              web applications. My toolkit includes:
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>Frontend: React, Next.js, HTML5, CSS3, JavaScript</li>
              <li>CMS: Webflow (Certified Expert), WordPress</li>
              <li>Backend: Node.js, PHP</li>
              <li>Databases: MySQL, MongoDB</li>
            </ul>
            <p className="mb-4">
              But it&apos;s not just about the tech. I believe in creating
              websites that not only look great but also deliver results.
              Whether it&apos;s increasing conversions, improving user
              engagement, or simplifying complex processes, I&apos;m always
              focused on the end goal.
            </p>
            <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
            <p className="mb-4">
              I see each project as a unique puzzle to solve. I love diving deep
              into a client&apos;s needs, understanding their audience, and then
              crafting a solution that exceeds expectations. My military
              background has instilled in me a strong sense of discipline and a
              methodical approach to problem-solving, which I apply to every
              project.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Beyond the Code</h2>
            <p className="mb-4">
              When I&apos;m not immersed in code, you might find me in my pool,
              reading up on the latest tech trends, or playing with my dogs. I
              believe in continuous learning and am always excited to tackle new
              challenges in the ever-evolving world of web development.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
            <p className="mb-4">
              I&apos;m always excited to take on new projects and challenges.
              Whether you need a new website, want to optimize your existing
              digital presence, or just want to chat about the latest in web
              tech, I&apos;d love to hear from you.
              <br />
              <br />
              Ready to bring your digital ideas to life? Let&apos;s create
              something amazing together!
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">My Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <SiWebflow className="text-4xl mb-2 mx-auto text-light-purple" />
              <h3 className="font-semibold">Webflow Development</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <FaWordpress className="text-4xl mb-2 mx-auto text-light-purple" />
              <h3 className="font-semibold">WordPress Development</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <FaHtml5 className="text-4xl mb-2 mx-auto text-light-purple" />
              <h3 className="font-semibold">HTML5</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <FaCss3Alt className="text-4xl mb-2 mx-auto text-light-purple" />
              <h3 className="font-semibold">CSS3</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <FaJs className="text-4xl mb-2 mx-auto text-light-purple" />
              <h3 className="font-semibold">JavaScript</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <FaReact className="text-4xl mb-2 mx-auto text-light-purple" />
              <h3 className="font-semibold">React</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
