import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

let cx = className.bind(styles);

export default function ContentWrapper({ content, children, className }) {
  return (
    <article className={`py-32 ${cx(['component', className])}`}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
