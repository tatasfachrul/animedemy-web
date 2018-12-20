import React from 'react';
import { withStyles } from '@material-ui/core/styles';

class BackgroundShadowImage extends React.Component {
	render() {
		return <div style={{
				background: 'linear-gradient( transparent, rgba(0,0,0,0.4))',
				zIndex: 50,
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0}}
				/>;
	}
}

export default BackgroundShadowImage;
