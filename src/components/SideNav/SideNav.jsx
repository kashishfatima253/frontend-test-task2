import {useState} from 'react';
import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import data from '../../constants/images/data';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { IoHome, IoStatsChart,IoCard,IoBuild,IoPerson,IoDocument,IoRocket } from "react-icons/io5";

const navLinks = [{

    main:[  
        {
            id:1,
            icon: <IoHome fontSize={15}/>,
            title: 'Dashboard'
        },
        {
            id:2,
            icon: <IoStatsChart fontSize={15}/>,
            title: 'Tables'
        },
        {
            id:3,
            icon: <IoCard fontSize={15}/>,
            title: 'Billing'
        },
        {
            id:4,
            icon: <IoBuild fontSize={15}/>,
            title: 'RTL'
        },
    ],

    accountPage:[
        {
            id:5,
            icon:<IoPerson fontSize={15}/>,
            title:'Profile'
        },
        {
            id:6,
            icon:<IoDocument fontSize={15}/>,
            title:'Sign In'
        },
        {
            id:7,
            icon:<IoRocket fontSize={15}/>,
            title:'Sign Up'
        },
    ]
}
]

const SideNav = () => {
    // const DrawerList = (
    //     <Box sx={{ width: 250,  }} role="presentation">
    //       <List>
    //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //           <ListItem key={text} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon
    //                 sx={{
    //                     backgroundColor:'white'
    //                 }}
    //               >
    //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //               </ListItemIcon>
    //               <ListItemText primary={text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //       <Divider />
    //       <List>
    //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //           <ListItem key={text} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon>
    //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //               </ListItemIcon>
    //               <ListItemText primary={text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //     </Box>
    //   );
    const [selectedItem, setSelectedItem] = useState(1);

    const handleItemClick = (itemId) => {
        setSelectedItem(itemId === selectedItem ? null : itemId);
      };
    return (
        <Box sx={{
        backgroundColor:'#111C44',
        borderRadius:'1rem',
        margin:'1rem',
        padding:'2rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        // gap:'2rem'
    }}>

        <Box
            sx={{
                width:'100%',
            }}
        >

            <div style={{display:'flex', justifyContent:'center'}}>

        <img src={data.dashboard_logo} alt="" />
            </div>
            <div style={{
                margin:'1rem 0',
                height:'2px',
                width:'100%',
                backgroundImage:'linear-gradient(to right,rgba(224, 225, 226, 0),#E0E1E2,rgba(224, 225, 226, 0.1563))'
            }}>

            </div>
        </Box>
        <List 
            sx={{
                display:'flex',
                flexDirection:'column',
                gap:'0.5rem',
                width:'100%'
            }}
        >
            {
            navLinks[0].main.map((item) => (
              <ListItem key={item.id} sx={{
                padding:'8px 0'
              }} >
                <ListItemButton
                selected={item.id === selectedItem}
                onClick={() => handleItemClick(item.id)}
                sx={{
                    "&.Mui-selected": {
                        backgroundColor: "#1B254B"
                      },
                    width:'100%',
                    color:"white",
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'1rem',
                    padding:'0.5rem 0 0.5rem 0.5rem',
                    // backgroundColor:item.title=== 'Dashboard' && '#1B254B',
                    borderRadius:'8px'
                  }}
                >
                  <ListItemIcon 
                  sx={{
                    color:item.id === selectedItem ?  'white' : '#3182CE', 
                    backgroundColor:item.id === selectedItem ? '#3182CE' : '#1B254B', //3182CE
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    minWidth:'0',
                    // padding:'1rem',
                    width:'30px',
                    height:'30px',
                    borderRadius:'8px',
                    // marginRight:'1rem'
                    }}>

                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{fontSize:'12px', fontWeight:'800'}} primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}

            <Typography variant="button"
                sx={{
                    color:'white',
                    fontWeight:'600',
                    fontSize:'15px',
                    // margin:'1rem 0'
                }}
            >
                ACCOUNT PAGES
            </Typography>

            
            {/* {
            
            navLinks[0].accountPage.map((item) => (
              <ListItem key={item.id} sx={{
                padding:'8px 0'
              }} >
                <ListItemButton
                // selected={item.id === selectedItem}
                // onClick={() => handleItemClick(item.id)}
                sx={{
                    "&.Mui-selected": {
                        backgroundColor: "#1B254B"
                      },
                    width:'219px',
                    color:"white",
                    display:'flex',
                    // flexDirection:'column',
                    justifyContent:'space-between',
                    // alignItems:'space-between',
                    padding:'0.5rem 0 0.5rem 0.5rem',
                    // backgroundColor:item.title=== 'Dashboard' && '#1B254B',
                    borderRadius:'8px'
                  }}
                >
                  <ListItemIcon 
                  sx={{
                    color:'#3182CE', 
                    backgroundColor:'#1B254B',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    minWidth:'0',
                    // padding:'1rem',
                    width:'30px',
                    height:'30px',
                    borderRadius:'8px',
                    // marginRight:'1rem'
                    }}>

                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))} */}

{
            navLinks[0].accountPage.map((item) => (
              <ListItem key={item.id} sx={{
                padding:'8px 0'
              }} >
                <ListItemButton
                selected={item.id === selectedItem}
                onClick={() => handleItemClick(item.id)}
                sx={{
                    "&.Mui-selected": {
                        backgroundColor: "#1B254B"
                      },
                    width:'100%',
                    color:"white",
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'1rem',
                    padding:'0.5rem 0 0.5rem 0.5rem',
                    // backgroundColor:item.title=== 'Dashboard' && '#1B254B',
                    borderRadius:'8px'
                  }}
                >
                  <ListItemIcon 
                  sx={{
                    color:item.id === selectedItem ?  'white' : '#3182CE', 
                    backgroundColor:item.id === selectedItem ? '#3182CE' : '#1B254B', //3182CE
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    minWidth:'0',
                    // padding:'1rem',
                    width:'30px',
                    height:'30px',
                    borderRadius:'8px',
                    // marginRight:'1rem'
                    }}>

                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{fontSize:'12px', fontWeight:'800'}} primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
            
          </List>

          <Box
           component="img"
           sx={{
             height: '170px',
             width: '250px',
             margin:'5rem 0 0.5rem 0'
           }}
           src={data.document_logo}
           />

           <Typography variant='subtitle1'
            sx={{
                fontSize:'20px',
                fontWeight:'600',
                color:'white'
            }}
           >
            Need Help?
           </Typography>
           <Typography variant='subtitle1'
            sx={{
                fontSize:'16px',
                // fontWeight:'600',
                color:'#A0AEC0'
            }}
           >
            Please check our docs
           </Typography>

            
           <Button 
        //    variant="contained"
            sx={{
                marginTop:'2rem',
                width:'100%',
                color:'white',
                backgroundColor:'#3182CE'
            }}
           >DOCUMENTATION</Button>
           <Button 
        //    variant="contained"
            sx={{
                marginTop:'1.5rem',
                width:'100%',
                color:'white',
                backgroundColor:'#0B1437'
            }}
           >UPGRADE TO PRO</Button>

    </Box>
  )
}

export default SideNav
