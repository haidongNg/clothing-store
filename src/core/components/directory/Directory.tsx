import { FC, useState } from 'react';
import DirectoryItem from '../directory-item/DirectoryItem';
import { DirectoryMenu } from './Directory.style';

type Sections = {
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
    linkUrl: string;
}
type DirectoryProps = {};

const Directory: FC<DirectoryProps> = () => {
    // eslint-disable-next-line
    const [sections, setSections] = useState<Sections[]>([
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: ''
        }
    ]);
    return (
        <DirectoryMenu>
            {sections.map(({ ...otherSectionProps }, idx) => (<DirectoryItem key={idx} {...otherSectionProps} />))}
        </DirectoryMenu>
    )
}

export default Directory;
