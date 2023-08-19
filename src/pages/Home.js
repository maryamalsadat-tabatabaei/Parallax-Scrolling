import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Home = () => {
  const [starsElemetStyle, setStarsElemetStyle] = useState("left-0");
  const [moonElemetStyle, setMoonElemetStyle] = useState("top-0");
  const [mountainsBehindElemetStyle, setMountainsBehindElemetStyle] =
    useState("top-0");
  const [mountainsFrontElemetStyle, setMountainsFrontElemetStyle] =
    useState("top-0");
  const [textElemetStyle, setTextElemetStyle] = useState("right-[-350px]");
  const [buttonElemetStyle, setButtonElemetStyle] = useState("translate-y-20");
  const [headerElemetStyle, setHeaderElemetStyle] = useState("top-0");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let scrollY = window.scrollY;
    setStarsElemetStyle(`translate-x-[${scrollY * 0.25}px]`);
    setMoonElemetStyle(`-translate-y-[${scrollY * 1.05}px]`);
    setMountainsBehindElemetStyle(`-translate-y-[${scrollY * 0.5}px]`);
    setMountainsFrontElemetStyle(`-translate-y-[${scrollY * 0}px]`);
    setTextElemetStyle(`mt-[${scrollY * 1.5}px] mr-[${scrollY * 4}px]`);
    setButtonElemetStyle(`mt-[${scrollY * 1.5}px]`);
    setHeaderElemetStyle(`-translate-y-[${scrollY * 0.5}px]`);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`${headerElemetStyle} absolute left-0 p-5 w-full z-50`}
      >
        <nav className="flex items-center justify-between text-white p-2">
          <Link to={"/"} className="font-bold uppercase tracking-wider ml-4">
            Logo
          </Link>

          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={`${(isActive) =>
                  isActive
                    ? "active"
                    : ""}  hover:text-blue-700  hover:font-bold  rounded-full py-2 px-4 `}
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
                    : ""}  hover:text-blue-700  hover:font-bold  rounded-full py-2 px-4 `}
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
                    : ""} hover:text-blue-700  hover:font-bold  rounded-full py-2 px-4 `}
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
                    : ""} hover:text-blue-700  hover:font-bold  rounded-full py-2 px-4 `}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="overflow-hidden before:absolute before:bottom-0 before:w-full before:h-32 before:z-10 before:bg-gradient-to-t from-[#1c0522] to-transparent flex items-center justify-center relative p-40  h-screen w-full ">
        <img
          className={`${starsElemetStyle} absolute pointer-events-none top-0 h-full w-full object-cover`}
          src="images/stars.png"
          alt="stars"
        />
        <img
          className={`${moonElemetStyle}} absolute pointer-events-none  left-0 h-full w-full object-cover mix-blend-screen`}
          src="images/moon.png"
          alt="moon"
        />
        <img
          className={`${mountainsBehindElemetStyle} absolute pointer-events-none  left-0 h-full w-full object-cover z-11`}
          src="images/mountains_behind.png"
          alt="mountain-behind"
        />
        <h2
          className={`${textElemetStyle} absolute text-white text-[7.5vw] z-9`}
        >
          Moon light{" "}
        </h2>
        <button
          onClick={() => scrollToSection("explore")}
          className={`${buttonElemetStyle} inline-block  bg-white px-7 py-2 text-[#2b1055] text-xl z-10 rounded-3xl`}
        >
          <Link>Explore</Link>
        </button>
        <img
          className={`${mountainsFrontElemetStyle} absolute  pointer-events-none
           left-0 h-full w-full object-cover`}
          src="images/mountains_front.png"
          alt="mountain-front"
        />
      </section>
      <div id="explore" className="relative p-10 bg-[#1c0522]">
        <h2 className="text-3xl mb-5 text-white">Parallax Scrolling</h2>
        <p className="text-lg text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc. t
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </>
  );
};
export default Home;
