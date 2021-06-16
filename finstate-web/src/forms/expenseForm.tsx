
import { Typography, TextField, Button, makeStyles, Container, Box, Divider } from '@material-ui/core';
import React, { useState } from 'react'
import { DoubleInputField } from '../components/doubleinputfield';
import { IncomeType, EmptyIncomeType } from '../types';

interface ExpenseFormProps {
}

const useStyles = makeStyles({
    sectionDivider: {
        marginTop: 32,
        marginBottom: 32,
    },

    heading: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 64,
    },

    subheading: {
        fontSize: 20,
        marginTop: 8,
    },

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
    const [expenseTypes, setExpenseTypes] = useState<IncomeType[]>([{ name: "", amount: 0 }, { name: "", amount: 0 }])

    const addExpenseType = () => {
        setExpenseTypes(prevState => [EmptyIncomeType, ...prevState])
    }

    const setExpenseType = (index: number, type: string) => {
        let itemToUpdate: IncomeType = expenseTypes[index]
        itemToUpdate.name = type
        expenseTypes[index] = itemToUpdate
        setExpenseTypes([...expenseTypes]);
    }

    const setExpenseAmount = (index: number, amount: number) => {
        let itemToUpdate: IncomeType = expenseTypes[index]
        itemToUpdate.amount = amount
        expenseTypes[index] = itemToUpdate
        setExpenseTypes([...expenseTypes]);
    }

    const removeExpenseType = (index: number) => {
        let items: IncomeType[] = expenseTypes;
        items.splice(index, 1)
        setExpenseTypes([...items]);
    }

    return (
        <Box>
            <Typography className={classes.heading}>
                Part 2 - Property Expenses
            </Typography>
            <Typography className={classes.subheading}>The following section will determine your estimated expenses! </Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

            <Typography className={classes.prompt} gutterBottom>Add any types of expenses that may apply to you. Ex, property tax, property manager, lawn care, repairs, utlities etc.</Typography>
            {expenseTypes.map((expenseType, index) => (
                <DoubleInputField setAmount={setExpenseAmount} setType={setExpenseType} removeItem={removeExpenseType} index={index} key={index} name={expenseType.name} amount={expenseType.amount} ></DoubleInputField>
            ))}
            <Button className={classes.addButton} onClick={() => addExpenseType()}>Add</Button>
            <Button className={classes.addButton} onClick={() => removeExpenseType(1)}>Remove</Button>

        </Box>
    );
}