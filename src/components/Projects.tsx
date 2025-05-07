import { useRef, useState } from "preact/hooks";
import projects from "../content/projects/projects.json";

const Projects = () => {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedProject, setSelectedProject] = useState(0);
  const imageDialogRef = useRef<HTMLDialogElement>(null);
  const projectDialogRef = useRef<HTMLDialogElement>(null);

  return (
    <section
      class="container relative mt-40 h-screen snap-start py-4"
      id="projects"
    >
      <div class="section-name flex w-fit items-center font-heading text-3xl">
        <span
          class="relative mr-4 transition-opacity duration-300 ease-in-out"
          id="titleSlash"
        >
          //
        </span>

        <h2 class="flex w-0 overflow-hidden whitespace-nowrap">Projects</h2>
      </div>

      <nav class="absolute left-0 top-[200px] z-10 flex w-full items-center justify-between gap-4 px-10 text-green">
        <div class="swiper-button-prev rounded bg-dark-blue bg-opacity-50 p-1">
          <svg
            class="size-6 lg:size-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 19.5 8.25 12l7.5-7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div class="swiper-button-next rounded bg-dark-blue bg-opacity-50 p-1">
          <svg
            class="size-6 lg:size-8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </nav>

      <div class="swiper mt-4 h-[90%] w-full lg:mt-8">
        <div class="swiper-wrapper">
          {projects.map((project, index) => (
            <div class="swiper-slide !flex flex-col">
              <img
                alt=""
                class="rounded"
                height="350"
                src={project.thumbnail}
                width="400"
              />

              <section class="mt-3 lg:mt-6">
                <div class="flex font-heading text-xl lg:text-2xl">
                  <h2 class="w-0 overflow-hidden whitespace-nowrap">
                    {project.title}
                  </h2>

                  <span class="ml-auto opacity-0">{project.year}</span>
                </div>

                <p class="summary mt-2 font-body opacity-0 lg:mt-4">
                  {project.summary}
                </p>
              </section>

              <section class="mx-1 mt-16">
                <p class="text-center font-body text-base lg:text-lg">
                  Tech stacks used
                </p>

                <div class="group mt-4 flex flex-wrap gap-2">
                  {project.stacks.map((stack, index) => {
                    const delay = 2000 + index * 200;

                    return (
                      <p
                        class="rounded-full border-[1px] border-green px-2 py-1 opacity-0 group-[.active]:animate-[fade-in_500ms_forwards]"
                        style={`animation-delay: ${delay}ms;`}
                      >
                        {stack}
                      </p>
                    );
                  })}
                </div>
              </section>

              <button
                class="mt-auto w-full rounded bg-dark-blue-lighter py-4 font-heading text-base lg:mt-8 lg:text-xl"
                onClick={() => {
                  setSelectedProject(index);
                  projectDialogRef.current?.showModal();
                  setIsProjectDialogOpen(true);
                }}
              >
                <p>View project</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <dialog
        class="left-1/2 m-0 h-screen max-h-full w-screen max-w-full -translate-x-1/2 overflow-visible bg-dark-blue bg-opacity-50 text-green"
        ref={projectDialogRef}
      >
        <button
          class="absolute right-0 top-0 flex items-center gap-2 p-6 focus-visible:outline-none"
          onClick={() => {
            setIsProjectDialogOpen(false);

            setTimeout(() => {
              projectDialogRef.current?.close();
            }, 300);
          }}
        >
          <span class="font-heading text-base">Close</span>

          <svg
            class="size-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18 18 6M6 6l12 12"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <div
          class={`relative mt-16 h-full w-full overflow-y-scroll rounded-xl bg-dark-blue-lighter p-6 transition duration-300 ease-in-out focus-visible:outline-none ${isProjectDialogOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <div class="flex font-heading text-xl lg:text-2xl">
            <h2 class="overflow-hidden whitespace-nowrap">
              {projects[selectedProject].title}
            </h2>

            <span class="ml-auto">{projects[selectedProject].year}</span>
          </div>

          <p class="mt-4 whitespace-pre-line font-body lg:mt-4">
            {projects[selectedProject].description}
          </p>

          <section class="mt-8">
            <h2 class="flex font-heading text-xl lg:text-2xl">Gallery</h2>

            <div class="mb-16 mt-4 grid grid-cols-2 gap-4">
              {projects[selectedProject].images.map((image) => (
                <img
                  alt=""
                  class="rounded"
                  height="200"
                  src={image}
                  width="200"
                  onClick={() => {
                    setSelectedImage(image);
                    imageDialogRef.current?.showModal();
                    setIsImageDialogOpen(true);
                  }}
                />
              ))}
            </div>
          </section>
        </div>

        <dialog
          class="flex h-screen max-h-full max-w-full items-center justify-center bg-dark-blue bg-opacity-80"
          ref={imageDialogRef}
          onClick={() => {
            setIsImageDialogOpen(false);

            setTimeout(() => {
              imageDialogRef.current?.close();
            }, 300);
          }}
        >
          <img
            alt=""
            class={`h-auto w-full rounded px-4 transition duration-300 ease-in-out ${isImageDialogOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            src={selectedImage}
          />
        </dialog>
      </dialog>
    </section>
  );
};

export default Projects;
