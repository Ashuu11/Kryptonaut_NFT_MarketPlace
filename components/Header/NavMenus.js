function NavMenus({ menus }) {
    return (
      <nav>
        <ul className='flex space-x-10'>
          {menus.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.href}
                className='font-semibold text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white'
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  
  export default NavMenus