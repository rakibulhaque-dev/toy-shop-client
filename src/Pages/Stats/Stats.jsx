import React from 'react';
import CEO from '../../assets/images/ceo-founder.png';
const Stats = () => {
  return (
    <div className="container py-24 mx-auto mt-4 bg-white border rounded-md shadow-lg sm:py-32" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex flex-col items-start justify-between max-w-xl">
            <div className="flex items-center text-xs gap-x-4">
              <time className="text-gray-500">May 16, 2023</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Web Development</a>
            </div>
            <div className="relative group">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">I am Rakib, A MERN Stack Web Developer.

                I trained through 1000+ hours learning HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.Js, Node.Js, Express.Js, and MongoDB.

                I am an expert in HTML, CSS, Bootstrap, Tailwind CSS, daisyUI, JavaScript, ES6, React.js, and comfortable with Node.js, Express.js, MongoDB, Firebase. But I’m always adding new skills to my repertoire. I’m also eager to meet other Developers in the area, so feel free to connect!</p>
            </div>
            <div className="relative flex items-center mt-8 gap-x-4">
              <img src={CEO} alt="" className="w-10 h-10 rounded-full bg-gray-50"></img>
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Rakibul Haque, MERN Stack Developer
                  </a>
                </p>
                <p className="text-gray-600">Co-Founder / CEO</p>
              </div>
            </div>
          </article>
          {/* Add more articles as needed */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
