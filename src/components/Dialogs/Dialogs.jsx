import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
	return (
			<NavLink to={"/dialogs/" + props.id} className={classes.dialog} activeClassName={classes.active}>{props.name}</NavLink>
		)
}

const Message = (props) =>{
	return(
			<div className={classes.message}>{props.message}</div>
		)
}

let dialogsData = [
	{id: 1, name: "Sas"},
	{id: 2, name: "Bob"},
	{id: 3, name: "Mark"},
	{id: 4, name: "Alisa"},
	{id: 5, name: "Sos"}
]
let dialogsElement = dialogsData
	.map(el =><DialogItem id={el.id} name={el.name}/>)

let messagesData = [
	{id: 1, message: "Test"},
	{id: 2, message: "Testing"},
	{id: 3, message: "The test"}
]

let messagesElements = messagesData.map (m =><Message message={m.message} className={classes.message}/>)

const Dialogs = (props) =>{
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