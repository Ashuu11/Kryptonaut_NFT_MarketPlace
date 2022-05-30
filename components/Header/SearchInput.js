import { SearchIcon } from '@heroicons/react/outline'

function SearchInput() {
  return (
    <div className='rounded-lg border px-1 py-2 focus:shadow-md dark:border-transparent dark:bg-[#333333]'>
      <div className='flex items-center pl-3 space-x-3'>
        <SearchIcon className='w-5 h-5 text-gray-600 transition-all cursor-pointer hover:text-black dark:text-gray-300' />
        <input
          className='w-full text-gray-600 bg-transparent outline-none placeholder:text-sm dark:text-gray-300 md:placeholder:text-base'
          type='text'
          placeholder='Search items, collections, and accounts'
        />
      </div>
    </div>
  )
}

export default SearchInput