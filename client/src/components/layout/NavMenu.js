import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
const NavMenu = () => {
	
	return (
		<Navbar expand='lg' bg='primary' variant='dark' className='sticky-top shadow text-warning'>
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/'
						as={Link}
						id="home"
					>
						Home
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/login'
						as={Link}
						id="login"
					>
						Login
					</Nav.Link>
				</Nav>
				

			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavMenu
