import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setOffsetY(window.scrollY);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const starsElemetStyle = {
    transform: offsetY !== 0 && `translateX(${offsetY * 0.25}px)`,
  };
  const moonElemetStyle = {
    transform:
      offsetY !== 0 && `translate(${offsetY * 0.7}px,${offsetY * 1.05}px)`,
  };
  const mountainsBehindElemetStyle = {
    transform: offsetY !== 0 && `translateY(${offsetY * 0.5}px)`,
  };
  const mountainsFrontElemetStyle = {
    transform: offsetY !== 0 && `translateY(${-offsetY * 0}px)`,
  };
  const textElementStyle = {
    marginTop: offsetY !== 0 && `${offsetY * 1}px`,
    marginRight: offsetY !== 0 && `${offsetY * 4}px`,
    right: `${-(window.innerWidth / 2 + 50)}px`,
  };
  const buttonElemetStyle = {
    marginTop: offsetY !== 0 && `${offsetY * 1.5}px`,
  };
  const headerElemetStyle = {
    transform: offsetY !== 0 && `translateY(${-offsetY * 0.5}px)`,
  };
  return (
    <>
      <header
        style={headerElemetStyle}
        className="absolute left-0 top-0 p-5 w-full z-50"
      >
        <nav className="flex flex-wrap items-center justify-between text-white p-2">
          <Link
            to={"/"}
            className="font-bold text-xl uppercase tracking-wider ml-4"
          >
            Logo
          </Link>

          <ul className="flex sm:space-x-4 max-sm:flex-col max-sm:gap-2">
            <li>
              <NavLink
                to="/"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""}  hover:text-blue-700 font-medium rounded-full py-2 px-4`}
              >
                Home
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/contact"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""}  hover:text-blue-700 font-medium rounded-full py-2 px-4`}
              >
                Contact
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/collections"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""} hover:text-blue-700 font-medium rounded-full py-2 px-4`}
              >
                Collections
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/about"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""} hover:text-blue-700 font-medium rounded-full py-2 px-4`}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="overflow-hidden before:absolute before:bottom-0 before:w-full before:h-32 before:z-10 before:bg-gradient-to-t from-[rgb(66,23,42)] to-transparent flex items-center justify-center relative p-40  h-screen w-full ">
        <img
          style={starsElemetStyle}
          className="absolute pointer-events-none left-0 top-0 h-full w-full sm:object-cover "
          src="images/stars.png"
          alt="stars"
        />

        <img
          style={moonElemetStyle}
          className="absolute pointer-events-none top-0 left-0 h-full w-full object-scale-down mix-blend-screen"
          src="images/moon.png"
          alt="moon"
        />
        <img
          style={mountainsBehindElemetStyle}
          className="absolute pointer-events-none top-[70px] left-0 h-full w-full sm:object-cover z-11"
          src="images/mountains-back.png"
          alt="mountains-back"
        />
        <h2
          style={textElementStyle}
          className="absolute text-white font-extrabold text-[7.5vw] z-9"
        >
          Desert Scene{" "}
        </h2>
        <button
          style={buttonElemetStyle}
          onClick={() => scrollToSection("explore")}
          className="hover:shadow-[0_0.5em_0.5em_-0.4em_#2b1055] hover:translate-y-[75px] transition-all hover:duration-150 hover:ease-in-out inline-block bg-white px-7 py-2 translate-y-20 text-[#2b1055] text-xl font-bold z-10 rounded-3xl"
        >
          <Link>Explore</Link>
        </button>
        <img
          style={mountainsFrontElemetStyle}
          className="absolute pointer-events-none top-0
           left-0 h-full w-full sm:object-cover"
          src="images/desert-front.png"
          alt="desert-front"
        />
      </section>
      <div id="explore" className="relative p-10 bg-[rgb(66,23,42)]">
        <h2 className="text-4xl mb-5 text-bold text-white">
          Parallax Scrolling
        </h2>
        <p className="text-lg text-white">
          Parallax scrolling is a visual effect used in web design and computer
          graphics to create an illusion of depth and movement on a
          two-dimensional surface, typically a webpage. It involves multiple
          layers of content moving at different speeds as the user scrolls down
          the page, creating the perception of depth and perspective.
          <br />
          The concept is based on the parallax effect, which is the apparent
          displacement or difference in the position of an object when viewed
          from two different points. In the context of web design, parallax
          scrolling is achieved by arranging different elements (such as images,
          text, and graphics) on different layers, each moving at varying speeds
          as the user scrolls. This effect gives the illusion that some elements
          are closer to the viewer while others are farther away, creating a
          sense of depth and immersion.
          <br />
          Parallax scrolling is often used to enhance the visual appeal of
          websites and create a more engaging user experience. It has been
          popularly used in storytelling websites, promotional pages, and
          landing pages, as it can captivate users and encourage them to explore
          the content further. In web design, parallax scrolling involves
          positioning different elements, such as images or text, on separate
          layers and then moving these layers at varying speeds as the user
          scrolls down the webpage. This creates a visually engaging and dynamic
          effect, making the website more interactive and immersive. Parallax
          scrolling can be used to tell a story, showcase products, or simply
          add an aesthetically pleasing touch to the website. In video games,
          parallax scrolling has been used since the early days of 2D games to
          simulate depth in a side-scrolling environment. By moving background
          layers slower than the foreground layers, developers could create a
          sense of distance and movement, even though the game is actually
          presented on a two-dimensional plane.
          <br />
          While parallax scrolling can be visually impressive, it's important to
          consider that excessive use of the effect can also lead to usability
          issues, especially on mobile devices or for users with motion
          sensitivity. As with any design element, balance and careful
          implementation are key to ensuring a positive user experience.
        </p>
      </div>
    </>
  );
};
export default Home;
