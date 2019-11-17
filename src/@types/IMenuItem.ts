import IMenuItemChild from './IMenuItemChild';

type IMenuItem = {
  id: string,
  text: string,
  path: string,
  icon: string,
  children: IMenuItemChild[] | null,
};

export default IMenuItem;
