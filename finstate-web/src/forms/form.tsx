import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IncomeForm } from './incomeForm';
import { ExpenseForm } from './expenseForm';
import { MortgageForm } from './mortgageForm';

interface FormProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontWeight: "bold",
            fontSize: theme.typography.pxToRem(18),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

export const Form: React.FC<FormProps> = ({ }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Income</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <IncomeForm />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <Typography className={classes.heading}>Expenses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ExpenseForm />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Mortgage Payments</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <MortgageForm />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Results</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
          </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}