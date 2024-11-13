import React, { useState } from 'react';

function Carousel() {
    const images = [
        "https://images.pexels.com/photos/28942238/pexels-photo-28942238/free-photo-of-young-woman-reading-in-a-bookstore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4855472/pexels-photo-4855472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4855485/pexels-photo-4855485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4855367/pexels-photo-4855367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6550114/pexels-photo-6550114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/9572548/pexels-photo-9572548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        < >
            <div className="main">
                <div>
                    <img
                        src={images[currentIndex]}
                        alt="carousel"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className='buttons'>
                    <button onClick={handlePrev}>Prev</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Carousel;
