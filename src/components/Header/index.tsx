import type { FC } from 'react'
import { GlobalOutlined, SearchOutlined } from '@ant-design/icons'
import { MdOutlineTune } from 'react-icons/md'
import { styles } from '../../utils/styles'

const Header: FC = () => {
	return (
		<div className='w-full h-20 bg-white flex items-center justify-between px-5'>
			<div className='pl-10'>
				<h2 className='text-textYellow font-monda font-[900] text-[32px] leading-[20px] tracking-normal shadow-sm'>
					&nbsp;Ish <br />
					top
				</h2>
			</div>
			<nav>
				<ul className='flex items-center gap-10'>
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
						<div className='w-full h-10 bg-white border-searchInputBorder border-[1px] border-solid rounded-3xl flex items-center'>
							<div className='flex items-center px-3 gap-3'>
								<SearchOutlined className='text-primary text-2xl cursor-pointer' />
								<input
									type='text'
									placeholder='Qidirish...'
									className={`${styles.textStyle} outline-none`}
								/>
							</div>
							<div className='w-[1px] h-7 bg-searchInputBorder'></div>
							<div className='flex items-center gap-5 px-5'>
								<div className={`${styles.textStyle}`}>Filtr</div>
								<MdOutlineTune className='text-primary text-2xl cursor-pointer' />
							</div>
						</div>
					</li>
				</ul>
			</nav>
			<div className='flex items-center gap-5'>
				<button className={`${styles.textStyle} pr-5`}>Tizimga kirish</button>
				<button className='px-8 h-[60px] bg-primary flex justify-center items-center rounded-[30px] text-white font-mako font-normal text-[20px] leading-[33px] tracking-normal'>
					Ro’yxatdan o’tish
				</button>
				<div>
					<GlobalOutlined className='text-primary text-2xl cursor-pointer' />
				</div>
			</div>
		</div>
	)
}

export default Header
