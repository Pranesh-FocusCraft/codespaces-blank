function UserProfilePage({ userName }) {
	return <h1> {userName} </h1>
}

export async function getServerSideProps(context) {
	console.log(Object.keys(context))

	return {
		props: {
			userName: 'Max',
		},
	}
}

export default UserProfilePage
