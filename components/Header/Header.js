import { useState, useEffect } from 'react'
import {
  SearchIcon,
  MenuIcon,
  CreditCardIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import SearchInput from './SearchInput'
import NavMenus from './NavMenus'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Logo from '../../assets/krypt-logo.png'

function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <MoonIcon
          className='w-8 h-8 text-gray-600 transition-all cursor-pointer hover:text-black dark:text-gray-300'
          role='button'
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <SunIcon
          className='w-8 h-8 text-gray-600 transition-all cursor-pointer hover:text-black dark:text-gray-300'
          role='button'
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const menus = [
    {
      name: 'Explore',
      href: '#',
    },
    {
      name: 'Stats',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
    {
      name: 'Create',
      href: '#',
    },
  ]

  return (
    <header className='sticky top-0 z-50 px-4 py-2 bg-white shadow-md dark:bg-gray-900'>
      <div className='flex items-center justify-between space-x-6'>
        <div className='xl:pr-40'>
          <Link href='/'>
            <a>
              <Image src={Logo} height={55} width={140} />
            </a>
          </Link>
        </div>

        <div className='flex-1 hidden ml-8 sm:block'>
          <SearchInput />
        </div>

        <div className='hidden pr-6 lg:block xl:pl-8'>
          <NavMenus menus={menus} />
        </div>

        <div className='flex items-center space-x-6'>
          <UserCircleIcon className='hidden w-8 h-8 text-gray-600 transition-all cursor-pointer hover:text-black dark:text-gray-300 hover:dark:text-white lg:block' />
          <CreditCardIcon className='hidden w-8 h-8 text-gray-600 transition-all cursor-pointer hover:text-black dark:text-gray-300 hover:dark:text-white lg:block' />
          {renderThemeChanger()}
          <SearchIcon className='text-gray-600 transition-all cursor-pointer h-7 w-7 hover:text-black dark:text-gray-300 hover:dark:text-white sm:hidden' />
          <MenuIcon className='w-8 h-8 text-gray-600 transition-all cursor-pointer hover:text-black dark:text-gray-300 hover:dark:text-white lg:hidden' />
        </div>
      </div>
    </header>
  )
}

export default Navbar