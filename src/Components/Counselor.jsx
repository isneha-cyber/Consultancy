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
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 xl:gap-16">

          {/* ── LEFT: Text ───────────────────────────────────────────────── */}
          <div className="w-full lg:w-2/5 xl:w-[38%] flex-shrink-0 space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
              Your{' '}
              <span className="relative inline-block font-bold">
                Trusted Partner
                <img
                  src="/images/underline.png"
                  alt=""
                  className="absolute -bottom-2 left-0 w-full h-2 md:h-3"
                />
              </span>{' '}
              In Global Education
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Edwise, study abroad consultants, have been the architects of dreams and shapers of destinies for aspiring students for over three decades.
            </p>

            <button className="border-2 border-[#1e3a8a] text-[#1e3a8a] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-[#1e3a8a] hover:text-white transition-all duration-300 text-sm sm:text-base">
              Free Expert Consultation
            </button>
          </div>

          {/* ── RIGHT: Carousel ──────────────────────────────────────────── */}
          <div className="w-full lg:flex-1 min-w-0">

            {/* Embla viewport */}
            <div
              className="overflow-hidden rounded-3xl"
              ref={emblaRef}
            >
              <div className="flex gap-4 sm:gap-5">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[85vw] sm:w-[60%] lg:w-[65%] xl:w-[62%]"
                  >
                    <div className="bg-white border-2 border-blue-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
                        {slide.title}
                      </h3>
                      <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/16]   overflow-hidden rounded-xl bg-gray-50">
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-contain "
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls - Centered below carousel */}
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                aria-label="Previous slide"
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                  !prevBtnDisabled
                    ? 'border-[#1d438d] bg-[#1d438d] text-white hover:bg-[#162f6b] hover:scale-105 active:scale-95'
                    : 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots indicator - Hidden on mobile, shown on tablet+ */}
              {/* <div className="hidden sm:flex items-center gap-2 px-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex 
                        ? 'bg-[#1d438d] w-8' 
                        : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div> */}

              <button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                aria-label="Next slide"
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                  !nextBtnDisabled
                    ? 'border-[#1d438d] bg-[#1d438d] text-white hover:bg-[#162f6b] hover:scale-105 active:scale-95'
                    : 'border-gray-200 bg-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile dots indicator */}
            {/* <div className="flex sm:hidden justify-center gap-2 mt-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-[#1d438d] w-6' 
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}