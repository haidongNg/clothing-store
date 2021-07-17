import { FC, useState } from 'react';
import {Sidebar, Navbar} from '../../core/components/index';
// Icon

type HeaderProps = {
    isOpen?: boolean;
}
const Header: FC<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggle menu
     */
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
        </>
    )
}

export default Header;
