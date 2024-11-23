import classes from './AppstoreAddOutlined.module.scss';
import { AppstoreAddOutlined as External } from '@ant-design/icons';
import { ICON_DEFAULT_PROPS } from '../config';

/**
 * @typedef {import('../types').IconProps} IconProps
 */

/**
 * @function AppstoreAddOutlined
 * @param {IconProps} props
 * @returns {JSX.Element}
 */

export const AppstoreAddOutlined = (props) => {
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
