import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    return(<div className="expense-item">
        <ExpenseDate dateE={props.dateE}></ExpenseDate>
        <div className="expense-item_description">
            <h2>{props.title}</h2></div>
        <div className="expense-item_price">{props.amount}</div>
        </div>
    )
}

export default ExpenseItem;