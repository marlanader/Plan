import React , {Component} from "react"
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { borderRadius, flexbox } from "@material-ui/system";
import InfoIcon from "@material-ui/icons/Info";
const styles={

    div:{
        display:'flex', 
        justifyContent:'center'
    },
    card:{
            width:"80%",
         marginTop:20,   
        marginBottom:20,
        minWidth: 200,
        height:50,
        padding:10
    
    },
    content:{

        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    assign:{
       
        width:150,
        background:"#c0392b",
        fontSize:16

    },
    title:{
        padding:30,
        color:"black"
    },
    description:
    {
        display:"inline-block",
        fontSize:21
       
    },
    edit:
    {
        
        width:150,
        background:"#27ae60",
        fontSize:16
    },
    done:
    {
        
        width:150,
        fontSize:16
    }
}
class Notifications extends Component
{
    state={
        information:[{status:"تم التعيين", note:"لقد تم التعيين"}
        ,{status:"تعديل خطة", note:"لقد تم التعديل"},
        {status:"إنتهت", note:"إنتهت"}]
    }
    render()
    {
    const {classes}= this.props;
    return (
        <div dir="rtl">
                <Typography variant="h3"  className={classes.title}>
                    الإشعارات
                </Typography>
            <Paper className={classes.paper}>
                {this.state.information.map((info,i) => (
                <div className={classes.div}>
                    <Card  className={classes.card}>
                        <CardContent className={classes.content} >
                            {info.status=="تعديل خطة"? <Chip label={info.status} className={classes.edit}/>:null} 
                            {info.status=="تم التعيين"? <Chip label={info.status} className={classes.assign}/>:null} 
                            {info.status=="إنتهت"? <Chip label={info.status} className={classes.done}/>:null} 
                          <Typography variant="subtitle1"  className={classes.description}>
                              {info.note}
                            </Typography> 
                               <InfoIcon/>
                        </CardContent>
                    </Card>
                </div>
))}
            </Paper>
         </div>
        )
    }
}

export default withStyles(styles)(Notifications)