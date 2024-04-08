import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { IoSettings,IoPerson,IoNotifications, IoWallet, IoGlobe, IoDocument,IoCart  } from "react-icons/io5";
import Cards from '../../components/Cards/Cards';
import Overview from '../../components/Overview/Overview';
import Orders from '../../components/Orders/Orders'
import Visits from '../../components/Visits/Visits';
import Traffic from '../../components/Traffic/Traffic';

const cardsData = [
    {
        id:1,
        caption:"Today's Money",
        value: 53897,
        valueSign: '$',
        profit: 3.48,
        icon: <IoWallet fontSize={23} color='white'/>
    },
    {
        id:2,
        caption:"Today's Users",
        value: 3200,
        valueSign: '',
        profit: 5.20,
        icon: <IoGlobe fontSize={23} color='white'/>
    },
    {
        id:3,
        caption:"New Clients",
        value: 2503,
        valueSign: '+',
        profit: -2.82,
        icon: <IoDocument fontSize={23} color='white'/>
    },
    {
        id:4,
        caption:'Total Sales',
        value: 173000,
        valueSign: '$',
        profit: 8.12,
        icon: <IoCart fontSize={23} color='white'/>
    },
]

const Dashboard = () => {
  return (
    <>
        <Box 
            sx={{
                padding:'2rem 2rem 2rem 1rem',
                // width:'100%',
                display:'flex',
                justifyContent:'space-between'
            }}
        >
        <Breadcrumbs aria-label="breadcrumb" color="white">
       
        <Typography color="white">Pages</Typography>
        <Typography color="white">Dashboard</Typography>
      </Breadcrumbs>

        <Box 
            sx={{
                display:'flex',
                gap:'5px',
                // justifyContent:'space-evenly'
            }}
        >

<Paper
      component="form"
      sx={{ p: '10px', display: 'flex', alignItems: 'center', width: 250, borderRadius:'8px',backgroundColor:'#111C44' }}
    >
      <IconButton type="button" sx={{ p: '5px',color:'#A0AEC0' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        
        sx={{ ml: 1, flex: 1,color:'#A0AEC0' }}
        placeholder="Type Here..."
      />
      
    </Paper>
            <Button sx={{display:'flex', alignItems:'center', gap:'5px',minWidth:'0'}}>
                <IoPerson color='white' fontSize={15}/>
                <Typography sx={{fontSize:'15px',marginLeft:'2px', textTransform:'capitalize', fontWeight:'500', color:'white'}}>Sign In</Typography>
            </Button>
            <Button sx={{display:'flex', alignItems:'center', minWidth:'0'}}>
                <IoSettings color='white' fontSize={15}/>
            </Button>
            <Button sx={{display:'flex', alignItems:'center',minWidth:'0'}}>
                <IoNotifications  color='white' fontSize={15}/>
            </Button>


        </Box>
        </Box>


        <Box
            sx={{
                display:'flex',
                paddingLeft:'16px'
            }}
        >
           {
            cardsData.map((card)=>{
                return(
                    <Cards key={card.id} cardDetails={card}/>
                )
            })
           }
        </Box>

        <Grid container 
        spacing={2} 
        sx={{
            margin:'2rem 0',
            // paddingRight:'2rem'
            // display:'flex',
            // justifyContent:'space-between',
            // gap:'1rem'
        }}
        >
        <Grid 
        item xs={7}
        
        >
                <Overview/>
            </Grid>
            <Grid item xs={5}  sx={{
            // margin:'2rem 0',
            paddingRight:'2rem'
            // display:'flex',
            // justifyContent:'space-between',
            // gap:'1rem'
        }}>
                <Orders/>
            </Grid>
        <Grid item xs={7}
        >
                <Visits/>
            </Grid>
            <Grid item xs={5}  sx={{
            // margin:'2rem 0',
            paddingRight:'2rem'
            // display:'flex',
            // justifyContent:'space-between',
            // gap:'1rem'
        }}>
                <Traffic/>
            </Grid>
            
        </Grid>
    </>
  )
}

export default Dashboard
