import type { FC } from 'react'

const CategoryFreelancerCardSecond: FC = () => {
	return (
		<div className='border-[1px] border-solid border-black rounded-2xl bg-white px-[50px] max-2xl:px-6 py-[35px] max-2xl:py-5 relative shadow-secondCardShadow'>
			<h3 className='font-roboto font-semibold text-[30px] max-2xl:text-[24px] leading-[86%] text-[#1f2937] '>
				<span className='bg-secondary'>3D modeler</span>
			</h3>
			<p className='font-roboto text-[30px] max-2xl:text-xl font-normal leading-[103%] text-[#363636] my-[30px] max-2xl:my-5'>
				<span className='leading-[40px] max-2xl:leading-[10px]'>
					Siz uchun top 3D modelar ro’yhatini tuzib qoydik
				</span>
			</p>
			<div className='absolute right-[50px] bottom-[35px] max-2xl:right-6 max-2xl:bottom-[10px] cursor-pointer'>
				<svg
					width={81}
					height={21}
					viewBox='0 0 81 21'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M59.3036 20.7846L81 10.3923L59.3036 0V5.3923H0V14.3923H59.3036V20.7846Z'
						fill='#494949'
					/>
				</svg>
			</div>
		</div>
	)
}

export default CategoryFreelancerCardSecond
