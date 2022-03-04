import { GETALL } from '../constant'

export const userReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case GETALL:
			return {
				users: payload,
                loading: true
			}

		default:
			return state
	}
}