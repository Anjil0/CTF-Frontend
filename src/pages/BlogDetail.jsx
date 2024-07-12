// BlogDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchBlogDetail = async () => {
      // Simulate fetching blog details
      const blogDetails = {
        id,
        title: "Sample Blog Title",
        content: "Sample blog content for blog ID " + id,
        image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        category: "Sample Category",
      };
      setBlog(blogDetails);
    };

    fetchBlogDetail();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-200 max-w-5xl mx-auto">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src={blog.image}
                alt={blog.title}
              />
              <div>
                <h1 className="max-w-2xl mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-black">
                  {blog.title}
                </h1>
              </div>
            </div>

            <div
              id="recents"
              className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 dark:text-gray-800"
            >
              <div>
                <h3 className="text-blue-500 capitalize">Design instrument</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-600"
                >
                  How to raise $100k+ by using Blox UI kit on your design
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">UI Resource</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-600 "
                >
                  Should you create UI Product by using Blox?
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium Collection</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-600"
                >
                  Top 10 Blocks you can get on Blox's collection.
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium kits</h3>

                <a
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-600"
                >
                  Top 10 UI kits you can get on Blox's collection.
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-3xl text-justify mt-3">
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p className="text-base mb-4">{blog.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
