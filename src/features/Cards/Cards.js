import { Card } from '../../ui';

/**
 * @typedef {import('./types').CardsProps} CardsProps
 */

/**
 * @function Cards
 * @param {CardsProps} props
 * @returns {JSX.Element}
 */

export const Cards = (props) => {
  const { cards } = props;
  console.log(cards);
  return (
    <ul className={'cards'}>
      {cards.length === 0 ? (
        <h2>Press the Up button to add a card</h2>
      ) : (
        cards.map((/**@type {object} */ card) => <Card key={card.id} { ...card }/>)
      )}
    </ul>
  );
};
