/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';



const Cards = ({cardDetails}) => {
  return (
    <Card sx={{
        width:'375px',
        height:'123px',
        backgroundColor:'#111C44',
        borderRadius:'20px',
        marginRight:'2rem'
    }}>
        <CardContent 
            sx={{
                color:'white',
                display:'flex',
                flexDirection:'column',
                gap:'1.5rem'
            }}
        >
            <Box
                sx={{
                    display:'flex',
                    width:'100%',
                    justifyContent:'space-between'
                }}
            >
                <div>
                <Typography
                    sx={{
                        color:'#A0AEC0',
                        fontWeight:'600',
                        fontSize:'12px',
                        textTransform:'uppercase'
                    }}
                >{cardDetails.caption}</Typography>
                <Typography
                sx={{
                    // color:'#A0AEC0',
                    fontWeight:'600',
                    fontSize:'18px'
                }}
                >{cardDetails.valueSign}{cardDetails.value.toLocaleString('en', {useGrouping:true})}</Typography>
                </div>


                <Button sx={{
                    backgroundColor:'#3182CE',
                    borderRadius:'8px',
                    minWidth:0,
                    width:'48px',
                    height:'48px'
                }}>
                    {cardDetails.icon}
                </Button>

            </Box>

            <Typography sx={{
                color:'#A0AEC0'
            }}>
                <span style={{color:cardDetails.profit > 0 ? '#48BB78' : '#E53E3E'}}>{cardDetails.profit}% </span>
                Since last month
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Cards
