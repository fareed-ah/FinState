
import { Typography, TextField, Button, makeStyles, Container } from '@material-ui/core';
import React, { useState } from 'react'
import { DoubleInputField } from '../components/doubleinputfield';
import { IncomeType, EmptyIncomeType } from '../types';

interface ExpenseFormProps {
}

const useStyles = makeStyles({
    doneButton: {
        backgroundColor: "#000",
        color: "#FFF",
    },
    addButton: {
        backgroundColor: "#4dbd90",
        color: "#FFF",
        marginRight: 8
    },
    prompt: {
    },
})

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ }) => {
    const classes = useStyles()
    const [expenseTypes, setExpenseTypes] = useState<IncomeType[]>([])

    const addIncomeType = () => {
        setExpenseTypes(prevState => [EmptyIncomeType, ...prevState])
    }

    return (
        <Container>
            <Typography className={classes.prompt} gutterBottom>Add any types of expenses that may apply to you. Ex, property tax, property manager, lawn care, repairs, utlities etc.</Typography>
            {expenseTypes.map((expenseType) => (
                <DoubleInputField name={expenseType.name} amount={expenseType.amount} ></DoubleInputField>
            ))}
            <Button className={classes.addButton} onClick={() => addIncomeType()}>Add</Button>
            <Button className={classes.doneButton}>Done</Button>
        </Container>
    );
}