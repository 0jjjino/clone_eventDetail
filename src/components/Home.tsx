import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const [code, setCode] = useState("");

	const handleButtonClick: React.FormEventHandler<HTMLFormElement> = (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		navigate(`/${code}`);
	};

	return (
		<div>
			<Form onSubmit={handleButtonClick}>
				<Input
					placeholder="확인하고 싶은 이벤트 코드를 입력하세요."
					name="code"
					value={code}
					onChange={event => setCode(event.target.value)}
				/>
				<Button type="submit">이동</Button>
			</Form>
		</div>
	);
}

export default Home;

const Form = styled.form`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
`;

const Input = styled.input`
	width: 80%;
`;

const Button = styled.button`
	width: 10%;
`;
