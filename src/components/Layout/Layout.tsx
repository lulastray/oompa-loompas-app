import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logoOompa from "../../assets/logo-umpa-loompa.png"

function Layout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    const navigateToHome = () => navigate('/')
    return (
        <>
            <Box position="fixed" top="0" zIndex="9" width="1" bgcolor="#EDEDED">
                <Box py={1} px={4} display="flex" alignItems="center" gap={3}>
                    <Box onClick={navigateToHome}>
                        <img src={logoOompa} alt="Oompa Loompa Logo" style={{ height: '25px' }} />
                    </Box>
                    <Typography>Ommpa Loompa´s Crew</Typography>
                </Box>

            </Box>
            {children}
        </>
    )
}

export default Layout