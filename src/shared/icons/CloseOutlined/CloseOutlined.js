import classes from './CloseOutlined.module.scss';
import { CloseOutlined as External } from '@ant-design/icons';
import { ICON_DEFAULT_PROPS } from '../config';

/**
 * @typedef {import('../types').IconProps} IconProps
 */

/**
 * @function CloseOutlined
 * @param {IconProps} props
 * @returns {JSX.Element}
 */

export const CloseOutlined = (props) => {
  const width = props.width
    ? props.width
    : ICON_DEFAULT_PROPS.width;

  const height = props.height
    ? props.height
    : ICON_DEFAULT_PROPS.height;

  const color = props.color
    ? props.color
    : ICON_DEFAULT_PROPS.color;

  const fontSize = props.fontSize
    ? props.fontSize
    : ICON_DEFAULT_PROPS.fontSize;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    color,
    fontSize: `${fontSize}px`,
  };

  return (
    <span className={classes.icon}
      style={style}
    >
      <External />
    </span>
  );
};
