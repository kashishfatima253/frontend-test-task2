import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';

function createData(referral, visitors, percent ) {
    return { referral, visitors, percent };
  }
  
  const rows = [
    createData('facebook', 4569, 60),
    createData('facebook', 3985, 70),
    createData('google', 3513, 80),
    createData('instagram', 2050, 75),
    createData('twitter', 1795, 30),
  ];

const Traffic = () => {
  return (
    <Paper elevation={3}
    sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: '#111C44',
        // paddingRight:'2rem',
        borderRadius:'20px',
        paddingTop:'1rem'
      }}
    >
        <Box className="header" sx={{
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            paddingBottom:'2rem'
        }}>
            <Typography
                sx={{
                    fontSize:'18px',
                    fontWeight:'600',
                    color:'white',
                    padding:'0 1rem'
                }}
            >Social traffic</Typography>
            <Button
            sx={{
                backgroundColor:'#3182CE',
                color:'white',
                textTransform:'uppercase',
                fontWeight:'600',
                borderRadius:'8px',
                padding:'0.4rem 1rem',
                margin:'0 1rem'
            }}
            >See All</Button>
        </Box>

        {/* <Box sx={{
            width:'auto',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'1rem',
            backgroundColor:'transparent'
        }}> */}
        <TableContainer>
      <Table 
    //   sx={{ minWidth: 0,width:'420px' }} 
      aria-label="simple table">
        <TableHead sx={{backgroundColor:'#0B1437'}}>
          <TableRow>
            <TableCell sx={{color:'#A0AEC0', textTransform:'uppercase'}}>REFERRAL</TableCell>
            <TableCell align="center" sx={{color:'#A0AEC0', textTransform:'uppercase'}}>VISITORS</TableCell>
            <TableCell align="center" sx={{color:'#A0AEC0', textTransform:'uppercase'}}></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pageName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{color:'#A0AEC0', fontWeight:'600', textTransform:'capitalize',width:'auto',padding:'14px'}}>
                {row.referral}
              </TableCell>
              <TableCell align="center" sx={{color:'#A0AEC0',width:'auto',padding:'14px'}}>{row.visitors}</TableCell>
              <TableCell align="center" sx={{color:'#A0AEC0',padding:'14px'}}>
                <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                <Typography>{row.percent}%</Typography>
              <LinearProgress sx={{width:'120px'}} variant="determinate" value={row.percent} />
              </Box>
                </TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* </Box> */}
    </Paper>
  )
}

export default Traffic
