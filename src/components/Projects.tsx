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
      class="container relative mt-40 h-screen snap-start py-4 lg:py-8"
      id="projects"
    >
      <div class="section-name flex w-fit items-center font-heading text-3xl lg:text-4xl">
        <span
          class="relative mr-4 transition-opacity duration-300 ease-in-out"
          id="titleSlash"
        >
          //
        </span>

        <h2 class="flex w-0 overflow-hidden whitespace-nowrap">Projects</h2>
      </div>

      <nav class="absolute left-0 top-[200px] z-10 flex w-full items-center justify-between gap-4 px-10 text-green lg:left-1/2 lg:top-[30%] lg:w-2/3 lg:-translate-x-1/2">
        <div class="swiper-button-prev cursor-pointer rounded border-2 border-green border-opacity-0 bg-dark-blue bg-opacity-50 p-1 transition-all duration-200 hover:border-opacity-100 lg:bg-dark-blue-lighter lg:bg-opacity-100">
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

        <div class="swiper-button-next cursor-pointer rounded border-2 border-green border-opacity-0 bg-dark-blue bg-opacity-50 p-1 transition-all duration-200 hover:border-opacity-100 lg:bg-dark-blue-lighter">
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

      <div class="swiper mt-4 h-[90%] w-full lg:mt-20 lg:w-1/2">
        <div class="swiper-wrapper">
          {projects.map((project, index) => (
            <div class="swiper-slide !flex flex-col lg:items-center">
              <img
                alt=""
                class="h-[35vh] rounded object-cover"
                loading="lazy"
                src={project.thumbnail}
              />

              <section class="mt-3 lg:mt-12">
                <div class="flex font-heading text-xl lg:text-2xl">
                  <h2 class="w-0 overflow-hidden whitespace-nowrap">
                    {project.title}
                  </h2>

                  <span class="ml-auto w-1/3 text-right opacity-0">
                    {project.year}
                  </span>
                </div>

                <p class="summary mt-2 font-body opacity-0 lg:mt-4">
                  {project.summary}
                </p>
              </section>

              <section class="mx-1 mt-16">
                <p class="text-center font-body text-base lg:text-lg">
                  Tech stacks used
                </p>

                <div class="group mt-4 flex flex-wrap justify-center gap-x-2 gap-y-3">
                  {project.stacks.map((stack, index) => {
                    const delay = 2000 + index * 200;

                    return (
                      <p
                        class="min-w-[75px] rounded-full border-[1px] border-green px-2 py-1 text-center opacity-0 group-[.active]:animate-[fade-in_500ms_forwards] lg:min-w-[100px] lg:px-4"
                        style={`animation-delay: ${delay}ms;`}
                      >
                        {stack}
                      </p>
                    );
                  })}
                </div>
              </section>

              <button
                class="mt-auto w-full rounded border-2 border-green border-opacity-0 bg-dark-blue-lighter py-4 font-heading text-base transition-all duration-200 hover:border-opacity-100 lg:mb-8 lg:text-xl"
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
          class="absolute right-0 top-0 flex items-center gap-2 p-6 focus-visible:outline-none lg:right-[15%] lg:top-[10%]"
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
          class={`relative mt-16 h-full w-full overflow-y-scroll rounded-xl bg-dark-blue-lighter p-6 transition duration-300 ease-in-out focus-visible:outline-none lg:top-1/2 lg:m-auto lg:h-2/3 lg:w-2/3 lg:-translate-y-1/2 ${isProjectDialogOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          style={{ scrollbarWidth: "none" }}
        >
          <div class="flex font-heading text-xl lg:gap-2 lg:text-2xl">
            <h2 class="overflow-hidden whitespace-nowrap">
              {projects[selectedProject].title}
            </h2>

            <span class="hidden lg:block">-</span>

            <span class="ml-auto lg:ml-0">
              {projects[selectedProject].year}
            </span>
          </div>

          <p class="mt-4 whitespace-pre-line font-body lg:mt-4">
            {projects[selectedProject].description}
          </p>

          <section class="mt-8 lg:mt-16">
            <h2 class="flex font-heading text-xl lg:text-2xl">Gallery</h2>

            <div class="mb-16 mt-4 grid grid-cols-2 gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-6">
              {projects[selectedProject].images.map((image) => (
                <img
                  alt=""
                  class="mx-auto h-[20vh] w-full rounded object-cover"
                  loading="lazy"
                  src={image}
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
          class={`flex h-screen max-h-full w-screen max-w-full flex-col items-center justify-center bg-dark-blue bg-opacity-80 transition-opacity duration-300 lg:-z-10 ${isImageDialogOpen ? "opacity-100" : "opacity-0"}`}
          ref={imageDialogRef}
          onClick={() => {
            setIsImageDialogOpen(false);

            setTimeout(() => {
              imageDialogRef.current?.close();
            }, 300);
          }}
        >
          <p
            class={`absolute bottom-4 font-body text-green transition-opacity duration-300 lg:hidden ${isImageDialogOpen ? "opacity-75" : "opacity-0"}`}
          >
            Tap anywhere to close
          </p>

          <p
            class={`absolute bottom-8 hidden font-body text-green transition-opacity duration-300 lg:block ${isImageDialogOpen ? "opacity-75" : "opacity-0"}`}
          >
            Click anywhere to close
          </p>

          <img
            alt=""
            class={`h-auto max-h-[80vh] w-auto rounded object-contain px-4 transition duration-300 ease-in-out lg:max-h-[85vh] lg:w-auto ${isImageDialogOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            loading="lazy"
            src={selectedImage}
          />
        </dialog>
      </dialog>
    </section>
  );
};

export default Projects;
