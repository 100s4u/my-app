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

const Dialogs = (props) =>{
	return (
			<main>
				<div className="row">
					<div className={classes.main__contnet}>
						<div className={classes.main__contnet__dialogs}>
							<div className={classes.dialogs_items}>
								<DialogItem id="1" name="Sas"/>
								<DialogItem id="2" name="Bob"/>
								<DialogItem id="3" name="Mark"/>
								<DialogItem id="4" name="Alisa"/>
								<DialogItem id="5" name="Sos"/>
							</div>
							<div className={classes.messages}>
								<Message message="Test" className={classes.message}/>
								<Message message="Testing" className={classes.message}/>
								<Message message="The test" className={classes.message}/>
							</div>
						</div>
					</div>
				</div>
			</main>	
		)
}

export default Dialogs;