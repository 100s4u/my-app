import classes from './Dialogs.module.css';

const Dialogs = () =>{
	return (
			<main>
				<div className="row">
					<div className={classes.main__contnet}>
						<div className={classes.main__contnet__dialogs}>
							<div className={classes.dialogs_items}>
								<div className={classes.dialog}>Sas</div>
								<div className={classes.dialog}>Alisa</div>
								<div className={classes.dialog}>As</div>
								<div className={classes.dialog}>Sos</div>
							</div>
							<div className={classes.messages}>
								<div className={classes.message}>Test</div>
								<div className={classes.message}>Testing</div>
								<div className={classes.message}>The Test</div>
							</div>
						</div>
					</div>
				</div>
			</main>	
		)
}

export default Dialogs;