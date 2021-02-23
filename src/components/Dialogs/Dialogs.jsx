import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {

	const Message = (props) => {
		return (
			<div className={classes.message}>{props.message}</div>
		)
	}
	const DialogItem = (props) => {
		return (
			<NavLink to={"/dialogs/" + props.id} className={classes.dialog} activeClassName={classes.active}>{props.name}</NavLink>
		)
	}

	let messagesElements = props.state.messages.map(m => <Message message={m.message} className={classes.message} />)
	let dialogsElement = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)

	return (
			<main>
				<div className="row">
					<div className={classes.main__contnet}>
						<div className={classes.main__contnet__dialogs}>
							<div className={classes.dialogs_items}>
								{dialogsElement}
							</div>
							<div className={classes.messages}>
								{messagesElements}
							</div>
						</div>
					</div>
				</div>
			</main>	
		)
}

export default Dialogs;