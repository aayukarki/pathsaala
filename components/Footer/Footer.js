import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#ed3d36] text-white pb-10">
      <div className="container">
        <div className='flex justify-between text-sm'>
          {/* <NavigationMenu menuItems={menuItems} /> */}
          <p className="mb-0">{`${title} © ${year}. All Rights Reserved`}</p>
          <p className="mb-0">Site Developed and Designed By: <span className='font-rammetto'>AK & AR</span></p>
        </div>
      </div>
    </footer>
  );
}
