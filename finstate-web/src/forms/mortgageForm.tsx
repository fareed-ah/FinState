import classes from '*.module.css';
import { Box, Container, Divider, Grid, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { CustomNumberInputField } from '../components/CustomNumberInputField';

interface MortgageFormProps {

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


    finalPayment: {

        backgroundColor: "#60C798",
        color: "#FFF",
        maxWidth: 220,
        padding: 24,
        borderRadius: 8
    }
})

export const MortgageForm: React.FC<MortgageFormProps> = ({ }) => {
    const classes = useStyles()
    return (
        <Box>
            <Typography className={classes.heading}>
                Part 3 - Mortgage Payment
            </Typography>
            <Typography className={classes.subheading}>The mortgage payment calculator below estimates your monthly payment </Typography>
            <Divider orientation="horizontal" variant="fullWidth" className={classes.sectionDivider} />

            <CustomNumberInputField label="Asking Price" icon="$" placeholder="250,000" />
            <Grid container direction="row" spacing={1}>
                <Grid item xs={6}>
                    <CustomNumberInputField label="Asking Price" icon="$" placeholder="250,000" />
                </Grid>
                <Grid item xs={6}>
                    <CustomNumberInputField label="Down Payment" icon="$" placeholder="25,000" />
                </Grid>

                <Grid item xs={6}>
                    <CustomNumberInputField label="Motgage Length" icon="years" placeholder="25" />
                </Grid>
                <Grid item xs={6}>
                    <CustomNumberInputField label="Mortgage Fees" icon="$" placeholder="5,000" />
                </Grid>

                <Grid item xs={6}>
                    <CustomNumberInputField label="Motgage Rate" icon="%" placeholder="2.5" />
                </Grid>
                <Grid item xs={6}>
                    <CustomNumberInputField label="Add fees to mortgage" icon="$" placeholder="5,000" />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Borrowing $12,500 and replaying over 25 years
                     </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="column" className={classes.finalPayment}>
                        <Typography>
                            Monthly payments of
                        </Typography>
                        <Typography variant = "h4">
                            $500
                        </Typography> 
                    </Box>
                </Grid>
            </Grid>


        </Box>

    );
}