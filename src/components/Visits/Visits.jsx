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
function createData(pageName, visitors, uniqueUsers, bounceRate) {
    return { pageName, visitors, uniqueUsers, bounceRate };
  }
  
  const rows = [
    createData('/argon/', 4569, 340, 46.53),
    createData('/argon/index.html', 3985, 319, 46.53),
    createData('/argon/charts.html', 3513, 294, 36.49),
    createData('/argon/tables.html', 2050, 147, 67, 50.87),
    createData('/argon/profile.html', 1795, 190, 49, 46.53),
  ];

const Visits = () => {
  return (
    <Paper elevation={3}
    sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: '#111C44',
        paddingTop:'1rem',
        borderRadius:'20px',
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
            >Page visits</Typography>
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
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'1rem',
            backgroundColor:'transparent'
        }}> */}
        <TableContainer>
      <Table 
      sx={{ minWidth: 0,width:'100%' }} 
      aria-label="simple table">
        <TableHead sx={{backgroundColor:'#0B1437'}}>
          <TableRow>
            <TableCell sx={{color:'#A0AEC0', textTransform:'uppercase'}}>PAGE NAME</TableCell>
            <TableCell align="center" sx={{color:'#A0AEC0', textTransform:'uppercase'}}>VISITORS</TableCell>
            <TableCell align="center" sx={{color:'#A0AEC0', textTransform:'uppercase'}}>UNIQUE USERS</TableCell>
            <TableCell align="center" sx={{color:'#A0AEC0', textTransform:'uppercase'}}>BOUNCE RATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  sx={{color:'white', fontWeight:'600'}}>
                {row.pageName}
              </TableCell>
              <TableCell align="center" sx={{color:'white'}}>{row.visitors}</TableCell>
              <TableCell align="center" sx={{color:'white'}}>{row.uniqueUsers}</TableCell>
              <TableCell align="center" sx={{color:'white'}}>{row.bounceRate}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* </Box> */}
    </Paper>
  )
}

export default Visits
