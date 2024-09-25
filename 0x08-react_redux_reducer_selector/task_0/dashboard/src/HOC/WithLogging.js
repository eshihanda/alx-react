import React from 'react';

function WithLogging(WrappedComponent) {
	const componentName = WrappedComponent.displayName
						 || WrappedComponent.name || 'Component';

	class HOC extends React.Component {
		componentDidMount() {
			console.log('Component ${componentName} is mounted')
		}

		componentWillUnmount() {
			console.log('component ${componentName} is going to mount');
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}
	HOC.displayName = `WithLogging(${componentName})`;
	return HOC;
}
export default WithLogging;