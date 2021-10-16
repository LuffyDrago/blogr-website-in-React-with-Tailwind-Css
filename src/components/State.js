import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

const State = () => {
  return (
    <>
      <section
        className="state py-10 px-5 text-center 
      text-white relative z-10 md:grid md:grid-cols-2 md:text-left xl:px-52"
      >
        <div>
          <div>
            <img src={circles} alt="" className="state-img circles" />
          </div>
          <div>
            <img src={phones} alt="" className="state-img" />
          </div>
        </div>

        <div className="pt-80 px-5 md:py-20">
          <h2 className="text-center text-3xl mb-5 lg:text-4xl 2xl:text-5xl text-white md:text-left">
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default State;
// import phones from "../images/illustration-phones.svg";
// import circles from "../images/bg-pattern-circles.svg";
// const State = () => {
//   return (
//     <>
//       <section
//         className="state py-10 px-5
//        text-white text-center "
//       >
//         <div className="pt-80 px-5">
//           <h2
//             className="text-center text-3xl mb-5
//           lg:text-4xl 2xl:text-5xl text-white"
//           >
//             State of the Art Infrastructure
//           </h2>

//           <p>
//             With reliability and speed in mind, worldwide data centers provide
//             the backbone for ultra-fast connectivity. This ensures your site
//             will load instantly, no matter where your readers are, keeping your
//             site competitive. Free, open, simple Blogr is a free and open source
//             application backed by a large community of helpful developers. It
//             supports features such as code syntax highlighting, RSS feeds,
//             social media integration, third-party commenting tools, and works
//             seamlessly with Google Analytics. The architecture is clean and is
//             relatively easy to learn. Powerful tooling Batteries included. We
//             built a simple and straightforward CLI tool that makes customization
//             and deployment a breeze, but capable of producing even the most
//             complicated sites.
//           </p>
//         </div>

//         <div className="">
//           <div>
//             <img src={circles} alt="" className="state-img circles" />
//           </div>
//           <div>
//             <img src={phones} alt="" className="state-img" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default State;
