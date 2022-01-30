import classes from './Dialogs.module.css';
import Item from './dialogs_items/Item';
import Massage from './Massage/Massage';

export default function (props) {
	const renderDialogs = () => {
		let dialogs = props.dialogs;
		return dialogs.map((dilog) => (
			<Item key={dilog.id} id={dilog.id} name={dilog.name} />
		));
	};

	const renderMassages = () => {
		let massages = props.massages;
		return massages.map((massage) => {
			return (
				<Massage
					key={massage.id}
					id={massage.id}
					name={massage.name}
					massage={massage.massage}
				/>
			);
		});
	};

	const updateMassageText = (event) => {
		let text = event.target.value;
		props.updateNewMassageText(text);
	};

	const sendMassage = () => {
		props.sendMassage();
	};

	return (
		<div className={classes.dialogs}>
			<h1 className={classes.title}>Dialogs</h1>
			<div className={(classes.wraper, 'flex')}>
				<ul className={classes.dialogs_list}>{renderDialogs()}</ul>
				<div className={classes.massages}>
					<ul className={classes.massages__list}>{renderMassages()}</ul>
					<textarea
						className={classes.createMassage}
						onChange={updateMassageText}
						value={props.newMassageText}></textarea>
				</div>
				<button onClick={sendMassage} className={classes.sendButton}>
					sendMass
				</button>
			</div>
		</div>
	);
}
