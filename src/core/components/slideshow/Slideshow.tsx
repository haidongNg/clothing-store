import { FC, useState } from 'react';
import { SlideshowContainer, ImageSlides, MySlides, CaptionTextSlide, NextSlides, PrevSlides, DotSlide, DotContainer, NumberTextSlide } from './Slideshow.style';

type SlideshowProps = {
    slideShowList?: string[];
}

const Slideshow: FC<SlideshowProps> = ({ slideShowList = [] }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0)

    // Slideshow next and prev
    const handlePlusSlides = (n: number) => {
        let index = slideIndex + n;
        showSlides(index);
    };

    // Choose dot
    const handleCurrentSlide = (n: number) => showSlides(n);

    // Slideshow change
    const showSlides = (n: number) => {
        if (n >= slideShowList.length) return setSlideIndex(0);
        if (n <= -1) return setSlideIndex(slideShowList.length - 1);
        setSlideIndex(n);
    }

    // Slide render
    const mySlideRender = () => slideShowList.map((img, i) => (
        <MySlides slideDisplay={slideIndex === i ? 'block' : 'none'} key={i} className="fadeAnimation">
            <NumberTextSlide>{i}/{slideShowList.length}</NumberTextSlide>
            <ImageSlides src={img} />
            <CaptionTextSlide>Caption text {i}</CaptionTextSlide>
        </MySlides>
    ));

    // Dot slide render
    const dotSlideRender = () => slideShowList.map((img, i) => (
        <DotSlide key={i} className={slideIndex === i ? 'active' : ''} onClick={() => handleCurrentSlide(i)} />
    ));

    return (
        <div>
            <SlideshowContainer>
                {mySlideRender()}
                <PrevSlides onClick={() => handlePlusSlides(-1)}>&#10094;</PrevSlides>
                <NextSlides onClick={() => handlePlusSlides(1)}>&#10095;</NextSlides>
            </SlideshowContainer>
            <DotContainer>
                {dotSlideRender()}
            </DotContainer>
        </div>
    )
}

export default Slideshow;
