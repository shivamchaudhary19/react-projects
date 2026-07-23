import React, { PureComponent } from 'react'
import headphoneVideo from "../../assets/headphoneVideo.mp4";
import background from "../../assets/background.jpg";

export default function Home () {
    return (
      <>
     <div className="bg-black grid grid-cols-1 lg:grid-cols-3 items-center ">

      {/* Text */}
      <div className="lg:col-span-2 px-6 sm:px-10 lg:px-20 py-12 text-center lg:text-left">

        <h1 className="text-[rgb(217,83,0)] font-bold
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Experience Sound Beyond Limits
        </h1>

        <p className="mt-6 text-white leading-relaxed
          text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
          Discover premium wireless headphones engineered for immersive audio,
          exceptional comfort, and all-day performance. Every beat, every detail,
          exactly as it was meant to be heard.
        </p>

        <button className="mt-8 bg-[rgb(217,83,0)] text-black font-bold
          px-6 py-3 rounded-full hover:scale-95 transition-all duration-300">
          Explore Collection
        </button>

      </div>

      {/* Video */}
      <div className="lg:col-span-1 flex justify-center px-4 sm:px-8 lg:px-6 pb-10 lg:pb-0">

        <video
          src={headphoneVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-md lg:max-w-sm xl:max-w-md"
        />

      </div>

    </div>
      <hr className="border-[#d95300]" />

      {/* Next Section */}


      <div className="relative py-28 overflow-hidden">

          {/* Background */}
          <img
            src={background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex justify-center">
            <div className="text-center px-6 max-w-4xl">

              <p className="uppercase tracking-[0.3em] text-gray-300 text-xs sm:text-sm md:text-base">
                Immersive Sound Experience
              </p>

              <h1 className="mt-4 font-bold text-[#d95300] leading-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Hear Every Beat.
                <br />
                Feel Every Moment.
              </h1>

              <p className="mt-6 text-gray-200
                text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                Experience premium wireless audio with crystal-clear sound,
                active noise cancellation, and all-day comfort.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 rounded-full bg-[#d95300] text-black font-semibold hover:scale-105 transition">
                  Shop Now
                </button>

                <button className="px-8 py-3 rounded-full border border-[#d95300] text-[#d95300] hover:bg-[#d95300] hover:text-black transition">
                  Explore Collection
                </button>
              </div>

            </div>
          </div>

        </div>
      </>
    )
  }
