import "./People.css";

const Person = ({ index, name, email, phone }) => (
	<div className='person' data-testid={`Container__Person__${index + 1}`}>
		<span>
			<b>{index + 1}.</b>
		</span>
		<span>{name}</span>
		<span>{email}</span>
		<span>{phone}</span>
	</div>
);

export default Person;
