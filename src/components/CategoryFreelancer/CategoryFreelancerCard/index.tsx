import type { FC } from 'react'

const CategoryFreelancerCard: FC = () => {
	return (
		<div className='border-[1px] border-solid border-black rounded-2xl bg-primary px-[50px] py-[35px] relative'>
			<h3 className='font-roboto font-semibold text-[30px] leading-[86%] text-[#e3e3e3]'>
				3D modeler
			</h3>
			<p className='font-roboto text-[30px] font-normal leading-[103%] text-[#363636] my-[30px]'>
				<span className='bg-secondary leading-[40px]'>
					Siz uchun top 3D modelar ro’yhatini tuzib qoydik
				</span>
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
						fill='#8CDE29'
					/>
				</svg>
			</div>
		</div>
	)
}

export default CategoryFreelancerCard
