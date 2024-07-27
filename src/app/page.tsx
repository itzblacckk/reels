"use client"
import { Transition } from '@headlessui/react';
import React, { useState, ChangeEvent } from 'react';
import ShimmerButton from '@/components/magicui/shimmer-button';
import IconCloud from '@/components/magicui/icon-cloud';
import LetterPullup from '@/components/magicui/letter-pullup';

const slugs: string[] = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

interface DownloadData {
  thumbnail_link: string;
  download_link: string;
}

export default function IGReelsDownloader() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);
  const [data, setData] = useState<DownloadData | null>(null);
  const [url, setUrl] = useState<string>('');

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDownload = () => {
    const apiUrl = "http://localhost:3000/api/reels";
    const payload = { url };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(result => {
        setData(result.data[0]);
        console.log('Download Data:', result.data);
      })
      .catch(error => {
        console.error('Error fetching download data:', error);
      });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen font-bold flex flex-col bg-gradient-to-t from-sky-500 to-pink-500 text-white p-4">
      {/* Navigation Bar */}
      <header className="w-full flex items-center justify-between p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-[50px] text-white mb-4">
        <div className="flex items-center">
          <LetterPullup className="text-white text-xl" words={'IGReelsDownloader'} delay={0.05} />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-pink-200 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex h-[30px] space-x-4">
          <a href="#" className="text-white hover:text-pink-500">Home</a>
          <a href="#" className="text-white hover:text-pink-500">About Us</a>
          <a href="#" className="text-white hover:text-pink-500">Services</a>
          <a href="/app.apk" download className="text-white items-center">
            App Download
          </a>
        </nav>
      </header>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform -translate-y-2"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-2"
      >
        <nav className="md:hidden text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-600">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-600">About Us</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-600">Services</a>
            <a href="/app.apk" download className="text-white">
              App Download
            </a>
          </div>
        </nav>
      </Transition>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        <IconCloud iconSlugs={slugs} />

        <div className="w-full max-w-md flex items-center relative top-[-350px] bg-white bg-opacity-10 backdrop-blur-md rounded-[50px] text-white border border-pink-500 p-2 mb-6">
          <img
            aria-hidden="true"
            alt="link-icon"
            src="/link.png"
            className="mr-2 w-10"
          />
          <input
            type="text"
            placeholder="Enter Reels Url..."
            value={url}
            onChange={handleUrlChange}
            className="bg-white bg-opacity-10 backdrop-blur-md text-white w-full p-2 rounded-lg focus:outline-none"
          />
        </div>

        <ShimmerButton className='relative top-[-350px]' onClick={handleDownload}>
          <span className="text-center text-sm font-medium leading-none tracking-tight text-white">
            Download
          </span>
        </ShimmerButton>

        {data && (
          <div className="relative top-[-350px] mt-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 text-white">
              <img src={data.thumbnail_link} alt="Thumbnail" className="w-full rounded-lg mb-4" />
              <div className="flex space-x-4">
                <a
                  href={data.download_link}
                  download
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download Reel
                </a>
                <a
                  href={data.thumbnail_link}
                  download
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download Thumbnail
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* About Section */}
      <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white mb-4">
        <h2 className="text-2xl font-bold mb-2">About IG Reels Downloader</h2>
        <p className="mb-2">
          IG Reels Downloader is a powerful and easy-to-use tool that allows you to download Instagram Reels quickly and effortlessly.
        </p>
        <p className="mb-2">
          Our mission is to provide a seamless and reliable service for Instagram users who wish to download and enjoy Reels content without any hassle.
        </p>
        <p className="mb-2">
          With IG Reels Downloader, you can:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Download Reels in high quality</li>
          <li>Save Reels directly to your device</li>
          <li>Enjoy an ad-free downloading experience</li>
          <li>Access your downloaded Reels anytime, anywhere</li>
        </ul>
      </div>

      {/* Services Section */}
      <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white mb-4">
        <h2 className="text-2xl font-bold mb-2">Our Services</h2>
        <p className="mb-2">
          At IG Reels Downloader, we offer a range of services to enhance your Instagram experience.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>High-Speed Downloads: Enjoy fast and efficient downloads of your favorite Instagram Reels.</li>
          <li>User-Friendly Interface: Our platform is designed with simplicity and ease of use in mind.</li>
          <li>High-Quality Downloads: Ensure that your downloaded Reels maintain their original quality.</li>
          <li>Safe and Secure: We prioritize your privacy and security.</li>
        </ul>
      </div>

      {/* App Download Section */}
      <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-2">Download Our App</h2>
        <p className="mb-2">
          Get the IG Reels Downloader app for seamless and convenient access to all our features on your mobile device.
        </p>
        <a
          href="/app.apk"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download App
        </a>
      </div>
    </div>
  );
}
