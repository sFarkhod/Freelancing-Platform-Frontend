import { useState, type FC } from 'react'
import { Modal, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { styles } from '../../../utils/styles'
import { MdOutlineTune } from 'react-icons/md'

const SearchModal: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState([false, false])

	const toggleModal = (idx: number, target: boolean) => {
		setIsModalOpen(p => {
			p[idx] = target
			return [...p]
		})
	}

	return (
		<div className='2xl:hidden'>
			<Space>
				<SearchOutlined
					className='text-primary text-2xl max-3xl:text-xl cursor-pointer 2xl:hidden'
					onClick={() => toggleModal(0, true)}
				/>
			</Space>
			<Modal
				title='Qidirish...'
				open={isModalOpen[0]}
				onOk={() => toggleModal(0, false)}
				onCancel={() => toggleModal(0, false)}
				footer=''
			>
				<div className='w-full m-auto h-10 bg-white border-searchInputBorder border-[1px] border-solid rounded-3xl flex justify-between items-center my-5'>
					<div className='flex items-center px-3 gap-3'>
						<SearchOutlined className='text-primary text-2xl max-3xl:text-xl cursor-pointer' />
						<input
							type='text'
							placeholder='Qidirish...'
							className={`${styles.textStyle} outline-none w-[300px] max-sm:w-full`}
						/>
					</div>
					<div className='flex'>
						<div className='w-[1px] h-7 bg-searchInputBorder'></div>
						<div className='flex items-center gap-5 px-5'>
							<div className={`${styles.textStyle}`}>Filtr</div>
							<MdOutlineTune className='text-primary text-2xl max-3xl:text-xl cursor-pointer' />
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default SearchModal
