import IMenuItemChild from './IMenuItemChild';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IMenuItem = {
  id: string,
  text: string,
  path: string,
  icon: IconDefinition,
  children: IMenuItemChild[] | null,
};

export default IMenuItem;
