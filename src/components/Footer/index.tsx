import type { FC } from 'react'

const Footer: FC = () => {
	return (
		<div className='footer p-[140px] max-3xl:p-[100px] max-xl:px-10 flex justify-between'>
			<p className='font-roboto font-normal text-xl leading-[100%] text-[#4b5563] cursor-pointer'>
				© 2024 Freelancing Platform Team.
			</p>
			<ul className='flex gap-1 font-roboto font-normal text-xl leading-[100%] text-[#4b5563]'>
				<li className='cursor-pointer'>Privacy Policy</li>
				<li>|</li>
				<li className='cursor-pointer'> Terms & Conditions</li>
			</ul>
		</div>
	)
}

export default Footer
