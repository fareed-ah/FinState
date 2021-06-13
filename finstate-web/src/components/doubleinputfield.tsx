import { makeStyles, Theme, createStyles, Paper, IconButton, InputBase, Divider, InputAdornment, Container, Box } from '@material-ui/core';
import { Clear, Remove } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'

interface DoubleInputFieldProps {
    name: string | undefined,
    amount: number | undefined,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            "&:hover": {
                "& $removeButton": {
                    display: "flex"
                }
            },
        },
        input: {
            maxWidth: 300,
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            margin: 8,
            "&:hover, &:focus": {
                borderColor: "#000"
            },
        },
        typeInput: {
            marginLeft: theme.spacing(1),
            flex: 3,
        },
        amountInput: {
            marginLeft: theme.spacing(1),
            flex: 1.5,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        removeButton: {
            backgroundColor: "#D8473D",
            color: "#FFF",
            width: 30,
            height: 30,
            display: "none"
        }
    }),
);

export const DoubleInputField: React.FC<DoubleInputFieldProps> = ({ name, amount }) => {
    const classes = useStyles();

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
    };

    return (
        <Box display="flex" flexDirection="row" justifyItems="center" alignItems="center" className={classes.root}>

            <Paper component="form" variant="outlined" onSubmit={handleSubmit} className={classes.input}>
                <InputBase
                    onChange={(e) => {

                    }
                    }
                    value={name}
                    className={classes.typeInput}
                    placeholder="Income Type"
                />
                <Divider className={classes.divider} orientation="vertical" />
                <InputBase
                    onChange={(e) => {

                    }
                    }
                    value={amount}
                    className={classes.amountInput}
                    placeholder="Amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </Paper>
            < IconButton className={classes.removeButton} >
                <Remove />
            </IconButton >
        </Box>
    );
}