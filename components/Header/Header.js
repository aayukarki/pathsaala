import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/future/image';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Pathshala',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className="relative py-5 shadow-md shadow-gray-100">
      <SkipNavigationLink />
      <div className='container'>
        <div className="flex flex-wrap justify-between items-center">
          <div className={`flex flex-row items-center ${cx('brand')}`}>
            <Image
              src="/images/logo.png" // Assuming your image is in public/images
              alt="Description"
              className='w-[100px]'
              width={233}
              height={188}
            />
            <Link href="/">
              {/* <a className={cx('title')}>{title}</a> */}
              <a className='font-rammetto leading-none text-lg text-[#1785c6]'>Pathshala<br /><span className='tracking-wider'>Australia</span>
              </a>
            </Link>
            {description && <p className={cx('description')}>{description}</p>}
          </div>
          <NavigationMenu
            className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
            menuItems={menuItems}
          />

          <div>
            <Link href="/contact-us/">
              <a className="hidden md:flex justify-center items-center h-[50px] rounded-full bg-orange py-2 px-8 font-bold text-white shadow-sm  hover:bg-[#ce1127] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Contact Us</a>
            </Link>
            <button
              type="button"
              className={cx('nav-toggle')}
              onClick={() => setIsNavShown(!isNavShown)}
              aria-label="Toggle navigation"
              aria-controls={cx('primary-navigation')}
              aria-expanded={isNavShown}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
