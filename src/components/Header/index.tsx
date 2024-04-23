import type { FC } from 'react'
import { GlobalOutlined, SearchOutlined } from '@ant-design/icons'
import { MdOutlineTune } from 'react-icons/md'
import { styles } from '../../utils/styles'

const Header: FC = () => {
	return (
		<div className='w-full h-20 bg-white flex items-center justify-between px-5'>
			<div className='pl-10 max-2xl:pl-0'>
				<h2 className='text-textYellow font-monda font-[900] text-[32px] max-3xl:text-2xl leading-[20px] max-3xl:leading-[14px] tracking-normal shadow-sm cursor-pointer'>
					&nbsp;Ish <br />
					top
				</h2>
			</div>
			<nav>
				<ul className='flex items-center gap-10 max-3xl:gap-5'>
					<li>
						<div className={`${styles.headerActiveClass}`}>Asosiy</div>
					</li>
					<li>
						<div className={`${styles.headerClass}`}>Ish qidirish</div>
					</li>
					<li>
						<div className={`${styles.headerClass}`}>Resume joylash</div>
					</li>
					<li>
						<div className={`${styles.headerClass}`}>Ishchi qidiryapman</div>
					</li>
					<li>
						<div className='w-full h-10 bg-white border-searchInputBorder border-[1px] border-solid rounded-3xl flex items-center max-2xl:hidden'>
							<div className='flex items-center px-3 gap-3'>
								<SearchOutlined className='text-primary text-2xl max-3xl:text-xl cursor-pointer' />
								<input
									type='text'
									placeholder='Qidirish...'
									className={`${styles.textStyle} outline-none`}
								/>
							</div>
							<div className='w-[1px] h-7 bg-searchInputBorder'></div>
							<div className='flex items-center gap-5 px-5'>
								<div className={`${styles.textStyle}`}>Filtr</div>
								<MdOutlineTune className='text-primary text-2xl max-3xl:text-xl cursor-pointer' />
							</div>
						</div>
						<SearchOutlined className='text-primary text-2xl max-3xl:text-xl cursor-pointer 2xl:hidden' />
					</li>
				</ul>
			</nav>
			<div className='flex items-center gap-5'>
				<button className={`${styles.textStyle} pr-5 max-3xl:pr-0`}>
					Tizimga kirish
				</button>
				<button className='px-8 h-[60px] max-3xl:h-[50px] bg-primary flex justify-center items-center rounded-[30px] text-white font-mako font-normal text-[20px] max-3xl:text-base leading-[33px] tracking-normal'>
					Ro’yxatdan o’tish
				</button>
				<div>
					<GlobalOutlined className='text-primary text-2xl max-3xl:text-xl cursor-pointer' />
				</div>
			</div>
		</div>
	)
}

export default Header
