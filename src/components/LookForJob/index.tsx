import type { FC } from 'react'
const lookForJobImg = require('../../assets/images/look-for-job-image.png')

const LookForJob: FC = () => {
	return (
		<div className='my-[200px] max-3xl:my-[150px] max-2xl:my-[100px]'>
			<div className='flex justify-between items-center px-[170px] max-3xl:px-20 max-2xl:px-10 gap-[200px] max-3xl:gap-[150px] max-xl:gap-[50px]'>
				<img src={lookForJobImg} alt='look for job' className='w-2/5' />
				<div>
					<h2 className='font-makien text-[80px] max-2xl:text-[70px] max-xl:text-[60px] leading-[100%] text-primary font-normal tracking-normal text-left '>
						O’tirgan joyingizda
					</h2>
					<div className='flex items-center gap-5'>
						<h2 className='font-makien text-[90px] max-2xl:text-[80px] max-xl:text-[70px] leading-[100%] text-textYellow font-normal tracking-normal text-left '>
							Ish toping
						</h2>
					</div>
					<button className='h-[75px] px-[65px] bg-[#EFEFEF] rounded-[14px] shadow-buttonShadow font-abhaya text-primary text-5xl font-extrabold text-center mt-[50px] max-3xl:px-[45px] max-3xl:text-4xl max-xl:text-3xl max-xl:px-[30px]'>
						Kettik
					</button>
				</div>
			</div>
		</div>
	)
}

export default LookForJob
