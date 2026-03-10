import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── usePrevNextButtons ────────────────────────────────────────────────────────
function usePrevNextButtons(emblaApi) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNextButtonClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
}

// ─── useDotButton ──────────────────────────────────────────────────────────────
function useDotButton(emblaApi) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);
  const onInit = useCallback((api) => setScrollSnaps(api.scrollSnapList()), []);
  const onSelect = useCallback((api) => setSelectedIndex(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

// ─── Slide data ────────────────────────────────────────────────────────────────
const slides = [
  { title: '34 Years of Excellence',    image: 'images/counselor.png', alt: '34 Years of Excellence' },
  { title: '950+ Partner Universities', image: 'images/counselor.png', alt: '950+ Partner Universities' },
  { title: 'Free Services',             image: 'images/counselor.png', alt: 'Free Services' },
  { title: '200+ Expert Counselors',    image: 'images/counselor.png', alt: '200+ Expert Counselors' },
  { title: '250K+ Happy Students',      image: 'images/counselor.png', alt: '250K+ Happy Students' },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Counselor() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ───────────────────────────────────────────────── */}
          <div className="w-full lg:w-[38%] shrink-0 space-y-4 md:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
              Your{' '}
              <span className="relative inline-block font-bold">
                Trusted Partner
                <img
                  src="/images/underline.png"
                  alt=""
                  className="w-full h-2 md:h-3 mt-1"
                />
              </span>{' '}
              In<br />Global Education
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Edwise, study abroad consultants, have been the architects of dreams and shapers of destinies for aspiring students for over three decades.
            </p>

            <button className="sm:w-auto border-2 border-[#1e3a8a] text-[#1e3a8a] px-4 sm:px-8 sm:py-3 py-2 rounded-lg font-medium hover:bg-[#1e3a8a] hover:text-white transition-all duration-300 text-sm sm:text-base">
              Free Expert Consultation
            </button>
          </div>

          {/* ── RIGHT: Carousel ──────────────────────────────────────────── */}
          <div className="w-full lg:flex-1 order-1 lg:order-2 min-w-0">

            {/* Embla viewport */}
            <div
              className="overflow-hidden"
              ref={emblaRef}
              style={{ cursor: 'grab' }}
              onMouseDown={(e) => { e.currentTarget.style.cursor = 'grabbing'; }}
              onMouseUp={(e) => { e.currentTarget.style.cursor = 'grab'; }}
            >
              <div className="flex gap-4 sm:gap-5 touch-pan-y select-none">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="embla__slide flex-shrink-0 w-[85vw] sm:w-[60%] lg:w-[62%] min-w-0"
                  >
                    <div className="bg-white border-2 border-blue-100 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
                        {slide.title}
                      </h3>
                      <div className="w-full aspect-[3/2] h-[65vh] overflow-hidden rounded-xl">
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                aria-label="Previous slide"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                  !prevBtnDisabled
                    ? 'border-[#1d438d] bg-[#1d438d] text-white hover:bg-[#162f6b]'
                    : 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                aria-label="Next slide"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                  !nextBtnDisabled
                    ? 'border-[#1d438d] bg-[#1d438d] text-white hover:bg-[#162f6b]'
                    : 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}