import type { FC } from 'react'
const startsGroup = require('../../assets/icons/starts-group.png')
const adverImage = require('../../assets/images/adverb-image.png')

const Hero: FC = () => {
	return (
		<div className='heroImage'>
			<div className='flex justify-between items-center gap-[100px] max-xl:gap-10 px-[265px] pt-[175px] max-3xl:px-[65px] max-3xl:pt-[75px] max-2xl:px-10 max-xl:px-0'>
				<div className='pl-[135px] max-3xl:pl-[100px] max-2xl:pl-10'>
					<h2 className='font-makien text-7xl text-white font-normal tracking-normal text-left max-3xl:text-6xl max-xl:text-5xl'>
						Biz bilan tez va osson
					</h2>
					<div className='flex items-center gap-5'>
						<h2 className='font-makien text-8xl text-textYellow font-normal tracking-normal text-left max-3xl:text-7xl max-xl:6px'>
							Ish toping
						</h2>
						<img
							src={startsGroup}
							alt='starts-group'
							className='w-16 h-16 max-3xl:w-12 max-3xl:h-12'
						/>
					</div>
					<button className='h-[75px] px-[65px] bg-[#EFEFEF] rounded-[14px] shadow-buttonShadow font-abhaya text-primary text-5xl font-extrabold text-center mt-[50px] max-3xl:px-[45px] max-3xl:text-4xl max-xl:text-3xl max-xl:px-[30px]'>
						Kirish
					</button>
				</div>
				<img
					src={adverImage}
					alt='Girl using the Internet on her laptop'
					className='w-[456px] h-[456px]'
				/>
			</div>
		</div>
	)
}

export default Hero
