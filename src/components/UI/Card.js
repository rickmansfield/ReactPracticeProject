import classes from './Card.module.css';

function Card(props) {
  // const classes = 'card ' + props.className;
  console.log('props', props);

  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card
// css modules create custom class names and prevent class name collisions. 