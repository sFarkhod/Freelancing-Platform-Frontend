import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Status404NotFound from '../pages/error/404NotFound'
import SignUp from '../pages/auth/signUp'
import RoleUser from '../pages/auth/roleUser'

const Root: FC = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>
				<Route path='/role/user' element={<RoleUser />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='*' element={<Status404NotFound />} />
			</Routes>
		</>
	)
}

export default Root
