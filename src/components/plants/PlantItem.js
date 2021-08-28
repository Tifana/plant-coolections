import classes from './PlantItem.module.css'

function PlantItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <type>{props.type}</type>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>Add</button>
            </div>
        </li>
    )
}

export default PlantItem