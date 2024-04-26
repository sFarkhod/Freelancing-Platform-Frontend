import type { FC } from 'react'
const servicesCardImage = require('../../../assets/images/services-card-image.png')

const ServiceCard: FC = () => {
	return (
		<div className='shadow-cardShadow rounded-[14px] px-6 pb-6 bg-white '>
			<img
				src={servicesCardImage}
				alt='service card img'
				className='hover:shadow-cardImageShadow transition duration-300'
			/>
			<h3 className='font-roboto font-semibold text-[18px] leading-[120%] text-[#1F2937] mt-1'>
				Webb-Dizayner
			</h3>
			<p className='font-roboto font-light text-[10px] leading-[200%] text-[#1F2937]'>
				Kop yillik tajribali UI | UX dizaynerman.
			</p>
		</div>
	)
}

export default ServiceCard
