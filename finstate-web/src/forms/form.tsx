import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, Typography, AccordionDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MortgageForm } from './mortgageForm';
import { FormHeader } from './FormHeader';
import { IncomeForm } from './IncomeForm';
import { ExpenseForm } from './ExpenseForm';

interface FormProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 64,
            paddingTop: 64,
            display: "flex",
            flexDirection: "column",
            color: "#2C3345",
        },

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

        button: {
            backgroundColor: "#000",
            color: "#FFF",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingRight: "32px",
            paddingLeft: "32px",
            marginTop: 64,
            alignSelf: "flex-start"
        },

        formControl: {
            margin: 8
        }
    }),
);

export const Form: React.FC<FormProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormHeader />
            <IncomeForm />
            <ExpenseForm />
            <MortgageForm />
            <Button className={classes.button}>Submit</Button>
        </div>
    );
}