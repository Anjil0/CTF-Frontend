import React from "react";
import NavBar from "../components/navbar";

const BlogPage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section className="bg-white dark:bg-gray-200 max-w-5xl mx-auto">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div>
                <h1 className="max-w-2xl mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-black">
                  What do you want to know about UI
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
            <p>
              <h2 className="text-2xl font-bold mb-2">Introduction</h2>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                rutrum arcu ut justo feugiat, eu pretium elit elementum. Duis a
                metus a ipsum rutrum interdum. Nullam ac felis eu libero iaculis
                volutpat. Sed ullamcorper eros nec risus volutpat, nec mollis
                elit fermentum. Vestibulum non magna vel velit efficitur
                volutpat. Donec sit amet sapien quis risus fringilla dictum ac
                sit amet mauris. Sed eget odio sit amet ex tincidunt feugiat.
              </p>

              <h3 className="text-lg font-bold mb-2">Subheading 1</h3>
              <p className="text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                posuere gravida odio, a vestibulum justo fermentum at.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </li>
                <li className="text-base">
                  Integer ullamcorper mauris nec velit interdum, sit amet
                  vehicula augue dictum.
                </li>
              </ul>

              <h3 className="text-lg font-bold mb-2">Subheading 2</h3>
              <p className="text-base mb-2">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Duis suscipit risus nec mi venenatis, eu
                ultrices nulla lobortis:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base">
                  Mauris non arcu sit amet lorem aliquet sagittis.
                </li>
                <li className="text-base">
                  Nullam in turpis non ligula bibendum iaculis.
                </li>
              </ul>

              <h4 className="text-base font-bold mb-2">Sub-subheading 1</h4>
              <p className="text-base mb-2">
                Fusce ut dui et nibh interdum ullamcorper. Vestibulum ac varius
                est.
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li className="text-base">
                  Sed a turpis non ipsum consectetur bibendum.
                </li>
                <li className="text-base">
                  Cras vehicula est nec risus vestibulum, non maximus elit
                  molestie.
                </li>
              </ol>

              <h4 className="text-base font-bold mb-2">Sub-subheading 2</h4>
              <p className="text-base mb-2">
                In at ligula eget odio interdum lobortis. Nullam sed lobortis
                nisi, et consequat nulla.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base">
                  Nam ac metus eu urna mattis molestie sit amet sit amet neque.
                </li>
                <li className="text-base">
                  Aliquam non ex sed justo dictum fringilla.
                </li>
              </ul>

              <h3 className="text-lg font-bold mb-2">Subheading 3</h3>
              <p className="text-base mb-2">
                Integer rhoncus justo ut erat ultricies, vitae malesuada libero
                lobortis:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="text-base">
                  Sed nec nisi in eros fermentum scelerisque.
                </li>
                <li className="text-base">
                  Curabitur eget arcu eget sem tincidunt fringilla nec vitae
                  lorem.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia felis a dui ultricies, vitae scelerisque dui cursus.
                Vestibulum tempus scelerisque orci, in molestie sem pretium vel.
                Sed fringilla, risus at scelerisque pellentesque, justo odio
                suscipit lacus, nec gravida arcu leo eu nunc. Vivamus feugiat,
                metus at viverra ultrices, erat libero dictum justo, et viverra
                nisi eros eu libero.
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
