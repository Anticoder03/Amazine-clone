import React, { useEffect, useState, useRef } from 'react'

const Carausel = () => {
    const images = [
        '/img/slider/slider-1.jpg',
        '/img/slider/slider-2.jpg',
        '/img/slider/slider-3.jpg',
        '/img/slider/slider-4.jpg',
        '/img/slider/slider-5.jpg',
    ]
    const [active, setActive] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
        // Auto slide every 4s
        timerRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(timerRef.current)
    }, [])

    const goTo = idx => {
        setActive(idx)
        clearInterval(timerRef.current)
    }

    const prev = () => {
        setActive(prev => (prev - 1 + images.length) % images.length)
        clearInterval(timerRef.current)
    }

    const next = () => {
        setActive(prev => (prev + 1) % images.length)
        clearInterval(timerRef.current)
    }

    return (
        <div className="carousel-root" style={{ marginTop: '8px' }}>
            <div className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-base md:h-96">
                    <div
                        className="flex h-full w-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${active * 100}%)` }}
                    >
                        {images.map((src, i) => (
                            <div key={src} className="h-full w-full shrink-0">
                                <img
                                    src={src}
                                    alt={`Slide ${i + 1}`}
                                    className="block h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`w-3 h-3 rounded-full ${active === i ? 'bg-white' : 'bg-white/40'}`}
                            aria-current={active === i}
                            aria-label={`Slide ${i + 1}`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>

                <button onClick={prev} type="button" className="absolute top-0 inset-s-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button onClick={next} type="button" className="absolute top-0 inset-e-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Carausel
