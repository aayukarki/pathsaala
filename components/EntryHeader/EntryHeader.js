import className from 'classnames/bind';
import { Heading, PostInfo, Container, FeaturedImage } from '../../components';
import styles from './EntryHeader.module.scss';

let cx = className.bind(styles);

export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = title || date || author;

  return (
    <div className={cx(['component', className])}>
      {image && (
        <FeaturedImage
          image={image}
          className={cx('image')}
          priority
        />
      )}

      {hasText && (
        <div className={`bg-[#1785c6] text-white py-32 ${cx('text', { 'has-image': image })}`}>
          <Container>
            {!!title && <Heading className='font-rammetto text-5xl'>{title}</Heading>}
            <PostInfo
              className={cx('byline')}
              author={author}
              date={date}
            />
          </Container>
        </div>
      )}
    </div>
  );
}
