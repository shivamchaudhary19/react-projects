import React, { PureComponent } from 'react'
import demo from "../../assets/demo.jpg";

export class About extends PureComponent {
  render() {
    return (
      <div className='bg-[rgb(0,0,0)] text-white'>
        <div className='bg-[rgb(0,0,0)]'>
          <h1
          className='font-bold text-3xl text-center pt-5 text-[rgb(217,83,0)]'
          >About Noisy</h1>
        
          <p className='leading-relaxed mt-2 mb-2 px-3 font-normal text-lg text-white'>At Noisy, we believe that sound is more than just something you hear—it's an experience. Our mission is to deliver premium headphones that combine exceptional audio quality, modern design, and lasting comfort.
            </p>
            <p
            className='leading-relaxed mt-2 mb-2 px-3 font-normal text-lg text-white'
            >
            Whether you're listening to music, gaming, working, or travelling, Noisy products are designed to provide an immersive listening experience. Every headphone is crafted with attention to detail, ensuring powerful performance and a stylish look that fits every lifestyle.
            </p>
            <p
            className='leading-relaxed mt-2 pb-5 px-3 font-normal text-lg text-white'
            >
            Built with innovation and quality in mind, Noisy is committed to helping you enjoy every beat, every conversation, and every moment with crystal-clear sound.
          </p>
        </div>

        <div>
          <h2  className='text-3xl font-bold text-center text-[rgb(217,83,0)]'>Our Mission</h2>
          <p
          className='leading-relaxed mt-2 pb-5 px-3 font-normal text-lg text-white'
          >Our mission is to make premium audio accessible to everyone by creating headphones that offer outstanding performance, comfort, and value. We strive to enhance everyday listening experiences through innovative technology and thoughtful design.</p>
        </div>

        <div className='bg-black pb-5'>
          <h1 className="text-3xl font-bold text-center text-[rgb(217,83,0)] mt-5 mb-3">
            Why Choose Noisy?
          </h1>

          <div className="relative bg-[#fffacd] mx-3 rounded-lg grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 p-4">

            <div
            className="flex items-center p-3 text-gray-600"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            >

              <path d="M4 12a8 8 0 0 1 16 0"/>
              <rect x="3" y="12" width="4" height="8" rx="2"/>
              <rect x="17" y="12" width="4" height="8" rx="2"/>

            </svg>

              <div
              className="ml-4 font-semibold flex-1"
              >
              <h1 className='font-bold'>Premium Sound Quality</h1>
              </div>
            </div>

            {/* Long Sessions */}

            <div
            className="flex items-center p-3 text-gray-600"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            >
              <polygon points="11 5 6 9 3 9 3 15 6 15 11 19 11 5"/>
              <path d="M15 9a4 4 0 0 1 0 6"/>
              <path d="M18 6a8 8 0 0 1 0 12"/>
            </svg>

              <div
              className="ml-4 font-semibold flex-1"
              >
              <h1 className='font-bold'>Comfortable for Long Listening Sessions</h1>
              </div>
            </div>

            {/* Stylish */}

            <div
            className="flex items-center p-3 text-gray-600"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            >
              <path d="M12 2l7 7-9 9H3v-7z"/>
              <path d="M16 4l4 4"/>
            </svg>

              <div
              className="ml-4 font-semibold flex-1"
              >
              <h1 className='font-bold'>Modern & Stylish Design</h1>
              </div>
            </div>

          {/* Music */}

          <div
            className="flex items-center p-3 text-gray-600"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            >
              <rect x="3" y="4" width="18" height="12" rx="2"/>
              <path d="M8 20h8"/>
              <path d="M12 16v4"/>
            </svg>

              <div
              className="ml-4 font-semibold flex-1"
              >
              <h1 className='font-bold'>Built for Music, Gaming & Work</h1>
              </div>
            </div>

          {/* Realiable */}

          <div
            className="flex items-center p-3 text-gray-600"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            >
              <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>

              <div
              className="ml-4 font-semibold flex-1"
              >
              <h1 className='font-bold'>Reliable Performance</h1>
              </div>
            </div>


          {/* Affordable */}

          <div
            className="flex items-center p-3 text-gray-600"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            >
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v10"/>
              <path d="M9.5 9.5c0-1.2 1-2 2.5-2s2.5.8 2.5 2-1 2-2.5 2-2.5.8-2.5 2 1 2 2.5 2 2.5-.8 2.5-2"/>
            </svg>

              <div
              className="ml-4 font-semibold flex-1"
              >
              <h1 className='font-bold'>Affordable Premium Experience</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default About