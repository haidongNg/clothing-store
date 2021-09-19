import { FC } from 'react'
const Footer: FC = () => {
    return (
        <footer className="mt-16">
            <div className="border-t md:px-4 md:pt-10 md:pb-5">
                <div className="flex flex-wrap md:max-w-screen-lg mx-auto">
                    <section className="relative text-gray-700  font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button className="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left">Clay Shop</button>
                        </div>
                        <a href="#a" className="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block">Clay Shop</a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Fashion is a popular ae</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700  font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button className="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left">Hot links</button>
                        </div>
                        <a href="#a" className="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block">Hot links</a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Home</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Shop</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Blog</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Contact</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700  font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button className="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left">More info</button>
                        </div>
                        <a href="#a" className="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block">More info</a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#a">How it works</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">About us</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Decline rules</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Terms & Conditions</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section className="relative text-gray-700  font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                        <div className="md:hidden">
                            <button className="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left">Customer care</button>
                        </div>
                        <a href="#a" className="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block">Customer care</a>
                        <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                            <ul className="my-5 text-sm tracking-wide">
                                <li className="my-3 tracking-wide">
                                    <a href="#a">FAQ</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Tems of use</a>
                                </li>
                                <li className="my-3 tracking-wide">
                                    <a href="#a">Private Policy</a>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto border-none px-4">
                <section className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pd-6 md:pt-5 md:pb-6 w-full">
                    <div>
                        <p className="leading-8 tracking-wide">&copy; Lorem Ipsum Co., 123 Lorem Street, New York, NY</p>
                    </div>
                    <div>
                        <p className="leading-8 tracking-wide">Privacy Policy</p>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;
