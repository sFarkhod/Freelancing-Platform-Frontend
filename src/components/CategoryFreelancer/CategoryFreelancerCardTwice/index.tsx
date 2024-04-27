import type { FC } from 'react'

const CategoryFreelancerCardSecond: FC = () => {
	return (
		<div className='border-[1px] border-solid border-black rounded-2xl bg-white px-[50px] py-[35px] relative shadow-secondCardShadow'>
			<h3 className='font-roboto font-semibold text-[30px] leading-[86%] text-[#1f2937] '>
				<span className='bg-secondary'>3D modeler</span>
			</h3>
			<p className='font-roboto text-[30px] font-normal leading-[103%] text-[#1f2937] my-[30px]'>
				Siz uchun top SMM menedjerlar ro’yhatini tuzib qoydik
			</p>
			<div className='absolute right-[50px] bottom-[35px] cursor-pointer'>
				<svg
					width='81'
					height='21'
					viewBox='0 0 81 21'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M59.3036 20.7846L81 10.3923L59.3036 0V5.3923H0V14.3923H59.3036V20.7846Z'
						fill='#494949'
					/>
				</svg>
			</div>
		</div>
	)
}

export default CategoryFreelancerCardSecond
