import Image from "next/image"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Projects = () => {
  const projects = [
    {
      name: "Modern UI/UX Webpage",
      imageSrc: "/assets/images/projects/project1.png",
      imageAlt: "Project Image",
      description:
        "A modern landing page for a startup company with hero section, CTA button, testimonials and navigation links.",
      demoLink: "https://rinkhimera.github.io/manage-landing-page/",
      githubLink: "https://github.com/RinKhimera/manage-landing-page",
    },
    {
      name: "Bolo Job Search",
      imageSrc: "/assets/images/projects/project2.png",
      imageAlt: "Project Image",
      description:
        "This is a short description of Project 2. Lorem ipsum dolor sit amet, cnsectetur adipiscing elit.",
      demoLink: "https://bolo-one.vercel.app/",
      githubLink: "https://github.com/RinKhimera/bolo",
    },
    {
      name: "Random Quote Machine",
      imageSrc: "/assets/images/projects/project3.png",
      imageAlt: "Project Image",
      description:
        "A web-based application that generates and displays random quotes to the user.",
      demoLink: "https://rinkhimera.github.io/quotes-generator/",
      githubLink: "https://github.com/RinKhimera/quotes-generator",
    },
    {
      name: "JavaScript Calculator",
      imageSrc: "/assets/images/projects/project4.png",
      imageAlt: "Project Image",
      description:
        "Calculator app built with JavaScript to perform simple operations and integrated with a dark mode.",
      demoLink: "https://rinkhimera.github.io/js-calculator-v2.0/",
      githubLink: "https://github.com/RinKhimera/js-calculator-v2.0",
    },
    {
      name: "Todo List App",
      imageSrc: "/assets/images/projects/project5.png",
      imageAlt: "Project Image",
      description:
        "An application that displays a list of tasks and provides the ability to add, delete, and update tasks.",
      demoLink: "https://rinkhimera.github.io/todo-list-app/",
      githubLink: "https://github.com/RinKhimera/todo-list-app",
    },
    // add more projects here
  ]

  return (
    <main>
      <div className="mt-16 sm:mt-28 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:leading-tight">
                  Things I&apos;ve made trying to put my dent in the universe.
                </p>
                <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
                  I&apos;ve worked on tons of little projects over the years but
                  these are the ones that I&apos;m most proud of. Many of them
                  are open-source, so if you see something that piques your
                  interest, check out the code and contribute if you have ideas
                  for how it can be improved.
                </p>
              </div>
              <div className="mt-8 sm:mt-10">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {projects.map((project) => (
                    <li
                      key={project.name}
                      className="group relative flex flex-col rounded-2xl p-5 text-center transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    >
                      <div>
                        <Image
                          className="mt-5 rounded-lg"
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                        {project.name}
                      </h2>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                      <div className="flex w-full justify-evenly py-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <AiFillGithub className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                          </div>
                        </a>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <AiFillEye className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20"></div>
      <div className="mt-24 sm:px-8 md:mt-28"></div>
    </main>
  )
}

export default Projects
