"use client";
import React, { useState, ChangeEvent } from 'react';
import ShimmerButton from '@/components/magicui/shimmer-button';
import IconCloud from '@/components/magicui/icon-cloud';
import LetterPullup from '@/components/magicui/letter-pullup';
import Link from 'next/link';

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

const IGReelsDownloader: React.FC = () => {
  const [url, setUrl] = useState<string>('');

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleDownload = () => {
    // Implement the download functionality here
    console.log('Download URL:', url);
  };

  return (
    <div style={{ backgroundImage: 'url("/bg-img.jpg")' }} className="min-h-screen font-bold flex flex-col items-center justify-center bg-black text-white p-4">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center h-[80px] justify-between p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-[50px] text-white">
        <div className="flex items-center">
          <LetterPullup className="text-white" words={'IGReelsDownloader'} delay={0.05} />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-pink-600">
            Home
          </a>
          <a href="#about" className="hover:text-pink-600">
            About
          </a>
          <a href="#services" className="hover:text-pink-600">
            Services
          </a>
          <a href="/app.apk" download className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700">
            App Download
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div
        id="home"
        className="flex flex-col items-center justify-center h-screen w-full"
        style={{ backgroundImage: 'url("/bg-img.jpg")' }}
      >
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
            className="bg-white bg-opacity-10 backdrop-blur-md  text-white w-full p-2 rounded-lg focus:outline-none"
          />
        </div>

        <ShimmerButton className="shadow-2xl relative top-[-350px]">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-pink-100/10 lg:text-lg">
            Download
          </span>
        </ShimmerButton>
      </div>

      {/* About Section */}
      <div id="about" className="w-screen p-20 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-4">About IG Reels Downloader</h2>
        <p className="mb-4">
          IG Reels Downloader is a powerful and easy-to-use tool that allows you to download Instagram Reels quickly and effortlessly. Whether you want to save your favorite Reels for offline viewing or share them with friends, our downloader has got you covered.
        </p>
        <p className="mb-4">
          Our mission is to provide a seamless and reliable service for Instagram users who wish to download and enjoy Reels content without any hassle. We prioritize user experience and ensure that the download process is straightforward and efficient.
        </p>
        <p className="mb-4">
          With IG Reels Downloader, you can:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Download Reels in high quality</li>
          <li>Save Reels directly to your device</li>
          <li>Enjoy an ad-free downloading experience</li>
          <li>Access your downloaded Reels anytime, anywhere</li>
        </ul>
        <p className="mb-4">
          Join thousands of users who trust IG Reels Downloader for their Instagram Reels downloading needs. Experience the convenience and reliability of our service today!
        </p>
      </div>

      {/* Services Section */}
      <div id="services" className="w-screen p-20 mt-10 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="mb-4">
          At IG Reels Downloader, we offer a range of services to enhance your Instagram experience. Our services include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>High-Speed Downloads: Enjoy fast and efficient downloads of your favorite Instagram Reels.</li>
          <li>User-Friendly Interface: Our platform is designed with simplicity and ease of use in mind, making the download process quick and easy for everyone.</li>
          <li>High-Quality Downloads: Ensure that your downloaded Reels maintain their original quality.</li>
          <li>Safe and Secure: We prioritize your privacy and security, ensuring that your data is protected at all times.</li>
          <li>24/7 Customer Support: Our dedicated support team is available around the clock to assist you with any questions or issues you may have.</li>
          <li>Regular Updates: We continuously update our platform to improve performance and add new features.</li>
        </ul>
        <p className="mb-4">
          We are committed to providing the best possible service to our users. Whether you are a casual user or an Instagram influencer, IG Reels Downloader is here to meet your needs.
        </p>
      </div>

      {/* About Developer Section */}
      <div id="about-developer" className="w-screen p-20 mt-10 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-4">About the Developer</h2>
        <div className="flex items-center mb-6">
          <img src="/yash.jpg" alt="Developer Avatar" className="w-30 h-40 rounded-[10px] mr-4 shadow-md shadow-black" />
          <div>
            <h3 className="text-xl font-bold">Yash Mhatre</h3>
            <p className="text-gray-300">Passionate developer with expertise in React and frontend development.</p>
          </div>
        </div>
        <p className="mb-4">
          Yash mhatre is the creator of IG Reels Downloader, aiming to provide a convenient solution for Instagram Reels enthusiasts to download their favorite content seamlessly.
        </p>
        <p className="mb-4">
          If you have any feedback or suggestions for IG Reels Downloader, Yash would love to hear from you! Feel free to reach out through our support channels.
        </p>
        <p>
          Stay connected with John:
          <a href="#" className="text-pink-600 hover:text-pink-700"> LinkedIn</a>,
          <a href="#" className="text-pink-600 hover:text-pink-700"> GitHub</a>,
          <a href="#" className="text-pink-600 hover:text-pink-700"> Twitter</a>
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg text-white text-center mt-10">
        <p>&copy; 2024 IGReelsDownloader. All rights reserved.</p>
        <p>Follow us on <a href="#" className="text-pink-600 hover:text-pink-700">Instagram</a>, <a href="#" className="text-pink-600 hover:text-pink-700">Twitter</a>, and <a href="#" className="text-pink-600 hover:text-pink-700">Facebook</a></p>
      </footer>
    </div>
  );
};

export default IGReelsDownloader;
