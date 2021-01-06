// import React from 'react';
function Food({ favourite }) {
	return <h3>{favourite}</h3>;
}
function App() {
	return (
		<div className='App'>
			<Food favourite='kimchi' />
			<Food favourite='ramen' />
			<Food favourite='sagiopsal' />
			<Food favourite='chukumi' />
			<h1>Hello!!</h1>
		</div>
	);
}

export default App;
