const Projects = () => {
  return (
    <section
      class="container relative mt-40 h-svh snap-start py-4"
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
          {/* {
              projects.map((project) => (
                <div class="swiper-slide !flex flex-col">
                  <Image
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

                  <button class="mt-auto w-full rounded bg-dark-blue-lighter py-4 font-heading text-base lg:mt-8 lg:text-xl">
                    <p>View project</p>
                  </button>
                </div>
              ))
            } */}
        </div>
      </div>

      <dialog
        class="left-1/2 m-0 h-screen max-h-full w-screen max-w-full -translate-x-1/2 overflow-visible bg-dark-blue bg-opacity-50 text-green"
        id="projectDialog"
      >
        <button
          class="absolute right-0 top-0 flex items-center gap-2 p-6 focus-visible:outline-none"
          id="closeProject"
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

        <div class="relative mt-16 h-full w-full overflow-y-scroll rounded-xl bg-dark-blue-lighter p-6 opacity-0 transition-opacity focus-visible:outline-none">
          <div class="flex font-heading text-xl lg:text-2xl">
            <h2 class="overflow-hidden whitespace-nowrap">Lorem Ipsum</h2>
            <span class="ml-auto">2025</span>
          </div>

          <p class="mt-4 font-body lg:mt-4">
            Nunc posuere gravida velit, laoreet rutrum mauris vestibulum sit
            amet. Nam cursus pharetra ante, sed posuere mauris mattis non.
            Maecenas at tellus ac magna porta mollis. Quisque eleifend posuere
            tortor sit amet fringilla. In malesuada, dui sit amet scelerisque
            vehicula, justo est aliquam odio, quis blandit diam quam ut libero.
            Sed ut urna diam. Vivamus vel malesuada ex, at posuere dolor.
            Aliquam cursus dictum felis quis ultricies. Quisque tristique risus
            sagittis risus eleifend aliquet.
            <br />
            <br />
            Nullam leo nulla, volutpat faucibus arcu ut, sagittis pharetra nunc.
            Sed sagittis rutrum felis, non dignissim diam lacinia sit amet.
            Maecenas fermentum enim vulputate, consectetur erat sed, condimentum
            leo. Vivamus scelerisque eros a ligula ornare interdum sed quis
            turpis. Nulla nulla mi, laoreet eu luctus at, volutpat non mauris.
            Vestibulum non ligula mauris. Duis imperdiet accumsan suscipit.
          </p>

          <section class="mt-8">
            <h2 class="flex font-heading text-xl lg:text-2xl">Gallery</h2>

            {/* <div class="mb-16 mt-4 grid grid-cols-2 gap-4">
                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/a/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/b/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/c/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/d/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/e/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/f/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/g/400"
                  width="200"
                />

                <Image
                  alt=""
                  class="rounded"
                  height="200"
                  src="https://picsum.photos/seed/h/400"
                  width="200"
                />
              </div> */}
          </section>
        </div>

        <dialog
          class="left-1/2 m-0 h-screen max-h-full w-screen max-w-full -translate-x-1/2 bg-dark-blue bg-opacity-50"
          id="imageDialog"
        ></dialog>
      </dialog>
    </section>
  );
};

export default Projects;
