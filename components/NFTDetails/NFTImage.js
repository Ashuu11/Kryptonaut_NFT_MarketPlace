import React from 'react'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import Eth from '../../assets/eth.svg'

const style = {
    wrapper: `rounded-lg border dark:border-transparent dark:bg-[#313339]`,
    nftHeader: `flex items-center justify-between p-4`,
    likesContainer: `flex items-center justify-end space-x-2`,
    heartIcon: `h-5 w-5 text-gray-400 dark:text-white`,
    likesCount: `text-sm font-semibold text-white dark:text-white`,
    nftImage: `rounded-b-lg object-cover`,
  }

const NFTImage = ({ image }) => {
    console.log(image);
  return (
    <div className={style.wrapper}>
        <div className={style.nftHeader}>
            <Image src={Eth} height={20} width={20} alt='eth'/>
            <div className={style.likesContainer}>
                <AiOutlineHeart className={style.heartIcon}/>
                <div className={style.likesCount}>300</div>
            </div>
        </div>


        <div>
            {
                image && (
                    <Image className={style.nftImage} height={448} width={448} src={image} alt='NFT image'/>
                )
            }
        </div>
    </div>
  )
}

export default NFTImage