"use client";

// import Image from "next/image";
// import { FaInstagram } from "react-icons/fa";
//import { FiHeart, FiMessageCircle } from "react-icons/fi";

// const instagramPosts = [
//   {
//     src: "/images/home-section/insta1.jpg",
//     alt: "Helicopter flying above a Himalayan glacier",
//     title: "Everest Glacier Flight",
//     likes: 284,
//     comments: 8,
//   },
//   {
//     src: "/images/home-section/insta7.jpg",
//     alt: "Helicopter approaching the Khumbu Glacier",
//     title: "Khumbu Glacier Approach",
//     likes: 300,
//     comments: 10,
//   },
//   {
//     src: "/images/home-section/insta3.jpg",
//     alt: "Helicopter flying above the green hills of Nepal",
//     title: "Flying Above Nepal",
//     likes: 241,
//     comments: 6,
//   },
//   {
//     src: "/images/home-section/insta4.jpg",
//     alt: "Mountain valley and rock formations in Nepal",
//     title: "Mountain Valleys",
//     likes: 196,
//     comments: 5,
//   },
//   {
//     src: "/images/home-section/insta5.jpg",
//     alt: "Trekker walking through the Himalayan landscape",
//     title: "Himalayan Journey",
//     likes: 275,
//     comments: 9,
//   },
//   {
//     src: "/images/home-section/insta6.jpg",
//     alt: "Snow-covered mountain pass under a blue sky",
//     title: "Gokyo Valley",
//     likes: 218,
//     comments: 7,
//   },
// ];

// const profileStats = [
//   { value: "26", label: "Posts" },
//   { value: "350", label: "Followers" },
//   { value: "1", label: "Following" },
// ];

export default function InstagramSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-7xl py-16 sm:py-14 md:py-24 lg:py-28 px-6 sm:px-6 md:px-10 lg:px-16 flex-col">
        {/* Instagram profile header */}
        <h2 className="mb-4 text-center font-fraunces text-[34px] font-bold leading-tight tracking-[-1.23px] text-[#0A1929] sm:mb-6 sm:text-5xl md:mb-6 md:text-6xl">
          Our Instagram
        </h2>

        {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-8bffaf43-fef4-4dde-ab54-c7ba685037b2"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
