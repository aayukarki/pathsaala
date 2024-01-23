import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#012f7c] text-white py-8">
      <div className="container">
        <NavigationMenu menuItems={menuItems} />
        <p className="mb-0">{`${title} © ${year}. Powered by WordPress.`}</p>
      </div>
    </footer>
  );
}
