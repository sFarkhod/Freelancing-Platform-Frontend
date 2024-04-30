import type { FC } from 'react'
import CategoryFreelancerCard from './CategoryFreelancerCard'
import CategoryFreelancerCardSecond from './CategoryFreelancerCardTwice'

const categoryFreelanceImage = require('../../assets/images/categories-freelancer-image.png')

const CategoryFreelancer: FC = () => {
	return (
		<div className='mt-[200px] max-3xl:mt-[150px] max-2xl:mt-[100px]'>
			<h2 className='font-roboto font-semibold text-[30px] max-3xl:text-[24px] leading-[86%] text-[#1F2937] px-20 max-3xl:px-10'>
				Qanday freelancer izlayapsiz
			</h2>
			<div className='mt-20 max-3xl:mt-10 flex justify-between items-center gap-[150px] max-3xl:gap-[100px] max-2xl:gap-[50px] px-20 max-3xl:px-10'>
				<div className='grid grid-cols-2 gap-x-[60px] gap-y-[84px] max-2xl:gap-y-[60px]'>
					<CategoryFreelancerCardSecond />
					<CategoryFreelancerCard />
					<CategoryFreelancerCard />
					<CategoryFreelancerCardSecond />
				</div>
				<img
					src={categoryFreelanceImage}
					alt='category freelance section'
					className='w-1/3'
				/>
			</div>
		</div>
	)
}

export default CategoryFreelancer
