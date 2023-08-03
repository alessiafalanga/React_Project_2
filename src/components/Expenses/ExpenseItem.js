import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";


const ExpenseItem = (props) => {
      
    return (
    // in un return ci può essere solo una radice div. Se si ha bisogno di più radici div, è necessario inserirle tutte in un unico div.
    <Card className='expense-item'>  
    <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>            
        </div>
    </Card>
    );
}

export default ExpenseItem;
//non aggiungo in index.js perchè non voglio che si ripeta.
//aggiungo il compenente nel codice HTML in APP


