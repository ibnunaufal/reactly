import React, { useState } from "react";
import Container from "./container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div className="bg-indigo-300 cursor-pointer min-h-32 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <div style={{ position: "relative", paddingBottom: "56.25%" }}>
            {!playVideo ? (
              <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2" onClick={() => setPlayVideo(!playVideo)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16  lg:w-28 lg:h-28"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Play Video</span>
              </button>
            ) : (
              <iframe
                // src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
                src="https://www.youtube.com/embed/fpZ0eEKzv1A?si=eM8PVAo7Qq4g4ssQ?controls=0&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
              // <iframe width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            )}
          </div>
        </div>
        {/* <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-indigo-300 cursor-pointer max-h-64 bg-gradient-to-tr from-purple-400 to-indigo-700">
            <iframe
              src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
          )}
        </div> */}
      </div>
    </Container>
  );
};

export default Video;
