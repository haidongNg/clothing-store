import { FC, useState } from "react";
import { Slideshow } from "../../core/components";

import Image247 from '../../assets/image247.png';
import Image155 from '../../assets/image155.png';
import Image20 from '../../assets/image20.png';

type HomeProps = {};
const Home: FC<HomeProps> = () => {
    const [slideList, setSlideList] = useState<string[]>([Image247, Image155, Image20])
    return (
        <>
            <Slideshow slideShowList={slideList} />
        </>
    )
}

export default Home;
