interface StyleObject {
  aside: string;
  asideScrollbars: string;
  asideBrand: string;
  asideMenuItem: string;
  asideMenuItemActive: string;
  asideMenuDropdown: string;
  navBarItemLabel: string;
  navBarItemLabelHover: string;
  navBarItemLabelActiveColor: string;
  overlay: string;
  activeLinkColor: string;
  bgLayoutColor: string;
  iconsColor: string;
  cardsColor: string;
  focusRingColor: string;
  corners: string;
  cardsStyle: string;
  linkColor: string;
}

export const basic: StyleObject = {
  aside: 'bg-gray-800 lg:rounded-2xl',
  asideScrollbars: 'aside-scrollbars-gray',
  asideBrand: 'bg-gray-900 text-white',
  asideMenuItem: 'text-gray-300 hover:text-white',
  asideMenuItemActive: 'font-bold text-white',
  asideMenuDropdown: 'bg-gray-700/50',
  navBarItemLabel: 'text-black',
  navBarItemLabelHover: 'hover:text-blue-500',
  navBarItemLabelActiveColor: 'text-blue-600',
  overlay: 'from-gray-700 via-gray-900 to-gray-700',
  activeLinkColor: 'bg-gray-100/70',
  bgLayoutColor: 'bg-gray-50',
  iconsColor: 'text-blue-500',
  cardsColor: 'bg-white',
  focusRingColor:
    'focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none dark:focus:ring-blue-600 border-gray-300 dark:focus:border-blue-600',
  corners: 'rounded',
  cardsStyle: 'bg-white border border-pavitra-400',
  linkColor: 'text-black',
};

export const white: StyleObject = {
  aside: 'bg-white dark:text-white  lg:rounded-2xl',
  asideScrollbars: 'aside-scrollbars-light',
  asideBrand: '',
  asideMenuItem:
    'text-gray-700 hover:bg-gray-100/70 dark:text-dark-500 dark:hover:text-white dark:hover:bg-dark-800',
  asideMenuItemActive: 'font-bold text-black dark:text-white',
  asideMenuDropdown: 'bg-gray-100/75',
  navBarItemLabel: 'text-blue-600',
  navBarItemLabelHover: 'hover:text-black',
  navBarItemLabelActiveColor: 'text-black',
  overlay: 'from-white via-gray-100 to-white',
  activeLinkColor: 'bg-gray-100/70',
  bgLayoutColor: 'bg-gray-50',
  iconsColor: 'text-blue-500',
  cardsColor: 'bg-white',
  focusRingColor:
    'focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none border-gray-300 dark:focus:ring-blue-600 dark:focus:border-blue-600',
  corners: 'rounded',
  cardsStyle: 'bg-white border border-pavitra-400',
  linkColor: 'text-blue-600',
};

export const dataGridStyles = {
  '& .MuiDataGrid-cell': {
    paddingX: 3,
    border: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    paddingX: 3,
  },
  '& .MuiDataGrid-columnHeaderCheckbox': {
    paddingX: 0,
  },
  '& .MuiDataGrid-columnHeaders': {
    paddingY: 4,
    borderStartStartRadius: 7,
    borderStartEndRadius: 7,
  },
  '& .MuiDataGrid-footerContainer': {
    paddingY: 0.5,
    borderEndStartRadius: 7,
    borderEndEndRadius: 7,
  },
  '& .MuiDataGrid-root': {
    border: 'none',
  },
};
