"use client"; // Important: Framer Motion requires client-side rendering

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import { useRef, useState } from "react";

interface Paragraph {
  text: string;
  className?: string;
  boldWords?: string[];
}

export default function Home() {
  // Enhanced component for sequential paragraph animation with animated bold words
  function SequentialScrollText({ paragraphs }: { paragraphs: Paragraph[] }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 0.8", "end 0.48"],
    });

    // Calculate total words across all paragraphs
    const allText = paragraphs.map((p) => p.text).join(" ");
    const totalWords = allText.split(" ").length;
    let currentWordIndex = 0;

    return (
      <div ref={containerRef} className="flex flex-col gap-6">
        {paragraphs.map((paragraph, pIndex) => {
          const words = paragraph.text.split(" ");
          const paragraphStartIndex = currentWordIndex;
          currentWordIndex += words.length;

          return (
            <motion.p
              key={pIndex}
              className={`text-light ${paragraph.className || ""}`}
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {words.map((word, wIndex) => {
                const globalWordIndex = paragraphStartIndex + wIndex;
                const wordStart = globalWordIndex / totalWords;
                const wordEnd = (globalWordIndex + 1) / totalWords;

                const color = useTransform(
                  scrollYProgress,
                  [wordStart, wordEnd],
                  ["#888A8B", "#1a1a1a"]
                );

                // Check if this word should be bold
                const shouldBeBold =
                  paragraph.boldWords &&
                  paragraph.boldWords.includes(
                    word.toLowerCase().replace(/[.,!?;]/g, "")
                  );

                // Animate font weight from normal to bold during the same scroll range
                const fontWeight = shouldBeBold
                  ? useTransform(
                      scrollYProgress,
                      [wordStart, wordEnd],
                      [400, 700] // Normal (400) to bold (700)
                    )
                  : 400;

                return (
                  <motion.span
                    key={wIndex}
                    style={{
                      color,
                      fontWeight,
                    }}
                    className="inline"
                  >
                    {word}
                    {wIndex < words.length - 1 && " "}
                  </motion.span>
                );
              })}
            </motion.p>
          );
        })}
      </div>
    );
  }
  function ScrollAnimatedParagraphs({
    paragraphs,
  }: {
    paragraphs: Paragraph[];
  }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 0.8", "end 0.48"],
    });

    // Calculate total words across all paragraphs
    const allText = paragraphs.map((p) => p.text).join(" ");
    const totalWords = allText.split(" ").length;
    let currentWordIndex = 0;

    return (
      <div ref={containerRef} className="flex flex-col">
        {paragraphs.map((paragraph, pIndex) => {
          const words = paragraph.text.split(" ");
          const paragraphStartIndex = currentWordIndex;
          currentWordIndex += words.length;

          return (
            <motion.p
              key={pIndex}
              className={paragraph.className || "mb-6"}
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {words.map((word, wIndex) => {
                const globalWordIndex = paragraphStartIndex + wIndex;
                const wordStart = globalWordIndex / totalWords;
                const wordEnd = (globalWordIndex + 1) / totalWords;

                const color = useTransform(
                  scrollYProgress,
                  [wordStart, wordEnd],
                  ["#888A8B", "#1a1a1a"]
                );

                return (
                  <motion.span
                    key={wIndex}
                    style={{
                      color,
                    }}
                    className="inline"
                  >
                    {word}
                    {wIndex < words.length - 1 && " "}
                  </motion.span>
                );
              })}
            </motion.p>
          );
        })}
      </div>
    );
  }

  const text = "I know what you're thinking. Oh great, another Matt Brown.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.8 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: "easeIn" as const,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [currentLogo, setCurrentLogo] = useState("/images/logos/monomLogo.svg");

  // Define the logo mapping
  const logoMap = {
    "MONOM STUDIO": "/images/logos/monomLogo.svg",
    "MOUSE POTATO LAB": "/images/logos/mousePotato.svg",
    LALO: "/images/logos/laloLogo.svg",
    "BLACK FLAG CREATIVE": "/images/logos/blackFlagLogo.png",
  };

  const [isHovered, setIsHovered] = useState(false);

  const [isImageHovered, setIsImageHovered] = useState(false);

  const digitalImageRef = useRef(null);
  const heroRef = useRef(null);
  const approachRef = useRef(null);
  const imageRef = useRef(null);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);

  // In view triggers
  const approachInView = useInView(approachRef, { once: true, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const digitalImageInView = useInView(digitalImageRef, {
    once: true,
  });

  const contextoLogoRef = useRef(null);
  const curatedLogoRef = useRef(null);

  // Add these useInView hooks near your other useInView declarations
  const contextoLogoInView = useInView(contextoLogoRef, {
    once: true,
    amount: 0.3,
  });
  const curatedLogoInView = useInView(curatedLogoRef, {
    once: true,
    amount: 0.3,
  });

  const digitalNativeParagraphs = [
    {
      text: "I believe that the future is human. Products are meant to make our lives more streamlined and assist us in all our pursuits. I have seen the world wide web from its inception when I was 4 years old since which time I have curated a sense of good user experience.",
      className: "mb-6",
    },
    {
      text: "Now as a father of one in my late 30's I have applied my decades of online life to make a career out of designing and developing digital products for thousands of users.",
      className: "",
    },
  ];

  // Define your paragraphs with bold words specified
  const paragraphs = [
    {
      text: "The current state of design is in flux. I believe that the answer to synthetic machine AI is human, authentic intelligence.",
      className: "",
      boldWords: ["authentic", "intelligence"], // Last 2 words to make bold
    },
    {
      text: "Don't get me wrong, I believe that artificial intelligence does and will continue to play a huge role in our daily lives. I just understand that it is crucial for us as designers to craft thoughtful websites and web apps that are curated by the one thing that AI will never replace, human taste.",
      className: "",
      boldWords: ["human", "taste"], // Last 2 words to make bold
    },
    {
      text: "There is beauty in data and math, which when guided by a person's intuition, leads to effective as well as aesthetically pleasing human-to-computer interactions.",
      className: "mb-38",
      boldWords: ["human-to-computer", "interactions"], // Last 2 words to make bold
    },
  ];

  return (
    <div className="home-page">
      <section className="hero mb-48">
        <div className="full-height flex flex-col">
          <div className="flex items-center position-center h-100">
            <div
              className="text-2-columns m-1-g relative"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <motion.img
                src="/images/youngMattWeb.png"
                alt="Young Matt"
                className="w-full h-full object-cover"
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 1.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              />
              <motion.img
                src="/images/oldMattWeb.png"
                alt="Old Matt"
                className="w-full h-full object-cover absolute top-0 left-0"
                initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: isImageHovered ? 1 : 0,
                }}
                transition={{
                  scale: {
                    duration: 1.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                  opacity: { duration: 0.4, ease: "easeInOut" },
                }}
              />
            </div>
            <motion.h1
              className="text-5-columns font-bold mb-8 text-primary font-bold col-span-5"
              initial={{ opacity: 0.6, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0 }}
            >
              designer
            </motion.h1>
          </div>
          <div className="bottom flex flex-col">
            <motion.h3
              className="text-amb relative mb-10"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => {
                const isLastWord = index === words.length - 1;
                const shouldBreak = word === "Oh";

                return (
                  <motion.span variants={child} key={index}>
                    {word}
                    {shouldBreak && <br />}
                    {!shouldBreak && !isLastWord && " "}
                  </motion.span>
                );
              })}
            </motion.h3>
            <motion.div
              className="flex w-full justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.6 }}
            >
              <h6 className="text-base relative mb-4 underline underline-offset-8">
                Let me try to change your mind
              </h6>
              <h6 className="text-base relative mb-4">(Scroll)</h6>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="approach-section"
        style={{ minHeight: "1420px", position: "relative" }}
      >
        <h2 className="font-badly-stuffed w-full text-ai mb-20">
          authentic intelligence &gt; artificial intelligence
        </h2>

        <div className="container-grid mt-2">
          <div className="col-span-12">
            <div
              className="flex mt-2"
              style={{ minHeight: "1420px", position: "relative" }}
            >
              <img
                className="text-3-columns m-1-g h-full sticky flex-shrink-0"
                src="/images/devitoWeb.png"
                alt="DeVito"
                style={{ top: "133px" }}
              />
              <div className="flex flex-col flex-1" style={{ minWidth: 0 }}>
                <h3 className="text-approach flex gap-1 mb-36">
                  Crafting unique web experiences used by humans to make them
                  feel more human
                </h3>
                <h6 className="text-base flex gap-3 font-bold mb-6">
                  I use data to make design decisions and maths to build
                  effective UI.
                </h6>

                <div className="flex flex-col columns-5 gap-3">
                  <SequentialScrollText paragraphs={paragraphs} />

                  <motion.div
                    className="flex w-full justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 3 }}
                  >
                    <h6 className="text-base relative mb-4 underline underline-offset-8 font-bold">
                      Learn more about my approach
                    </h6>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 work-section pb-work">
        <div className="flex w-full justify-between items-end">
          <h2 className="text-work font-bold">WORK</h2>
          <h6 className="text-base mb-5">(case studies)</h6>
        </div>
        <div className="flex mb-10 pb-seeAll">
          <div className="flex-1 flex-col relative base-shadow">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/AMB-Contexto-Work.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex columns-5 justify-between mt-6 items-center">
              <motion.img
                ref={curatedLogoRef}
                className="text-2-columns m-1-g height-64"
                src="/images/logos/ContextoLogo.png"
                alt="Curated Logo"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={
                  curatedLogoInView
                    ? { scale: 1, opacity: 1, y: 0 }
                    : { scale: 0.8, opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2, // Slight delay for staggered effect
                }}
              />
              <div className="h6">Role || Product Designer</div>
              <div className="h6">Timeline || 8 weeks</div>
            </div>
          </div>
          <div className="flex-1 flex-col relative base-shadow gap-gutter">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/AMB-Curated-Work.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex columns-5 justify-between mt-6 items-center">
              <motion.img
                ref={curatedLogoRef}
                className="text-2-columns m-1-g height-64"
                src="/images/logos/CuratedLOGO.png"
                alt="Curated Logo"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={
                  curatedLogoInView
                    ? { scale: 1, opacity: 1, y: 0 }
                    : { scale: 0.8, opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2, // Slight delay for staggered effect
                }}
              />
              <div className="h6">Role || Product Designer</div>
              <div className="h6">Timeline || 8 weeks</div>
            </div>
          </div>
        </div>
        <Link href="/case-studies">
          <div
            className="flex flex-1 justify-end items-center columns-10 w-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              src="/images/icons/right-arrow.svg"
              alt=""
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
            <motion.h3
              className="text-lg text-see-all underline underline-offset-8"
              initial={{ marginLeft: "0.5rem" }}
              animate={{
                marginLeft: isHovered ? "1rem" : "0.5rem",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              See All Work
            </motion.h3>
          </div>
        </Link>
      </section>

      <section className="work-history-section pb-footer">
        <div className="flex w-full mb-36">
          <h6 className="columns-4">(Work History)</h6>
          <h6 className="gap-gutter">
            Companies I have worked <br /> for in the past
          </h6>
          <div className="flex-1 flex justify-end underline underline-offset-8">
            <h6>Connect with me on LinkedIn</h6>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex justify-center columns-3 bg-work-history base-shadow w-full mh-work-history">
            <motion.img
              src={currentLogo}
              style={{ maxWidth: "80%" }}
              alt="Company Logo"
              key={currentLogo} // Force re-render on logo change
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="flex flex-col gap-flex-2">
            <div className="flex items-center">
              <h3
                className="text-66 cursor-pointer transition-colors duration-200 opacity-30 hover:opacity-100 mb-6"
                onMouseEnter={() => {
                  setCurrentLogo(logoMap["MONOM STUDIO"]);
                  setHoveredCompany("MONOM STUDIO");
                }}
                onMouseLeave={() => {
                  setCurrentLogo("/images/logos/monomLogo.svg");
                  setHoveredCompany(null);
                }}
              >
                MONOM STUDIO <sup className="text-xs">(Current)</sup>
              </h3>
              <motion.h6
                className="mb-6 ml-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredCompany === "MONOM STUDIO" ? 1 : 0,
                  x: hoveredCompany === "MONOM STUDIO" ? 0 : -10,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Role || Founder
              </motion.h6>
            </div>
            <div className="flex items-center">
              <Link href="https://www.mousepotato.co/" target="_blank">
                <h3
                  className="text-66 cursor-pointer transition-colors duration-200 opacity-30 hover:opacity-100 mb-6"
                  onMouseEnter={() => {
                    setCurrentLogo(logoMap["MOUSE POTATO LAB"]);
                    setHoveredCompany("MOUSE POTATO LAB");
                  }}
                  onMouseLeave={() => {
                    setCurrentLogo("/images/logos/monomLogo.svg");
                    setHoveredCompany(null);
                  }}
                >
                  MOUSE POTATO LAB
                </h3>
              </Link>
              <motion.h6
                className="mb-6 ml-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredCompany === "MOUSE POTATO LAB" ? 1 : 0,
                  x: hoveredCompany === "MOUSE POTATO LAB" ? 0 : -10,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Role || Cofounder
              </motion.h6>
            </div>
            <div className="flex items-center">
              <Link href="https://www.lalo.app/" target="_blank">
                <h3
                  className="text-66 cursor-pointer transition-colors duration-200 opacity-30 hover:opacity-100 mb-6"
                  onMouseEnter={() => {
                    setCurrentLogo(logoMap["LALO"]);
                    setHoveredCompany("LALO");
                  }}
                  onMouseLeave={() => {
                    setCurrentLogo("/images/logos/monomLogo.svg");
                    setHoveredCompany(null);
                  }}
                >
                  LALO
                </h3>
              </Link>
              <motion.h6
                className="mb-6 ml-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredCompany === "LALO" ? 1 : 0,
                  x: hoveredCompany === "LALO" ? 0 : -10,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Role || Product Manager/COO
              </motion.h6>
            </div>
            <div className="flex items-center">
              <Link href="https://blackflagcreative.com/" target="_blank">
                <h3
                  className="text-66 cursor-pointer transition-colors duration-200 opacity-30 hover:opacity-100 mb-6"
                  onMouseEnter={() => {
                    setCurrentLogo(logoMap["BLACK FLAG CREATIVE"]);
                    setHoveredCompany("BLACK FLAG CREATIVE");
                  }}
                  onMouseLeave={() => {
                    setCurrentLogo("/images/logos/monomLogo.svg");
                    setHoveredCompany(null);
                  }}
                >
                  BLACK FLAG CREATIVE
                </h3>
              </Link>
              <motion.h6
                className="mb-6 ml-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredCompany === "BLACK FLAG CREATIVE" ? 1 : 0,
                  x: hoveredCompany === "BLACK FLAG CREATIVE" ? 0 : -10,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Role || Developer/UX Researcher
              </motion.h6>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-native-section pb-footer">
        <div className="flex w-full items-center">
          <div className="text-6-columns overflow-hidden">
            <motion.img
              ref={digitalImageRef}
              src="/images/mattMason.jpg"
              className="w-full h-full object-cover"
              alt=""
              initial={{
                clipPath: "inset(0 0 100% 0)", // Start completely hidden from top
              }}
              animate={
                digitalImageInView
                  ? { clipPath: "inset(0% 0 0 0)" } // Reveal downward
                  : { clipPath: "inset(0 0 100% 0)" }
              }
              transition={{
                duration: 2.2,
                ease: "easeOut",
                delay: 0.2,
              }}
            />
          </div>
          <div className="flex flex-col width-4-columns gap-flex-1">
            <h4 className="text-native mb-16">
              Digital Native. <br />
              Not a Bot.
            </h4>
            <ScrollAnimatedParagraphs paragraphs={digitalNativeParagraphs} />
          </div>
        </div>
      </section>
    </div>
  );
}
