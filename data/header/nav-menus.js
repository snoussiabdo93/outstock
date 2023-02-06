const nav_menus = [
  {
    link: '/',
    title: 'Home'
   
  },
  {
    link: '/shop',
    title: 'Products',
    hasDropdown: true,
    megamenu: true,
    dropdownItems: [
      {
        link: '/shop',
        title: 'kitchen',
        dropdownMenu: [
          { link: '/product-details', title: 'Product 1' },
          { link: '/product-details', title: 'Product 2' },
          { link: '/product-details', title: 'Product 3' },
          { link: '/product-details', title: 'Product 4' },
          { link: '/product-details', title: 'Product 5' },
          { link: '/product-details', title: 'Product 6' },
          { link: '/product-details', title: 'Product 7' },
        ]
      },
      {
        link: '/shop',
        title: 'Chess Game',
        dropdownMenu: [
          { link: '/product-details', title: 'Product 1' },
          { link: '/product-details', title: 'Product 2' },
          { link: '/product-details', title: 'Product 3' },
          { link: '/product-details', title: 'Product 4' },
          { link: '/product-details', title: 'Product 5' },
          { link: '/product-details', title: 'Product 6' },
          { link: '/product-details', title: 'Product 7' },
        ]
      },
      {
        link: '/shop',
        title: 'accessories',
        dropdownMenu: [
          { link: '/product-details', title: 'Product 1' },
          { link: '/product-details', title: 'Product 2' },
          { link: '/product-details', title: 'Product 3' },
          { link: '/product-details', title: 'Product 4' },
          { link: '/product-details', title: 'Product 5' },
          { link: '/product-details', title: 'Product 6' },
          { link: '/product-details', title: 'Product 7' },
        ]
      },
    ]
  },

 

  {
    link: '/about',
    title: 'About',
  },

  {
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus;