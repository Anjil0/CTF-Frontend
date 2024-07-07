import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";


const dropdown = () => {
  const menuItems = [
    { title: "Products", items: ["Teams", "Schools", "Individuals"] },
    { title: "Solutions", items: ["Solution 1", "Solution 2", "Solution 3"] },
    { title: "Pricing", items: ["Plan 1", "Plan 2", "Plan 3"] },
    { title: "Resources", items: ["Resource 1", "Resource 2", "Resource 3"] },
    { title: "Company", items: ["About Us", "Careers", "Contact"] },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {menuItems.map((menuItem, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          {menuItem.title}
                          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Menu.Items
                        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-300 ${
                          openIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="py-1">
                          {menuItem.items.map((item, subIndex) => (
                            <Menu.Item key={subIndex}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={`${
                                    active ? "bg-gray-100" : "text-gray-900"
                                  } block px-4 py-2 text-sm`}
                                >
                                  {item}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Menu>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default dropdown;
