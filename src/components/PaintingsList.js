import PropTypes from 'prop-types';
import Painting from './Painting';

export default function PaintingsList({ items }) {
  return (
    <ul
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        fontSize: 24,
        color: '#010101',
      }}
    >
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            authorUrl={item.author.url}
            authorTag={item.author.tag}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
	}),)
};
