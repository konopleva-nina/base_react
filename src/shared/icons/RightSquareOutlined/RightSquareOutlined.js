import { RightSquareOutlined as External } from '@ant-design/icons';
import classes from './RightSquareOutlined.module.scss';
import { ICON_DEFAULT_PROPS } from '../config';

/**
 * @typedef {import('../types').IconProps} IconProps
 */

/**
 * @function RightSquareOutlined
 * @param {IconProps} props
 * @returns {JSX.Element}
 */

export const RightSquareOutlined = (props) => {
  const width = props.width
    ? props.width
    : ICON_DEFAULT_PROPS.width;

  const height = props.height
    ? props.height
    : ICON_DEFAULT_PROPS.height;

  const color = props.color
    ? props.color
    : ICON_DEFAULT_PROPS.color;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    color,
  };

  return (
    <span className={classes.icon}
      style={style}
    >
      <External />
    </span>
  );
};
