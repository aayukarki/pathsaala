import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className="relative py-5">
      <SkipNavigationLink />
      <div className='container'>
        <div className="flex justify-between items-center">
          <div className={cx('brand')}>
            <Link href="/">
              {/* <a className={cx('title')}>{title}</a> */}
              <a className='font-bold leading-none'>Pathshala</a>
            </Link>
            {description && <p className={cx('description')}>{description}</p>}
          </div>
          <nav>
            <ul className='flex justify-center items-center gap-x-8'>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Events</a></li>
              <li><a href='#'>Reviews</a></li>
              <li><a href='#'>FAQs</a></li>
              <li><a href='#'>Admissions</a></li>
              <li><a href='#'>Resources</a></li>
            </ul>
          </nav>
          {/* <NavigationMenu
            className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
            menuItems={menuItems}
          /> */}
          <div>
            <Link href="#">
              <a className="inline-block rounded-full bg-[#fdd116] px-8 py-3 font-bold text-black shadow-sm hover:text-white hover:bg-[#ce1127] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
