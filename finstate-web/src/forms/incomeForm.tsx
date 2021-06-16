import { Box, Button, Container, Divider, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { DoubleInputField } from '../components/doubleinputfield';
import { EmptyIncomeType, IncomeType } from '../types';

interface IncomeFormProps {

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

    inputLabel: {
        fontWeight: 500,
        fontSize: 20,
        margin: 8,
    },

    formLabelLeft: {
        fontWeight: 500,
        fontSize: 20,
        margin: 8,
        flex: 0.5,
    },

    inputField: {
        margin: 8,
        flex: 1,
        flexGrow: 1,
    },

    inputBlock: {
        marginTop: 8,
        marginBottom: 8,
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
        marginTop: 8
    },
})

export const IncomeForm: React.FC<IncomeFormProps> = ({ }) => {
    const classes = useStyles()
    const [incomeTypes, setIncomeTypes] = useState<IncomeType[] | []>([{ name: "", amount: 0 }])


    const addIncomeType = () => {
        setIncomeTypes(prevState => [...prevState, { name: "", amount: 0 }])
    }

    const setIncomeType = (index: number, type: string) => {
        let items: IncomeType[] = incomeTypes;
        items[index].name = type

        setIncomeTypes([...items]);
    }

    const setIncomeAmount = (index: number, amount: number) => {
        let items: IncomeType[] = incomeTypes;
        items[index].amount = amount

        setIncomeTypes([...items]);
    }

    const removeIncomeType = (index: number) => {
        let items: IncomeType[] = incomeTypes;
        items.splice(index, 1)
        setIncomeTypes([...items]);
    }

    return (
        <Box>
            <Typography className={classes.heading}>
                Part 1 - Property Income
            </Typography>
            <Typography className={classes.subheading}>The following section will determine your estimated income! </Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

            <Typography className={classes.prompt} gutterBottom>Please provide your own projected rental income or provide actual rental income if the property
                    is already rented out.</Typography>
            <TextField name="rental-income" label="Rental Income" variant="outlined" />

            <Typography className={classes.prompt} gutterBottom>Add any other types of income that may apply. Ex, storage, parking, laundry etc.</Typography>

            {incomeTypes.map((incomeType: IncomeType, index: number) => (
                <DoubleInputField key={index} index={index} setAmount={setIncomeAmount} setType={setIncomeType} removeItem={removeIncomeType} name={incomeType.name} amount={incomeType.amount} ></DoubleInputField>
            ))}
            <Button className={classes.addButton} onClick={() => addIncomeType()}>Add</Button>
        </Box>
    );
}