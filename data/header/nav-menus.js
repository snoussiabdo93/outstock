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
          { link: '/product-details/ojkfZzzz3ioerklYDFjl', title: 'Wooden Cooking Spoon' },
          { link: '/product-details/nKakmoFZwUGLPyhyC3yg', title: 'Cooking Spoon New Style' },
          { link: '/product-details/dqEplTnx0hQ1fJ0Oxjkc', title: 'Wooden spoon for pasta' },
          { link: '/product-details/jVz646e3EpZivPQ5WBjh', title: 'Large Olive Wood Spoon' },
          { link: '/product-details/SXe2Lt1jnqNl3HhWquvM', title: 'Slotted spoon  olive wood' },

        ]
      },
      {
        link: '/shop',
        title: 'Chess Game',
        dropdownMenu: [
          { link: '/product-details/MDSeSNdhChIG3sohbfRI', title: '  Chess  With 2 Storages ' },
          { link: '/product-details/LQZwE0VwyHmWwglHWFNP', title: 'Fancy Wooden Chess ' },
          { link: '/product-details/3k7esGoyBLuuP38ptGMJ', title: 'Wooden Chess Rustic Rough Edges' },
          { link: '/product-details/1ROP7WtB4N9vOTfKTeUy', title: 'Sample Wooden Chess with storage' },
          
        ]
      },
      {
        link: '/shop',
        title: 'accessories',
        dropdownMenu: [
          { link: '/product-details/6SMbRoY5ToK8mNO3gLf3', title: 'Olive Wooden Pepper Mill' },
          { link: '/product-details/6u7GtFZVb4Mxbf8grV1y', title: 'Olive Wooden Bowl and picker' },
          { link: '/product-details/sCkczTzrnGtNLMb5tzzv', title: 'English Oak Salt And Pepper Mill ' },
          { link: '/product-details/Pv8GVwDhCsVCb8OShhGP', title: 'Olive Wooden Honey bottle with Dipper ' },
          
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