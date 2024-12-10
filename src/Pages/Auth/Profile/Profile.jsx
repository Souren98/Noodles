import React, { useEffect } from "react";
import { CardContent, CardMedia, Typography, CircularProgress, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { profiledatafetch } from "../../../Redux/authSlice";
import { profile_pic } from "../../../Helper/Helper";

export default function Profile() {
    const { profileDetails, isLoading, isError } = useSelector((state) => state.authKey);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        dispatch(profiledatafetch());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress color="primary" />
            </div>
        );
    }

    if (!profileDetails && !isLoading) {
        return (
            <div>
                <Typography variant="h5" style={{ color: 'red', textAlign: 'center', marginBottom: '16px' }}>
                    No profile details available. Please Login.
                </Typography>
            </div>
        );
    }

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(/Images/1730287633635.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: isMobile ? '8px' : '16px',
            overflow: 'hidden'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: isMobile ? '90%' : '45%',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: isMobile ? '16px' : '24px',
                color: '#333',
                textAlign: 'center'
            }}>
                <CardMedia
                    component="img"
                    src={profileDetails?.profile_pic ? profile_pic(profileDetails.profile_pic) : 'error'}
                    alt="Profile"
                    style={{
                        width: isMobile ? '70%' : '50%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        marginBottom: '16px'
                    }}
                />
                <CardContent style={{ textAlign: 'center', width: '100%' }}>
                    {isError && (
                        <Typography variant="body1" style={{ color: 'red', marginBottom: '8px' }}>
                            Error fetching profile details.
                        </Typography>
                    )}
                    {!isError && profileDetails && (
                        <>
                            <Typography variant="h6" style={{
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                fontWeight: 700,
                                color: '#333',
                                marginBottom: '8px'
                            }}>
                                {profileDetails.first_name} {profileDetails.last_name}
                            </Typography>
                            <Typography variant="body1" style={{
                                fontSize: isMobile ? '1rem' : '1.25rem',
                                fontWeight: 500,
                                color: '#555'
                            }}>
                                Email: {profileDetails.email}
                            </Typography>
                            <Typography variant="body1" style={{
                                fontSize: isMobile ? '1rem' : '1.25rem',
                                fontWeight: 500,
                                color: '#555'
                            }}>
                                Role: {profileDetails?.role_data?.role}
                            </Typography>
                        </>
                    )}
                </CardContent>
            </div>
        </div>
    );
}
