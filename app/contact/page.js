import ContactForm from "../../components/ContactForm";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-dark-purple text-white min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        <div className="max-w-4xl mx-auto">
          <p className="mb-8 text-center text-lg">
            I&apos;m always excited to take on new challenges and help businesses
            succeed online. Whether you need a custom Webflow site or a complex
            web application, I&apos;m here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2 text-light-purple" />
                <span>Dallas/Fort Worth Metroplex</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-2 text-light-purple" />
                <a
                  href="mailto:raymond_jenkins@hotmail.com"
                  className="hover:text-light-purple"
                >
                  raymond_jenkins@hotmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="mr-2 text-light-purple" />
                <a
                  href="https://www.linkedin.com/in/raymondjenkins1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-light-purple"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
