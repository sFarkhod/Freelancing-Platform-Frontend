import type { FC } from 'react'
import ServiceCard from './ServiceCard'

const PopularServices: FC = () => {
	return (
		<div className='-mt-[200px] max-3xl:-mt-[160px]'>
			<h2 className='font-roboto font-semibold text-[30px] max-3xl:text-[24px] leading-[86%] text-[#fff] px-20 max-3xl:px-10 pb-20 max-3xl:pb-10'>
				Ommabop xizmatlar
			</h2>
			<div className='flex gap-9 justify-center max-3xl:px-[65px] max-2xl:px-10'>
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</div>
		</div>
	)
}

export default PopularServices
