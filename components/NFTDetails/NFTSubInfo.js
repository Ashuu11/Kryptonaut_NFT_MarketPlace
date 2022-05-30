import React from 'react'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'

const style = {
  wrapper: `flex space-x-6 py-6`,
  textInfoContainer: `text-lg font-medium text-gray-500 dark:text-gray-400`,
  owner: `text-blue-500`,
  iconTextInfoContainer: `flex items-center space-x-2`,
  icon: `h-7 w-7 text-gray-500 dark:text-gray-400`,
}


const NFTSubInfo = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.textInfoContainer}>
            Owned By <span className={style.owner}>Ashish_Mohanty</span>
        </div>
        <div className={style.iconTextInfoContainer}>
            <AiFillEye className={style.icon}/>
            <div className={style.textInfoContainer}>54.2K views</div>
        </div>
        <div className={style.iconTextInfoContainer}>
            <AiFillHeart className={style.icon}/>
            <div className={style.textInfoContainer}>592 Favorites</div>
        </div>
    </div>
  )
}

export default NFTSubInfo