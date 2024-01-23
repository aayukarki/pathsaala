import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './Hero.module.scss';

let cx = className.bind(styles);

export default function Hero({ title, level = 'h2', children, className }) {
  return (
    <div className={cx(['component', className])}>
      <Heading className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" level={level}>
        {title}
        <span className={cx('title')}></span>
      </Heading>
      {children}
    </div>
  );
}
