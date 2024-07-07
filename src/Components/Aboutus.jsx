
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import utshab from '../assets/utshab.jpg';
import ayush from '../assets/ayush.jpg';
import asim from '../assets/asim.jpg';
import arpan from '../assets/arpan.jpg';
import anjil from '../assets/anjil.jpg';
import ronisha from '../assets/ronisha.jpg';
import rhijula from '../assets/rhijula.jpg';
import { Parallax } from 'react-parallax';
import desk from '../assets/desk.jpg';
import Typewriter from 'typewriter-effect';
import videobg from '../assets/background.mp4'


const Aboutus = () => {
    const teamMembers = [
        {
            name: "Aayush Thapa",
            title: "Frontend and UI",
            imgSrc: ayush,
        },
        {
            name: "Utshab Thapa",
            title: "Frontend and UI",
            imgSrc: utshab,

        },
        {
            name: "Anjil Neupane",
            title: "Backend ",
            imgSrc: anjil,
        },
        {
            name: "Arpan Karki",
            title: " Backend ",
            imgSrc: arpan,
        },
        {
            name: "Asim Khadka",
            title: "Frontend and Backend",
            imgSrc: asim,
        },
        {
            name: "Ronisha Shrestha",
            title: "Frontend",
            imgSrc: ronisha,
        },
        {
            name: "Rhijula Pradhan",
            title: "Frontend",
            imgSrc: rhijula,
        },

    ];



    const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill in all fields!',
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent.',
                });

                // Resetting form after submission
                setFormData({ name: '', email: '', message: '' });
            }
        };

        return (
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-[32px] mb-1 font-bold title-font">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600">First Academy where you can showcase your skills</p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Submit
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">Step into the future of ING Skills.</p>
            </div>
        );
    };

    return (
        <>
            <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${desk})` }}></div>
                <div className="relative p-8 flex flex-col md:flex-row items-center mb- bg-white bg-opacity-70 backdrop-blur-lg">
                    <div className="md:w-3/5 md:mr-4 md:mb-0">
                        <h1 className="text-[60px] pl-3 font-bold text-gray-500">ABOUT US</h1>

                        <h2 className="text-[25px] md:text-5xl font-bold mb-4">
                            <Typewriter
                                onInit={(typewriter) => {
                                    const typewriterLoop = () => {
                                        typewriter
                                            .typeString('Innovation <span class="text-lime-600 text-[30px]">is in our DNA.</span>')
                                            .callFunction(() => {
                                                console.log('String typed out!');
                                            })
                                            .pauseFor(200)
                                            .deleteAll()
                                            .callFunction(() => {
                                                console.log('All strings were deleted');
                                            })
                                            .callFunction(typewriterLoop)
                                            .start();
                                    };

                                    typewriterLoop(); 
                                }}
                            />
                        </h2>


                        {/* <motion.h2
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: 150 }}
                            transition={{ duration: 3 }}
                            className="text-[25px] md:text-5xl font-bold mb-4"
                        >
                            Innovation <span className="text-lime-600 text-[30px]">is in our DNA.</span>
                        </motion.h2> */}
                        <p className="text-lg md:text-base leading-relaxed mb-6 text-justify font-sans pl-3 pr-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ad cum, consectetur dolore saepe blanditiis nesciunt accusantium vero commodi officia!
                        </p>
                        <p className="text-md md:text-base leading-relaxed mb-6 text-justify font-sans pl-3 pr-20">
                            ING Skill Academy is a comprehensive learning platform designed  skills, though interactive modules, workshops, and practical train minima vitae rerum? resources and expert-led curriculum, ING Skill Academy equips its participants with the competencies needed to navigate challenges, drive business success, and adapt to evolving market trends. It serves as a catalyst for career advancement and organizational resilience, promoting a forward-thinking approach to skill development that aligns with ING's commitment to excellence and customer-centricity.
                        </p>
                        <a href="#" className="text-lime-500 font-bold ml-3 px-3 py-2 rounded-lg transition duration-300 hover:bg-gray-600 mb-7 sm:mb-5 md:mb-5 hover:text-lime-600">GET IN TOUCH &rarr;</a>
                    </div>
                    <div className="w-full sm:w-3/5 md:w-2/5 rounded-lg bg-black h-[380px] bg-cover bg-center bg-no-repeat mt-5 rounded-tl-[99px] rounded-br-[99px]"
                        style={{ backgroundImage: `url(${desk})` }}>
                    </div>
                </div>
            </div>

<div className=''>
    <video src={videobg} autoPlay loop muted v>
            <div className="bg-white py-20 flex justify-center shadow-xl">
                <div className="w-full mx-auto text-center align-center">
                    <h2 className="text-blue-600 uppercase tracking-widest mb-2">Our Team</h2>
                    <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
                    <p className="text-2xl text-gray-600 mb-8">Passionate. Proactive. Expert.</p>
                    <div className="w-full flex justify-center">
                        <div className="flex flex-wrap justify-center basis-4/5 grow-0 shrink-0 m-6">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center px-14 mb-16">
                                    <img
                                        src={member.imgSrc}
                                        alt={member.name}
                                        className="w-56 h-56 mx-auto rounded-[20px] mb-4 hover:scale-105 transition object-cover shadow-xl"
                                    />
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-gray-500">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </video>
            </div>


            <Parallax bgImage="https://cdn.pixabay.com/photo/2016/01/14/20/14/desk-1140699_1280.jpg" strength={400}>
                <section className="text-gray-600 body-font" style={{
                    backgroundImage: 'url(https://source.unsplash.com/1600x900/?testimonials)',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className="text-[65px] title-font text-gray

                             -900 mb-12 text-center font-black text-white uppercase">Testimonials</h1>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded-[12px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.161h-850.07C33.604 57.161 0 90.765 0 132.561v709.915c0 41.796 33.604 75.4 75.4 75.4h850.07c41.796 0 75.4-33.604 75.4-75.4V132.561c0-41.796-33.604-75.4-75.4-75.4zm-75.4 743.276H125.4V232.854h724.236v567.583zm-425.104-494.398l-40.28 3.75c-4.482.409-8.802 2.203-12.518 5.109-3.717 2.906-6.662 6.812-8.586 11.359l-32.404 75.457c-3.724 8.683-6.546 17.644-8.172 26.623-2.634 15.056-6.857 29.81-12.492 43.998-6.8 17.619-16.139 33.922-27.729 48.343-10.149 12.687-22.382 23.764-36.235 32.813-8.515 5.496-17.389 10.35-26.587 14.571-14.294 6.789-29.555 12.601-45.546 17.278-3.047.875-6.087 1.733-9.122 2.608l10.17 23.73c3.158 7.376 6.464 14.646 10.008 21.686 10.728 20.528 25.455 38.532 43.702 53.022 7.93 6.29 16.392 11.934 25.262 16.812 18.738 10.29 38.927 18.681 60.225 25.04 14.787 4.281 29.891 7.691 45.248 10.2l-7.46-17.41c-3.067-7.164-6.538-14.153-10.391-20.901-9.631-17.249-22.163-32.388-37.391-44.94-13.364-11.156-28.497-20.328-44.833-27.287-17.746-7.486-35.944-13.198-54.473-17.175-6.522-1.385-13.07-2.614-19.64-3.643l33.117-4.163c4.461-.58 8.855-1.716 13.112-3.393 4.259-1.676 8.393-4.047 12.26-7.081 3.866-3.034 7.437-6.682 10.543-10.838 3.105-4.157 5.621-8.842 7.381-13.936l34.17-97.77c4.325-12.379 8.771-24.584 13.02-36.814 7.524-21.53 18.88-41.881 33.422-60.302 14.541-18.421 32.213-34.505 52.331-47.737 13.49-8.976 27.762-16.618 42.63-22.888 20.055-8.438 40.956-14.814 62.514-19.073 7.018-1.376 14.06-2.532 21.118-3.479-3.229 1.729-6.52 3.385-9.854 4.98-7.86 3.607-15.68 7.547-23.317 11.872-19.515 11.142-38.129 23.591-55.558 37.288-17.43 13.696-33.178 28.615-47.159 44.583-14.095 16.027-26.149 32.973-36.057 50.724-7.914 14.391-14.922 29.221-20.888 44.385-5.965 15.164-11.11 30.621-15.415 46.281l-2.137 8.062z" />
                                    </svg>
                                    <p className="leading-relaxed mb-6">I was totally surprised by the help of ING Skills Academy. , libero soluta earum iusto eaque provident, cumque voluptate assumenda iure illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <a className="inline-flex items-center">
                                        <img src="https://plus.unsplash.com/premium_photo-1679589214550-6028ebf28203?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font text-green-600 font-medium">Saugat Ghimire</span>
                                            <span className="text-gray-500 text-sm">Product Designer</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded-[12px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400  mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.161h-850.07C33.604 57.161 0 90.765 0 132.561v709.915c0 41.796 33.604 75.4 75.4 75.4h850.07c41.796 0 75.4-33.604 75.4-75.4V132.561c0-41.796-33.604-75.4-75.4-75.4zm-75.4 743.276H125.4V232.854h724.236v567.583zm-425.104-494.398l-40.28 3.75c-4.482.409-8.802 2.203-12.518 5.109-3.717 2.906-6.662 6.812-8.586 11.359l-32.404 75.457c-3.724 8.683-6.546 17.644-8.172 26.623-2.634 15.056-6.857 29.81-12.492 43.998-6.8 17.619-16.139 33.922-27.729 48.343-10.149 12.687-22.382 23.764-36.235 32.813-8.515 5.496-17.389 10.35-26.587 14.571-14.294 6.789-29.555 12.601-45.546 17.278-3.047.875-6.087 1.733-9.122 2.608l10.17 23.73c3.158 7.376 6.464 14.646 10.008 21.686 10.728 20.528 25.455 38.532 43.702 53.022 7.93 6.29 16.392 11.934 25.262 16.812 18.738 10.29 38.927 18.681 60.225 25.04 14.787 4.281 29.891 7.691 45.248 10.2l-7.46-17.41c-3.067-7.164-6.538-14.153-10.391-20.901-9.631-17.249-22.163-32.388-37.391-44.94-13.364-11.156-28.497-20.328-44.833-27.287-17.746-7.486-35.944-

13.198-54.473-17.175-6.522-1.385-13.07-2.614-19.64-3.643l33.117-4.163c4.461-.58 8.855-1.716 13.112-3.393 4.259-1.676 8.393-4.047 12.26-7.081 3.866-3.034 7.437-6.682 10.543-10.838 3.105-4.157 5.621-8.842 7.381-13.936l34.17-97.77c4.325-12.379 8.771-24.584 13.02-36.814 7.524-21.53 18.88-41.881 33.422-60.302 14.541-18.421 32.213-34.505 52.331-47.737 13.49-8.976 27.762-16.618 42.63-22.888 20.055-8.438 40.956-14.814 62.514-19.073 7.018-1.376 14.06-2.532 21.118-3.479-3.229 1.729-6.52 3.385-9.854 4.98-7.86 3.607-15.68 7.547-23.317 11.872-19.515 11.142-38.129 23.591-55.558 37.288-17.43 13.696-33.178 28.615-47.159 44.583-14.095 16.027-26.149 32.973-36.057 50.724-7.914 14.391-14.922 29.221-20.888 44.385-5.965 15.164-11.11 30.621-15.415 46.281l-2.137 8.062z" />
                                    </svg>
                                    <p className="leading-relaxed mb-6">ING Skills Academy has helped me grow immensely in my career.ctetur adipissequi nostrum tempore aliquam inventore ut. Sit iure dolorum voluptatum! Sunt nobis libero psum dolor sit amet consectetur, adipisicing elit. Corrupti dolore deleniti illo aliquid quasi illum laudantium hic quisquam, eius dolorum repellat minima nostrum? Obcaecati, tempore.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://plus.unsplash.com/premium_photo-1661751140625-2b01ae1d681d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-green-600">Bhusan Luitel</span>
                                            <span className="text-gray-500 text-sm">Software Engineer</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>


            <section className="text-gray-600 body-font relative" style={{
                backgroundImage: 'url(https://source.unsplash.com/1600x900/?contact)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9203294959775!2d85.32774247591028!3d27.688857176193128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8da13af1173a69a1%3A0x2d42f1f2bf03d1bd!2sING%20Skill%20Academy!5e0!3m2!1sen!2snp!4v1719573893940!5m2!1sen!2snp"
                            style={{ filter: 'grayscale(0) contrast(1) opacity(1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Kamal Marga,Kathmandu,
                                    <br />ING Skills Academy</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a href="mailto:ingskillsacademy@iic.edu.np" className="text-indigo-500 leading-relaxed">
                                    ingskillsacademy@iic.edu.np
                                </a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Aboutus;

