import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

export default function Painting({
	imageUrl = defaultImage,
  title,
  authorUrl,
  authorTag = 'No found',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Цена: {price}</p>
      <p>Доступность: {quantity > 5 ? 'Есть в наличии' : 'Заканчивается'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};