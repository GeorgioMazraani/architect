import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES } from "./theme";
import { PanInfo } from "framer-motion";
const slides = [
  {
    id: "intro",
    title: "About",
    content: `Passionate about creating spaces that seamlessly blend creativity with practicality, she works closely with
              clients to bring their visions to life while ensuring efficiency, sustainability, and high-quality execution.
              Whether it's residential, commercial, or urban projects, Manal’s expertise transforms concepts into timeless
              architectural realities.`,
  },
  {
    id: "mission",
    title: "Mission",
    content: `To design and deliver architectural solutions that enhance functionality, aesthetics, and sustainability
              while meeting client expectations. Through a commitment to innovation, precision, and excellence,
              we strive to create spaces that inspire, serve, and evolve with time.`,
  },
  {
    id: "vision",
    title: "Vision",
    content: `To be a leading architectural and consultancy firm recognized for its unique design approach,
              sustainable practices, and commitment to shaping urban and residential landscapes that enhance
              quality of life.`,
  },
];

function HomeAbout() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const { offset, velocity } = info;
    if (offset.x < -100 || velocity.x < -500) {
      handleNext();
    } else if (offset.x > 100 || velocity.x > 500) {
      handlePrev();
    }
  };
  
  

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        handleNext();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [paused, currentIndex]);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* FIXED IMAGE COLUMN */}
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <img
            src={IMAGES.about_pic2}
            alt="Architecture"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "85%", borderRadius: "8px" }}
          />

        </div>

        {/* TEXT COLUMN */}
        <div
          className="col-lg-6 position-relative"
          style={{ minHeight: 300 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* SLIDING TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="position-absolute w-100"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {slides[currentIndex].title && (
                <h5 className="fw-bold mb-3 fs-4">{slides[currentIndex].title}</h5>
              )}
              <p className="fs-6">{slides[currentIndex].content}</p>
            </motion.div>
          </AnimatePresence>

          {/* BULLETS - OUTSIDE of AnimatePresence */}
          <div className="d-flex justify-content-center gap-2 mt-5 position-absolute w-100" style={{ bottom: 0 }}>
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                style={{
                  cursor: "pointer",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: i === currentIndex ? "#333" : "#ccc",
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
