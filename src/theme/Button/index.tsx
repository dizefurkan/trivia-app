import React from 'react';
import {
  Link
} from "react-router-dom";
import S from './style';

interface Props {
  text: string,
  textColor: string,
  bgColor: string,
  to: string,
}

const Button: React.FC<Props> = (props) => {
	const {
		text,
		textColor,
		bgColor,
		to,
	} = props;

	if (to) {
		return (
			<S.Button>
				<Link to={to}>
					{text}
				</Link>
			</S.Button>
		);
	}
	return (
		<S.Button>{text}</S.Button>
	)
}

export default Button;
