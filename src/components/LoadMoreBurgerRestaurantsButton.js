import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../features/loadMoreBurgerRestaurantsSlice';

export default function LoadMoreBurgerRestaurantsButton() {
  const dispatch = useDispatch();
  return (
    <button
      aria-label="click to load more burger restaurants"
      onClick={() => dispatch(incrementByAmount(2))}
    >
      load more restaurants
    </button>
  );
}
