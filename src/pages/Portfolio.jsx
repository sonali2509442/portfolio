



import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {

  const trackRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - trackRef.current.offsetLeft;

    trackRef.current.scrollLeft =
      scrollLeft - (x - startX) * 1.3;
  };


  const projects = [
     {
      name: "Upahar",
      year: "2026",
      type: "E-commerce",
      title: "A little more personal than a regular gift store.",
      desc: "A gifting platform where users can explore handmade gifts and add personal messages, videos, QR memories and more.",
      tags: ["React", "MongoDB", "Tailwind", "JWT"],
      stats: ["JWT authentication", "Cloudinary uploads"],
      link: "View project →",
      image: "public/web1.png",
      url: "https://upahar-one.vercel.app/",
    },
    {
      name: "Travel Docu",
      year: "2026",
      type: "Web App",
      title: "A place for travel stories to live together.",
      desc: "A travel documentary platform where people can discover, share and save real travel stories, places, food and experiences.",
      tags: ["React", "Tailwind", "Node.js", "MongoDB"],
      stats: ["Responsive UI", "REST API integration"],
      link: "View project →",
      image: "/public/web2.png",
      url: "https://traveldoc-steel.vercel.app/",
    },
   
  ];


  const life = [
    {
      image: "/grp1.jpg",
      title: "college days",
      rotate: "-rotate-2",
    },
    
    //   image: "/images/hangout-1.jpg",
    //   title: "good places, good people",
    //   rotate: "rotate-2",
    // },
    {
      image: "public/food.jpg",
      title: "food comes first",
      rotate: "-rotate-1",
    },
    {
      image: "/clg.jpg",
      title: "somewhere between lectures",
      rotate: "rotate-2",
    },
    {
      image: "public/escape.jpg",
      title: "little escapes",
      rotate: "-rotate-2",
    },
    {
      image: "public/food2.jpg",
      title: "probably thinking about food",
      rotate: "rotate-1",
    },
  ];


  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
    "Responsive Design",
  ];


  return (
    <div className="bg-[#FFFAD3] text-[#24211E] font-sans overflow-x-hidden">


      {/* Navbar */}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFCB56]/90 backdrop-blur-md border-b border-[#D9D5CE]">

        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

          <a
            href="#hero"
            className="font-hand font-bold text-2xl"
          >
            Sonali.
          </a>


          <div className="hidden md:flex items-center gap-7 text-sm font-medium">

            <a
              href="#about"
              className="text-[#6B655E] hover:text-[#24211E] transition"
            >
              About
            </a>

            <a
              href="#work"
              className="text-[#6B655E] hover:text-[#24211E] transition"
            >
              Work
            </a>

            <a
              href="#life"
              className="text-[#6B655E] hover:text-[#24211E] transition"
            >
              Life
            </a>

            <a
              href="#contact"
              className="text-[#6B655E] hover:text-[#24211E] transition"
            >
              Contact
            </a>

            <a
              href="/SonaliRoutuf_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-[#24211E] px-5 py-2 rounded-full hover:bg-[#24211E] hover:text-[#F7F5F0] transition"
            >
              Resume ↗
            </a>

          </div>

        </div>

      </nav>



      {/* Hero */}

      <header
        id="hero"
        className="min-h-[92svh] flex items-center pt-28 pb-16 relative"
      >

        <div className="max-w-[1180px] mx-auto px-6 md:px-8 relative w-full">


          {/* Small floating notes */}

          <span className="hidden md:block absolute top-[18%] right-[14%] text-3xl animate-bounce text-blue-500">
            ✦
          </span>

          <span className="hidden md:block absolute top-[58%] right-[23%] text-2xl rotate-12">
            ☕
          </span>

          <span className="hidden md:block absolute top-[38%] right-[4%] font-hand text-xl rotate-[-8deg] text-fuchsia-400">
            code ↓
          </span>


          <div className="max-w-4xl">


            {/* Availability */}

            <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white border border-[#D9D5CE] px-4 py-2 rounded-full text-[#2a8a0f] mb-7">

              <span className="text-[0.6rem]">
                ●
              </span>

              Open to opportunities

            </div>


            <div className="font-hand text-xl md:text-2xl mb-5">
              hello, jiiii :)
            </div>


            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[4.5rem] leading-[0.9] font-extrabold tracking-[-0.06em]">

              Hey, I'm{" "}

              <span className="font-hand font-bold text-[#FF9100]">
                Sonali.
              </span>

            </h1>


            <p className="text-xl md:text-2xl max-w-2xl mt-8 leading-relaxed text-[#5D5751]">

              I can't center a div without googling it — but I promise the end result looks
            like I never had to. Frontend developer, fresher, genuinely obsessed with clean UI.

            </p>


            <div className="flex items-center gap-4 mt-9 flex-wrap">


            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sonalirout364@gmail.com&su=Let's%20work%20together"
  target="_blank"
  rel="noreferrer"
  className="bg-[#FF9100] text-white px-7 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition text-[#FF9100]"
>
  Hire Me
</a>


              <a
                href="/SonaliRoutuf_Resume.pdf"
                download
                className="border border-[#24211E] px-7 py-3.5 rounded-full font-semibold hover:bg-[#FF9100] hover:text-[#F7F5F0] transition"
              >
                Download Resume ↓
              </a>
</div>
<div>
        <span className="font-hand text-xl text-muted gap-5 mt-528">
              My GitHub streak is longer than my attention span. Replies guaranteed :)
            </span>

            </div>


            <div className="flex items-center gap-5 mt-8 text-sm text-[#77716A]">

              <span>
                React.js
              </span>

              <span>
                •
              </span>

              <span>
                JavaScript
              </span>

              <span>
                •
              </span>

              <span>
                Next.js
              </span>

              <span>
                •
              </span>

              <span>
                TypeScript
              </span>

              <span>
                •
              </span>

              <span>
                Frontend
              </span>

            </div>


          </div>


          <div className="flex justify-end mt-10 md:mt-4">

            <div className="font-hand text-xl md:text-2xl rotate-[-4deg] text-emerald-600 ">

              React • coffee • repeat

              <span className="block text-right text-2xl">
                ↓
              </span>

            </div>

          </div>

        </div>

      </header>



      {/* About */}

<section
  id="about"
  className="py-28 md:py-36"
>

  <div className="max-w-[1180px] mx-auto px-6 md:px-8">

    <div className="font-hand text-2xl mb-3">
      Dear Diary,
    </div>


    <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-center">


      {/* Photo + Doodles */}

      <div className="relative h-[500px]">


        {/* Polaroid */}

        <motion.div
          initial={{ opacity: 0, rotate: -10, y: 30 }}
          whileInView={{ opacity: 1, rotate: -5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] bg-white p-4 pb-12 shadow-[0_18px_40px_rgba(0,0,0,0.14)] z-10"
        >

          <img
            src="/20250301_202123.jpg"
            alt="Sonali"
            className="w-[245px] h-[300px] object-cover"
          />

          <p className="font-hand text-xl text-center mt-3">
            somewhere along the way :)
          </p>

        </motion.div>


        {/* Tape */}

        <div className="absolute left-[43%] top-[7%] w-24 h-7 bg-[#e8dfce]/80 rotate-[-4deg] z-20"></div>


        {/* Laptop doodle */}

        <svg
          className="doodle absolute left-[2%] top-[4%] w-20 h-20 rotate-[-8deg] text-amber-500"
          viewBox="0 0 100 100"
        >

          <path
            d="M20 62 L27 25 L75 25 L82 62 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M15 66 Q50 72 85 66 L78 75 L22 75 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text
            x="37"
            y="50"
            fontSize="13"
            fontFamily="monospace"
          color="blue"
          >
            {"</>"}
          </text>

        </svg>


        {/* Sparkle */}

        <svg
          className="doodle absolute right-[7%] top-[7%] w-14 h-14 rotate-[8deg] text-indigo-400"
          viewBox="0 0 100 100"
        >

          <path
            d="M50 8 L57 42 L92 50 L57 58 L50 93 L43 58 L8 50 L43 42 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />

        </svg>


        {/* Coffee doodle */}

        <svg
          className="doodle absolute left-[-2%] top-[38%] w-20 h-20 rotate-[-7deg]"
          viewBox="0 0 100 100"
        >

          <path
            d="M20 40 Q20 70 50 70 Q75 70 75 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M75 47 Q92 45 88 60 Q85 68 73 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M35 28 Q30 20 36 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M52 28 Q47 20 53 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <text
            x="25"
            y="88"
            fontSize="13"
            fontFamily="cursive"
          >
            coffee
          </text>

        </svg>


        {/* Headphone doodle */}

        <svg
          className="doodle absolute right-[-1%] top-[38%] w-20 h-20 rotate-[7deg] text-pink-500"
          viewBox="0 0 100 100"
        >

          <path
            d="M22 55 Q22 20 50 20 Q78 20 78 55"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <rect
            x="15"
            y="52"
            width="16"
            height="27"
            rx="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <rect
            x="69"
            y="52"
            width="16"
            height="27"
            rx="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M31 70 Q50 87 69 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

        </svg>


        {/* Bug doodle */}

        <svg
          className="doodle absolute left-[4%] bottom-[5%] w-20 h-20 rotate-[8deg] text-red-600"
          viewBox="0 0 100 100"
        >

          <ellipse
            cx="50"
            cy="52"
            rx="19"
            ry="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <circle
            cx="50"
            cy="28"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <circle cx="46" cy="26" r="2" fill="currentColor" />
          <circle cx="54" cy="26" r="2" fill="currentColor" />

          <path
            d="M32 43 L18 35"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M32 55 L15 55"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M33 67 L18 76"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M68 43 L82 35"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M68 55 L85 55"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M67 67 L82 76"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

        </svg>


        {/* Rocket doodle */}

        <svg
          className="doodle absolute right-[5%] bottom-[2%] w-20 h-20 rotate-[-10deg] text-red-500"
          viewBox="0 0 100 100"
        >

          <path
            d="M25 70 Q35 30 70 18 Q80 52 45 77 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          <circle
            cx="61"
            cy="37"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M40 70 L35 86 L50 76"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M27 74 Q15 78 12 90 Q24 87 34 82"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M30 87 Q25 92 20 94"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

        </svg>


        {/* Little arrows */}

        <svg
          className="doodle absolute left-[25%] top-[18%] w-14 h-14 rotate-[-20deg]"
          viewBox="0 0 100 100"
        >

          <path
            d="M10 70 Q45 25 85 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M70 25 L87 35 L72 45"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </svg>


        {/* Handwritten doodle text */}

        <div className="absolute left-[4%] top-[22%] font-hand text-xl rotate-[-10deg]">
          code & build
        </div>

        <div className="absolute right-[4%] top-[24%] font-hand text-xl rotate-[8deg]">
          good music :)
        </div>

        <div className="absolute left-[23%] bottom-[0%] font-hand text-xl rotate-[-5deg]">
          bugs again...
        </div>

        <div className="absolute right-[19%] bottom-[0%] font-hand text-xl rotate-[7deg]">
          big dreams →
        </div>


      </div>


      {/* About text */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

          From learning,
          experimenting, and
          breaking things to
          making them work...

        </h2>


        <p className="text-lg leading-8 text-[#5D5751] mt-7">

          It started with a random YouTube tutorial
          and a lot of confused Googling. Somewhere between
          breaking my first layout and finally fixing it,
          I realized I genuinely liked this.

        </p>


        <p className="text-lg leading-8 text-[#5D5751] mt-5">

          A lot of small projects, a lot of bugs, and
          slowly getting better at both writing code
          and figuring out how to make things feel good
          to use.

        </p>


        <div className="font-hand text-2xl mt-7 text-amber-400">
          - still learning, still building :)
        </div>

      </motion.div>


    </div>

  </div>

</section>

      {/* Skills */}

      <section className="py-12 border-y border-[#D9D5CE]">

        <div className="max-w-[1180px] mx-auto px-6 md:px-8">


          <div className="flex gap-3 flex-wrap items-center">

            <span className="font-hand text-xl mr-3">
              currently into →
            </span>


            {skills.map((skill) => (

              <span
                key={skill}
                className="border border-[#CFCAC1] bg-[#f5da52] rounded-full px-5 py-2 text-sm hover:bg-white transition"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </section>



      {/* Work */}

      <section
        id="work"
        className="py-28 md:py-36"
      >

        <div className="max-w-[1180px] mx-auto px-6 md:px-8">


          <div className="font-hand text-2xl mb-3 text-amber-300">
            this is what a fresher's grind looks like
          </div>


          <div className="flex items-end justify-between gap-6 mb-12">

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
             Projects I've worked on
            </h2>

            <span className="hidden md:block font-hand text-xl rotate-[-4deg]">
              built with lots of debugging :)
            </span>

          </div>


          <div className="flex flex-col gap-10">


            {projects.map((project, index) => (

              <div
                key={project.name}
                className="bg-white border border-[#D9D5CE] rounded-2xl p-5 md:p-7 grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center hover:-translate-y-1 transition duration-300"
              >


                {/* Project image */}

                <div
                  className={`overflow-hidden rounded-xl bg-[#E9E5DD] ${
                    index % 2 === 1
                      ? "md:order-2"
                      : ""
                  }`}
                >

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full aspect-[16/10] object-cover hover:scale-[1.03] transition duration-500"
                  />

                </div>


                {/* Project content */}

                <div
                  className={
                    index % 2 === 1
                      ? "md:order-1"
                      : ""
                  }
                >


                  <div className="flex gap-2 items-center text-sm text-[#77716A] mb-4 flex-wrap">

                    <span>
                      {project.name}
                    </span>

                    <span>
                      •
                    </span>

                    <span>
                      {project.year}
                    </span>

                    <span>
                      •
                    </span>

                    <span>
                      {project.type}
                    </span>

                  </div>


                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {project.title}
                  </h3>


                  <p className="text-lg leading-8 text-[#66615B] mt-5">
                    {project.desc}
                  </p>


                  <div className="flex gap-2 flex-wrap mt-6">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="text-sm border border-[#CFCAC1] bg-[#F7F5F0] rounded-full px-4 py-1.5"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>


                  <div className="flex gap-5 flex-wrap mt-6">

                    {project.stats.map((stat) => (

                      <div
                        key={stat}
                        className="text-sm font-semibold text-[#6B655E]"
                      >
                        ✓ {stat}
                      </div>

                    ))}

                  </div>





                 <a
  href={project.url}
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-7 font-semibold border-b-2 border-[#24211E] pb-1 hover:opacity-60 transition"
>
  {project.name === "Upahar"
    ? "View Upahar →"
    : "View Travel Docu →"}
</a>


                </div>

              </div>

            ))}


          </div>

        </div>

      </section>



      {/* My Life So Far */}

      <section
        id="life"
        className="py-28 md:py-36 bg-[#FDC086]"
      >

        <div className="max-w-[1180px] mx-auto px-6 md:px-8">


          <div className="font-hand text-2xl mb-3">
            okay, enough about code
          </div>


          <div className="flex items-end justify-between gap-6 mb-10">


            <div>

              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                My life so far
              </h2>

              <p className="text-lg text-[#6B655E] mt-3">
                college, food, places and little things I like.
              </p>

            </div>


            <span className="hidden md:block font-hand text-xl rotate-[-4deg]">
              drag this →→
            </span>


          </div>


          <div
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            className="flex gap-8 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
          >


            {life.map((item) => (

              <div
                key={item.title}
                className={`flex-shrink-0 w-[270px] md:w-[310px] bg-white p-3 pb-7 shadow-lg ${item.rotate}`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[330px] object-cover"
                  draggable="false"
                />

                <p className="font-hand text-xl text-center mt-4">
                  {item.title}
                </p>

              </div>

            ))}


          </div>

        </div>

      </section>



      {/* Little Note */}

      <section className="py-28 md:py-36">

        <div className="max-w-[900px] mx-auto px-6 text-center">


          <div className="font-hand text-2xl mb-5">
            a tiny note
          </div>


          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

            I don't have everything figured out.
            And honestly, I like it that way.

          </h2>


          <p className="text-lg md:text-xl text-[#6B655E] max-w-2xl mx-auto mt-7 leading-8">

            I'm still learning, experimenting, making mistakes
            and building things that make me better at what I do.

          </p>


          <a
            href="/SonaliRoutuf_Resume.pdf"
            download
            className="inline-block mt-8 border border-[#24211E] px-6 py-3 rounded-full font-semibold hover:bg-[#24211E] hover:text-[#F7F5F0] transition"
          >
            Download my resume ↓
          </a>


        </div>

      </section>



      {/* Footer */}

      <footer
        id="contact"
        className="bg-[#FDC086] text-[#121210] pt-28 pb-10"
      >

        <div className="max-w-[1180px] mx-auto px-6 md:px-8">


          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-16">


            <div>


              <div className="font-hand text-2xl mb-5 text-[#b53616]">
                okay, that's me :)
              </div>


              <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-[-0.05em]">

                a
frontend developer
who loves to build
things that matter?

                <span className="font-hand font-normal block mt-2">
                  cool.
                </span>

              </h2>


              <p className="text-[#b51a0c] text-lg max-w-lg mt-8 leading-7">
If you think I could be a good fit for your team, I’d love to hear from you.

              </p>


              <a
                href="mailto:your.email@example.com"
                className="inline-block mt-8 bg-[#380606] text-[#e2dbd3] px-7 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition"
              >
                Say hello →
              </a>


            </div>


            <div className="flex flex-col justify-end">


              <div className="font-hand text-xl text-[#d64114] mb-5">
                find me here
              </div>


              <div className="flex flex-col gap-4 text-lg">


                <a
                  href="https://github.com/sonali2509442"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#CFC6BB] transition"
                >
                  GitHub ↗
                </a>


                <a
                  href="https://www.linkedin.com/in/sonali-rout-956467253"
                  className="hover:text-[#CFC6BB] transition"
                >
                  LinkedIn ↗
                </a>


                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sonalirout364@gmail.com&su=Let's%20work%20together"
  target="_blank"
  rel="noreferrer"
                  className="hover:text-[#CFC6BB] transition"
                >
                  Email ↗
                </a>


                <a
                  href="\SonaliRoutuf_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#CFC6BB] transition"
                >
                  Resume ↗
                </a>


              </div>

            </div>

          </div>


          <div className="border-t border-[#4A4641] mt-24 pt-7 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#2d1005]">


            <span>
              © 2026 Sonali Rout
            </span>


            <span className="font-hand text-base">
              built with React, too much coffee & curiosity :)
            </span>


            <a
              href="#hero"
              className="hover:text-[#F7F5F0] transition"
            >
              back to top ↑
            </a>


          </div>


        </div>

      </footer>


    </div>
  );
}
export default Portfolio;