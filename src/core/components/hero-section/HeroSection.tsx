import {FC} from 'react'
import {HeroBg, HeroContainer, ImageBg, HeroBtnWrapper, HeroH1, HeroContent, HeroP} from './HeroSection.style';
import image17 from '../../../assets/image17.png';

type HeroSectionProps = {}
const HeroSection: FC<HeroSectionProps> = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={image17} />
            </HeroBg>
            <HeroContent>
                <HeroH1>ABC</HeroH1>
                <HeroP>asdsada</HeroP>
                <HeroBtnWrapper>Button</HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
