import './ExpenseItem.css';

function ExpenseItem() {
    return (
    // in un return ci può essere solo una radice div. Se si ha bisogno di più radici div, è necessario inserirle tutte in un unico div.
    <div className='expense-item'>  
        <div>Date</div>
        <div className='expense-item__description'>
            <h2>Title</h2>
            <div className='expense-item__price'>Amount</div>
        </div>
    </div>
    );
}

export default ExpenseItem;
//non aggiungo in index.js perchè non voglio che si ripeta.
//aggiungo il compenente nel codice HTML in APP


