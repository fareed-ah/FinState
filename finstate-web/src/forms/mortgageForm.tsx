import { Box, Container, Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react'

interface MortgageFormProps {

}

export const MortgageForm: React.FC<MortgageFormProps> = ({ }) => {
    return (
        <Container>
            <Typography gutterBottom>The mortgage payment calculator below estimates your monthly payment</Typography>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={2}>
                        <Typography>Asking Price</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField value="200,000"></TextField>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={2}>
                        <Typography>Down Payment</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" flexDirection="column" maxWidth={100}>
                            <TextField value="10.00%"></TextField>
                            <TextField value="20,000"></TextField>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={2}>
                        <Typography>Total mortgage</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" flexDirection="column" maxWidth={100}>
                            <TextField value="$180,000"></TextField>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={2}>
                        <Typography>Ammortization Period</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" flexDirection="column" maxWidth={100}>
                            <Select>
                                <MenuItem value={5}>5 Years</MenuItem>
                                <MenuItem value={10}>10 Years</MenuItem>
                                <MenuItem value={15}>15 Years</MenuItem>
                                <MenuItem value={20}>20 Years</MenuItem>
                                <MenuItem value={25}>25 Years</MenuItem>
                                <MenuItem value={30}>30 Years</MenuItem>
                            </Select>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={2}>
                        <Typography>Mortgage Rate</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" flexDirection="column" maxWidth={100}>
                            <TextField value="3.00%"></TextField>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={2}>
                        <Typography>Total mortgage payments (Monthly)</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" flexDirection="column" maxWidth={100}>
                            <TextField value="$1,200"></TextField>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </Container>

    );
}