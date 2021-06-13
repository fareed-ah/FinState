import { Button, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { DoubleInputField } from '../components/doubleinputfield';
import { EmptyIncomeType, IncomeType } from '../types';

interface IncomeFormProps {

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
        marginTop: 8
    },
})

export const IncomeForm: React.FC<IncomeFormProps> = ({ }) => {
    const classes = useStyles()
    const [incomeTypes, setIncomeTypes] = useState<IncomeType[]>([])


    const addIncomeType = () => {
        setIncomeTypes(prevState => [EmptyIncomeType, ...prevState])
    }

    return (
        <Container>
            <Typography className={classes.prompt} gutterBottom>Please provide your own projected rental income or provide actual rental income if the property
                    is already rented out.</Typography>
            <TextField name="rental-income" label="Rental Income" variant="outlined" />

            <Typography className={classes.prompt} gutterBottom>Add any other types of income that may apply. Ex, storage, parking, laundry etc.</Typography>
            {incomeTypes.map((incomeType) => (
                <DoubleInputField name={incomeType.name} amount={incomeType.amount} ></DoubleInputField>
            ))}
            <Button className={classes.addButton} onClick={() => addIncomeType()}>Add</Button>
            <Button className={classes.doneButton}>Done</Button>
        </Container>
    );
}