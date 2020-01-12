import React, { Component } from 'react';
import Header from 'src/components/partials/Header';
import Container from 'src/theme/Container';
import Button from 'src/theme/Button';

class Score extends Component {
	render() {
		const buttonProps = {
      text: 'GO TO HOMEPAGE',
      textColor: '#231900',
      bgColor: '#FFCC00',
      to: '/',
    };

		return (
			<Container>
				<Header />
				<h1>Score PAGE</h1>
				<Button
          {...buttonProps}
        />
			</Container>
		);
	}
}

export default Score;
