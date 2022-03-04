import { Route } from 'react-router-dom'
import MenuUser from "../layout/NavMenu"

const UserRouter = ({ component: Component, ...rest }) => {
  
	return (
		<Route
			{...rest}
			render={props =>{
				 return (
						<>
							<MenuUser />
							<Component {...rest} {...props} />
						</>
					)
				
				
			}}
				
		/>
	)
}

export default UserRouter
