import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type MediaFit = "cover" | "contain";

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  video?: string;
  link?: string;
  description: string;
  mediaFit?: MediaFit;
  mediaMaxWidth?: number | string;
  mediaMaxHeight?: number | string;
};

const projects: Project[] = [
  {
    title: "MCA, GSTIN & Taxpayers Analysis",
    category: "Enterprise Analytics Platform",
    tools:
      "Power BI, Microsoft Fabric, SQL, Data Modeling, ETL, Lakehouse, Warehouse",
    description: 
      "Designed end-to-end ETL pipelines in Microsoft Fabric to ingest, clean, and model large-scale government datasets, surfaced through interactive Power BI dashboards.", 
    image:
      "https://raw.githubusercontent.com/Vani-kamboj/Vani-Kamboj.portfolio.github.io/main/GOI.png",
    mediaFit: "contain",
  },
  {
    title: "Dabur Sales Analysis",
    category: "Sales Intelligence Dashboard",
    tools:
      "Power BI, DAX, KPI Design, Revenue Analysis, Product Performance Tracking",
    description: 
      "Built an interactive Power BI dashboard to monitor Dabur's revenue trends, product performance, and profitability — with DAX-driven KPIs enabling 30% faster business decisions.", 
    image:
      "https://raw.githubusercontent.com/Vani-kamboj/Vani-Kamboj.portfolio.github.io/main/dabur.png",
    mediaFit: "contain",
  },
  {
    title: "Temperature Monitoring",
    category: "Real-time Monitoring & Alerts",
    tools:
      "SQL, Python, Power BI, Microsoft Fabric, Lakehouse, Pipelines, Data Activator",
    description: 
      "Pulled raw temperature data from an API using Python Notebook, stored it in a Fabric Lakehouse, and moved it into the Warehouse through automated pipelines, where SQL tables were already structured and ready. Final insights surfaced through real-time Power BI dashboards with automated email alerts via Data Activator.", 
    image:
      "https://raw.githubusercontent.com/Vani-kamboj/Vani-Kamboj.portfolio.github.io/main/Temperature.png",
    mediaFit: "contain",
  },
  {
    title: "Insurance Analysis",
    category: "Reporting & KPI Analytics",
    tools:
      "Power BI, DAX Studio, Report Builder, Microsoft Fabric, SQL, Python, Power Query",
      description: 
      "Started as a standalone Power BI solution with Salesforce as the data source and later re-engineered on Microsoft Fabric. Built end-to-end pipelines moving data from Lakehouse into the Warehouse, structured SQL tables, and delivered a fully automated insurance analytics dashboard.", 
    image:
      "https://raw.githubusercontent.com/Vani-kamboj/Vani-Kamboj.portfolio.github.io/main/Insurance.png",
    mediaFit: "contain",
  }
];

const Work = () => {
  const slideCount = projects.length;
  const slides = [projects[slideCount - 1], ...projects, projects[0]];

  // This index is for the "slides" array (includes 2 clones).
  // 1..slideCount are the real slides, 0 is last-clone, slideCount+1 is first-clone.
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const swipeStartXRef = useRef<number | null>(null);
  const swipeDeltaXRef = useRef(0);
  const swipePointerTypeRef = useRef<string | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldPreloadMedia, setShouldPreloadMedia] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeProjectIndex =
    ((carouselIndex - 1 + slideCount) % slideCount) || 0;

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(!!entry?.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShouldPreloadMedia(!!entry?.isIntersecting);
      },
      {
        rootMargin: "600px 0px",
        threshold: 0.01,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) return;

    const interval = window.setInterval(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      setIsTransitionEnabled(true);
      setCarouselIndex((prev) => prev + 1);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isInView, isPaused]);

  const goToPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCarouselIndex((prev) => prev - 1);
  }, []);

  const goToNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCarouselIndex((prev) => prev + 1);
  }, []);

  const goToProject = useCallback(
    (projectIndex: number) => {
      if (isAnimatingRef.current) return;
      if (projectIndex === activeProjectIndex) return;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      setIsTransitionEnabled(true);
      setCarouselIndex(projectIndex + 1);
    },
    [activeProjectIndex]
  );

  const handleTrackTransitionEnd = useCallback(() => {
    isAnimatingRef.current = false;
    setIsAnimating(false);

    if (carouselIndex === 0) {
      setIsTransitionEnabled(false);
      setCarouselIndex(slideCount);
      return;
    }

    if (carouselIndex === slideCount + 1) {
      setIsTransitionEnabled(false);
      setCarouselIndex(1);
    }
  }, [carouselIndex, slideCount]);

  useEffect(() => {
    if (isTransitionEnabled) return;
    const rafId = window.requestAnimationFrame(() =>
      setIsTransitionEnabled(true)
    );
    return () => window.cancelAnimationFrame(rafId);
  }, [isTransitionEnabled]);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    swipeStartXRef.current = event.clientX;
    swipeDeltaXRef.current = 0;
    swipePointerTypeRef.current = event.pointerType;
    if (event.pointerType !== "mouse") setIsPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (swipeStartXRef.current === null) return;
    swipeDeltaXRef.current = event.clientX - swipeStartXRef.current;
  }, []);

  const resetSwipe = useCallback((pointerType?: string) => {
    swipeStartXRef.current = null;
    swipeDeltaXRef.current = 0;
    swipePointerTypeRef.current = null;
    if (pointerType && pointerType !== "mouse") setIsPaused(false);
  }, []);

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (swipeStartXRef.current === null) return;
      const deltaX = swipeDeltaXRef.current;
      const pointerType = swipePointerTypeRef.current ?? event.pointerType;
      resetSwipe(pointerType);

      const threshold = 60;
      if (Math.abs(deltaX) < threshold) return;
      if (deltaX > 0) goToPrev();
      else goToNext();
    },
    [goToNext, goToPrev, resetSwipe]
  );

  const handlePointerCancel = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const pointerType = swipePointerTypeRef.current ?? event.pointerType;
      resetSwipe(pointerType);
    },
    [resetSwipe]
  );

  return (
    <div
      className="work-section"
      id="work"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
            aria-disabled={isAnimating}
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
            aria-disabled={isAnimating}
          >
            <MdArrowForward />
          </button>

          <div
            className="carousel-track-container"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            <div
              className="carousel-track"
              onTransitionEnd={handleTrackTransitionEnd}
              style={{
                transition: isTransitionEnabled ? undefined : "none",
                transform: `translateX(-${carouselIndex * 100}%)`,
              }}
            >
              {slides.map((project, slideIndex) => {
                const projectIndex =
                  slideIndex === 0
                    ? slideCount - 1
                    : slideIndex === slideCount + 1
                      ? 0
                      : slideIndex - 1;
                const projectNumber = String(projectIndex + 1).padStart(2, "0");
                const mediaVars = {
                  ...(project.mediaFit
                    ? { "--work-media-fit": project.mediaFit }
                    : {}),
                  ...(project.mediaMaxWidth
                    ? {
                      "--work-media-max-width-local":
                        typeof project.mediaMaxWidth === "number"
                          ? `${project.mediaMaxWidth}px`
                          : project.mediaMaxWidth,
                    }
                    : {}),
                  ...(project.mediaMaxHeight
                    ? {
                      "--work-media-max-height-local":
                        typeof project.mediaMaxHeight === "number"
                          ? `${project.mediaMaxHeight}px`
                          : project.mediaMaxHeight,
                    }
                    : {}),
                } as React.CSSProperties;

                return (
                  <div className="carousel-slide" key={slideIndex}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>{projectNumber}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">{project.category}</p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                          {project.description && (
    <div className="carousel-description">
      <p>{project.description}</p>
    </div>
  )}
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          video={project.video}
                          isActive={slideIndex === carouselIndex}
                          shouldLoad={shouldPreloadMedia}
                          shouldPlay={
                            isInView &&
                            slideIndex === carouselIndex &&
                            !isAnimating
                          }
                          style={mediaVars}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeProjectIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
