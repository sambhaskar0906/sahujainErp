// src/components/PaymentSubmission.js
import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Button,
    Grid
} from '@mui/material';

const PaymentSubmission = () => {
    const handleConfirmPay = () => {
        // Replace this with real payment logic
        alert('Payment Process Initiated!');
    };

    return (
        <Box>
            {/* Payment Summary */}
            <Box
                sx={{
                    mb: 4,
                    p: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #e8eaf6, #ffffff)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
            >
                <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                    Payment Summary
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Registration Fee</Typography>
                    <Typography>₹500</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Processing Charges</Typography>
                    <Typography>₹50</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <Typography>Total</Typography>
                    <Typography>₹550</Typography>
                </Box>
            </Box>

            {/* Payment Methods */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Choose Payment Method
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Button fullWidth variant="outlined" sx={{ py: 1.5, fontWeight: 600 }}>
                            💳 Debit/Credit Card
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button fullWidth variant="outlined" sx={{ py: 1.5, fontWeight: 600 }}>
                            🏦 Net Banking
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button fullWidth variant="outlined" sx={{ py: 1.5, fontWeight: 600 }}>
                            📱 UPI / QR Code
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {/* UPI Section */}
            <Box
                sx={{
                    mb: 3,
                    p: 2,
                    border: '1px dashed #9fa8da',
                    borderRadius: 2,
                    textAlign: 'center',
                    backgroundColor: '#f3f4ff'
                }}
            >
                <Typography variant="subtitle1" gutterBottom>
                    Scan this QR or enter UPI ID
                </Typography>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/QR_code_example.svg/800px-QR_code_example.svg.png"
                    alt="UPI QR"
                    width={130}
                    height={130}
                    style={{ marginBottom: 12 }}
                />
                <Typography variant="caption" color="textSecondary" display="block">
                    OR
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        mt: 1,
                        px: 2,
                        py: 1,
                        backgroundColor: '#fff',
                        border: '1px solid #c5cae9',
                        borderRadius: 1,
                        display: 'inline-block'
                    }}
                >
                    sahujaincollege@upi
                </Typography>
            </Box>

            {/* Confirm & Pay */}
            <Typography
                variant="caption"
                color="textSecondary"
                sx={{ display: 'block', mb: 2 }}
            >
                By clicking "Confirm & Pay", you agree to the terms and privacy policy of Sahu Jain College.
            </Typography>

            <Box textAlign="center">
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={handleConfirmPay}
                    sx={{
                        px: 5,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        boxShadow: 2,
                        textTransform: 'none'
                    }}
                >
                    Confirm & Pay ₹550
                </Button>
            </Box>
        </Box>
    );
};

export default PaymentSubmission;
