import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Layout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    const navigateToHome = () => navigate('/')
    return (
        <>
            <Box position="fixed" top="0" zIndex="9" width="1" bgcolor="#EDEDED">
                <Box py={1} px={4} display="flex" alignItems="center" gap={3}>
                    <Box onClick={navigateToHome}>
                        <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" alt="Oompa Loompa Logo" style={{ height: '25px' }} />
                    </Box>
                    <Typography>Ommpa Loompa´s Crew</Typography>
                </Box>

            </Box>
            {children}
        </>
    )
}

export default Layout