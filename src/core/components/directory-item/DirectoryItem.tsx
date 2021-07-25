import { FC } from 'react';
import { DirectoryItemContainer, DirectoryImage, DirectoryContent, DirectoryTitle, DirectorySubtile } from './DirectoryItem.style';
type DirectoryItemProps = {
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
    linkUrl: string;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ title, imageUrl, size = ''}) => {
    return (
        <DirectoryItemContainer sizeDiv={size}>
            <DirectoryImage imgUrl={imageUrl} />
            <DirectoryContent>
                <DirectoryTitle>{title?.toLocaleUpperCase()}</DirectoryTitle>
                <DirectorySubtile>SHOP NOW</DirectorySubtile>
            </DirectoryContent>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;
