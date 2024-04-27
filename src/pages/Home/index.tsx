import CategoryFreelancer from '../../components/CategoryFreelancer'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import LookForJob from '../../components/LookForJob'
import PopularServices from '../../components/PopularServices'

const Home = () => {
	return (
		<div>
			<Hero />
			<PopularServices />
			<CategoryFreelancer />
			<LookForJob />
			<div className='h-80'></div>
			<Footer />
		</div>
	)
}

export default Home
