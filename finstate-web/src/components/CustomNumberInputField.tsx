import classes from '*.module.css';
import { Box, createStyles, Divider, IconButton, InputAdornment, InputBase, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { Remove } from '@material-ui/icons';
import React from 'react'

interface CustomNumberInputFieldProps {
    icon: string,
    label: string,
    placeholder: string
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {

        },
        input: {
            maxWidth: 300,
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            marginTop: 4,
            marginBottom: 16,
            "&:hover, &:focus": {
                borderColor: "#000"
            },
        },
        valueInput: {
            marginLeft: theme.spacing(1),
            flex: 3,
        },
        divider: {
            height: 28,
            marginLeft: 8,
            marginRight: 8,
        },
    }),
);

export const CustomNumberInputField: React.FC<CustomNumberInputFieldProps> = ({ icon, label, placeholder }: CustomNumberInputFieldProps) => {

    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" className={classes.root}>
            <Typography>
                {label}
            </Typography>
            <Paper variant="outlined" className={classes.input}>
                <Typography>
                    {icon}
                </Typography>
                <Divider className={classes.divider} orientation="vertical" />
                <InputBase
                    onChange={(e) => {

                    }
                    }
                    className={classes.valueInput}
                    placeholder={placeholder}
                />
            </Paper>
        </Box>
    );
}