export default function ServicesPage() {
  const services = [
    {
      title: "Webflow Development",
      description:
        "Custom Webflow website design and development tailored to your brand. I leverage Webflow's powerful CMS and design capabilities to create stunning, responsive websites that are easy to manage and update.",
    },
    {
      title: "WordPress Development",
      description:
        "From custom themes to complex plugins, I offer comprehensive WordPress development services. Whether you need an e-commerce solution, a blog, or a corporate website, I can build a WordPress site that meets your specific needs.",
    },
    {
      title: "Custom Coding",
      description:
        "Need something more specialized? I provide custom coding services in HTML, CSS, and JavaScript to create unique features and functionalities that go beyond standard templates and plugins.",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility in search engines with my SEO optimization services. I implement best practices for on-page SEO and provide guidance for content optimization to help your site rank higher.",
    },
    {
      title: "Project Management",
      description:
        "With my background in both web development and project management, I can oversee your entire web project from conception to launch, ensuring it's delivered on time and within budget.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Services</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
