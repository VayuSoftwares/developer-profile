import axios from "axios";
import React, { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const fetchProjects = async () => {
    try {
      const data = axios
        .get("https://dev.to/api/articles?username=prankurpandeyy")
        .then((data) => setBlogs(data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div>
      {" "}
      <section class="text-gray-600 body-font" id="blogs">
        <div class="container px-5 py-24  mx-auto">
          <button class="inline-flex items-center bg-yellow-500 mb-16 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            BLOGS
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <div class="flex flex-wrap -m-4">
            {blogs.map((blog) => (
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={blog.cover_image}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {blog.readable_publish_date}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      {blog.title}
                    </h1>
                    <p class="leading-relaxed mb-3">{blog.description}</p>
                    <div class="flex items-center flex-wrap">
                      <a
                        class="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href={blog.url}
                      >
                        Read More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
