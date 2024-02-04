import Link from 'next/link';
import Image from 'next/future/image';

export default function FooterMenu() {

    return (
        <section className="bg-orange text-white relative py-20 md:py-32">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between pb-20 md:pb-32 gap-y-5">
                    <div className="w-full lg:w-6/12">
                        <p className='font-rammetto text-2xl md:text-4xl'>Embark on Your Cultural Journey with Us</p>
                        <p className='text-base md:text-lg'>Explore Language, Embrace Heritage, and Connect Globally</p>
                    </div>
                    <div className="w-full lg:w-5/12">
                        <div className='flex flex-wrap gap-y-4'>
                            <div className="w-1/2 px-1 md:px-2">
                                <Link href="#" passHref>
                                    <a className="h-[48px] md:h-[60px] text-base flex items-center justify-center md:text-xl text-center rounded-full bg-[#1785c6] p-2 font-bold shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Admissions
                                    </a>
                                </Link>
                            </div>
                            <div className="w-1/2 px-1">
                                <Link href="#" passHref>
                                    <a className="h-[48px] md:h-[60px] flex items-center justify-center text-base md:text-xl text-center rounded-full border-2 border-white p-2 font-bold text-white shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Contact Us
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-y-10">
                    <div className="w-full lg:w-5/12">
                        <div className='flex flex-row items-center'>
                            <Image
                                src="/images/logo.png" // Assuming your image is in public/images
                                alt="Description"
                                className='w-[100px]'
                                width={233}
                                height={188}
                            />
                            <Link href="/">
                                <a className='font-rammetto leading-none text-lg'>Pathshala<br /><span className='tracking-wider'>Australia</span>
                                </a>
                            </Link>
                        </div>
                        <article className="pt-5 md:w-10/12">Our institution is a vibrant hub dedicated to preserving and promoting the rich heritage of the Nepalese community. With a diverse curriculum that encompasses language, traditions, and global perspectives, we provide an immersive learning experience.</article>
                    </div>

                    <div className="w-full lg:w-7/12 flex flex-wrap gap-y-6">
                        <div className="w-1/2 md:w-1/3">
                            <p className="font-rammetto text-xl mb-2">Quick Links</p>
                            <hr className='h-1 bg-white w-14' />
                            <div className="menu-quick-links-container">
                                <ul className="navbar-nav flex flex-col gap-y-3 pt-5">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">News & Events</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Admissions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3">
                            <p className="font-rammetto text-xl mb-2">Resources</p>
                            <hr className='h-1 bg-white w-14' />
                            <div className="menu-resources-container">
                                <ul className="navbar-nav flex flex-col gap-y-3 pt-5">
                                    <li><a target="_blank" rel="noopener" href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3">
                            <p className="font-rammetto text-xl mb-2">Contacts</p>
                            <hr className='h-1 bg-white w-14' />
                            <ul className="pt-5 flex flex-col gap-y-3">
                                <li><a href="tel:1300 000 000" className="flex gap-x-2">
                                    <div className="w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    1300 000 000</a></li>
                                <li><a href="mailto:info@pathshala.org.au" className="flex gap-x-2">
                                    <div className="w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    info@pathshala.org.au</a></li>
                                <li>
                                    <a href="https://www.google.com/search?q=21 Holliday Ave, Edmondson Park NSW 2174" target='_blank' className="flex gap-x-2">
                                        <div className="w-fit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        </div>
                                        21 Holliday Ave, Edmondson Park NSW 2174</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}