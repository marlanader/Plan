
import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ReactExport from "react-data-export";
import { TableHead } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const styles = {
 
  table:{
     borderColor: 'grey',
     borderStyle: 'solid',
     width:"40%",
     marginTop:40,
     marginRight:40
  },
  table2:{
    borderColor: 'grey',
    borderStyle: 'solid',
    marginTop:40,
    
    maxWidth:"60%"
    
 },
  tablerow:{
    borderColor: 'grey',
     borderStyle: 'solid'
  },
  button:{
    height:30,
    width:100
  },
  title:{
    borderColor: 'grey',
     borderStyle: 'solid',
     width:"40%"
  },
  paper:{
    display:"flex",
    justifyContent:"center"
  }
}
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
var todriver_sum=0, fromdriver_sum=0,trukto_sum=0,total_sum=0;


 class App extends Component 
 {

              
   state={
             rows: [{name:"وصف الحمولة",value:"منظفات"},
               {name:"وزن الحمولة",value:"50"},
               {name:"نوع السيارة", value:"نص نقل"},
               {name:"رقم السيارة", value:"12456"},
               {name:"اسم السائق", value:"Ahmed"},
               {name:"رقم السائق", value:"0123456789"},
               {name:"اسم المشغل", value:"Mohamed"},
               {name:"رقم المشغل", value:"01256856789"},
               {name:"رقم بطاقة الرقم القومي للمشغل", value:"25488223459"},
               {name:"عدد النقلات", value:"3"},
               {name:"مكان التحميل", value:"أكتوبر "},
               {name:"مكان التفريغ 1", value:"-"},
               {name:"مكان التفريغ 2", value:"-"},
               {name:"مكان التفريغ 3", value:"-"},
               {name:"ملاحظات خاصة بالطلب", value:""}

              ],
              rows2:[{name:"سعر 1", fromdriver_percentage:"50%",fromdriver_price:"500",todriver_percentage:"20%",todriver_price:"320",trukto_percentage:"18%",trukto_price:"200",total_percentage:"14%",total_price:"240"},
                      {name:"سعر 2", fromdriver_percentage:"30%",fromdriver_price:"600",todriver_percentage:"24%",todriver_price:"420",trukto_percentage:"15%",trukto_price:"370",total_percentage:"42%",total_price:"280"}, 
                      {name:"سعر 3", fromdriver_percentage:"10%",fromdriver_price:"230",todriver_percentage:"55%",todriver_price:"350",trukto_percentage:"16%",trukto_price:"120",total_percentage:"34%",total_price:"450"}
                    ]
              
       }

repeatRows=()=> {
      let arr = [];
      arr=this.state.rows.map((item)=>{
        let style=null;
        item.value === "" ? style= {fill: {patternType: "solid", fgColor: {fgColor: "grey"}}}:style={alignment:{readingOrder:2},border:{top:{style:"solid",color:"black"}}}
        return ([
            {value:item.value,style:style},
            {value:item.name ,style:{alignment:{readingOrder:2}}}
        ]
        )
        
      })
      console.log("arr",arr)
      return arr;
}

repeatRows2=()=>{

      let arr2 = [];
      arr2=this.state.rows2.map((item)=>{
        let style=null;
       
        return ([
            {value:item.total_price,style:{alignment:{readingOrder:2}}},
            {value:item.total_percentage ,style:{alignment:{readingOrder:2}}},
            {value:item.trukto_price ,style:{alignment:{readingOrder:2}}},
            {value:item.trukto_percentage ,style:{alignment:{readingOrder:2}}},
            {value:item.todriver_price ,style:{alignment:{readingOrder:2}}},
            {value:item.todriver_percentage ,style:{alignment:{readingOrder:2}}},
            {value:item.fromdriver_price ,style:{alignment:{readingOrder:2}}},
            {value:item.fromdriver_percentage ,style:{alignment:{readingOrder:2}}},
            {value:item.name,style:{alignment:{readingOrder:2}}}
        ]
        )
        
      })
      return arr2;
}

calculateTotal=()=>{
      
      
      this.state.rows2.map((item)=>{
          todriver_sum+=parseInt(item.todriver_price);
          fromdriver_sum+=parseInt(item.fromdriver_price);
          trukto_sum+=parseInt(item.trukto_price);
          total_sum+=parseInt(item.total_price);  
      })
      let sum=[[{value:total_sum},{},{value:trukto_sum},{},{value:todriver_sum},{},{value:fromdriver_sum},{},{value:"الإجمالي"}]]
      return sum;
}

componentDidMount(){
      this.repeatRows();
      this.repeatRows2();
      this.calculateTotal();
    }

render() {

  const { classes } = this.props;

  const multiDataSet = 
  [
          {
            xSteps: 4, 
            columns: [
              {title:"طلب شغل ", width:{wph:40}}],
            data: []
          },
          {
      
          columns: [{title:" ",width:{wch:40}},
          {title:" ", width:{wch:40}}],         
          data: this.repeatRows()
          }
  ]

  const multiDataSet2=
  [
    {
          columns: [
            {title:""},
            {title:"الإجمالي",width:{wch:13}},
            {title:""},
            {title:"المستحق لتركتو",width:{wch:13}},
            {title:""},
            {title:" المستحق للسائق",width:{wch:13}},
            {title:""},
            {title:" المستحق علي السائق", width:{wch:13}},
            {title:"البيان",width:{wch:13}}],
            data:[
              ["المبلغ","%","المبلغ","%","المبلغ","%","المبلغ","%",""]]
        },
        {
          columns: [],         
          data: this.repeatRows2()
        },
        { 
          columns:[],
          data:this.calculateTotal()
        },
        {
          
          ySteps:5,
          columns:[],
          data:[
            [{},{value:"لا يوجد مرتجع"},{},{value:"لم يتم تسليمه"},{},{value:" تم تسليمه"},{},{},{value:":المرتجع"}]
          ]
        }
  ]
  

  
  return (
    
           <div dir="rtl" className={classes.container}>
            
            <Paper className={classes.paper}>
            <ExcelFile element={<button className={classes.button}>تحميل</button>}>
                  <ExcelSheet dataSet={multiDataSet} name="Summary"/>
                    </ExcelFile>
                <Table className={classes.table}>
                <TableBody>
                    {this.state.rows.map(row => (
                      <TableRow className={classes.tablerow}>
                        <TableCell align="right" variant="h6">
                          {row.name}
                        </TableCell>
                        <TableCell align="right"  variant="h6">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </Paper>

            <Paper  className={classes.paper}>
                <ExcelFile element={<button className={classes.button}>تحميل</button>}>
                  <ExcelSheet dataSet={multiDataSet2} name="Summary2"/>
                    </ExcelFile>
                  
                <Table className={classes.table2}>
                  <TableHead>
                    <TableRow>
                    <TableCell align="right" variant="h6"> البيان</TableCell>
                   
                   <TableCell align="center" variant="h6" colSpan={2}>المستحق علي السائق</TableCell>
               
                    <TableCell align="center" variant="h6"colSpan={2}>المستحق للسائق</TableCell>
                   
                    <TableCell align="center" variant="h6" colSpan={2}>المستحق لتركتو</TableCell>
                   
                    <TableCell align="center" variant="h6" colSpan={2}> الإجمالي</TableCell>
                    
                    </TableRow> 
                    
                    <TableRow >
                    <TableCell  > </TableCell>
                    <TableCell  align="right" variant="h6">%</TableCell> 
                    <TableCell align="right" variant="h6">المبلغ</TableCell>      
                    
                          <TableCell align="right" variant="h6">%</TableCell> 
                              <TableCell align="right" variant="h6">المبلغ</TableCell>
                          
                    
                          <TableCell align="right" variant="h6">%</TableCell> 
                             <TableCell align="right" variant="h6">المبلغ</TableCell>
                          
                    
                        <TableCell align="right" variant="h6">%</TableCell> 
                          <TableCell align="right" variant="h6">المبلغ</TableCell>
                        
                    </TableRow>
                    </TableHead>
                  <TableBody>
                      {this.state.rows2.map(row => (
                        <TableRow className={classes.tablerow}>
                          <TableCell align="right" variant="h6">
                            {row.name}
                          </TableCell>
                          <TableCell align="right" variant="h6">{row.fromdriver_percentage}</TableCell>
                          <TableCell align="right" variant="h6">{row.fromdriver_price}</TableCell>
                          <TableCell align="right" variant="h6">{row.todriver_percentage}</TableCell>
                          <TableCell align="right" variant="h6">{row.todriver_price}</TableCell>
                          <TableCell align="right" variant="h6">{row.trukto_percentage}</TableCell>
                          <TableCell align="right" variant="h6">{row.trukto_price}</TableCell>
                          <TableCell align="right" variant="h6">{row.total_percentage}</TableCell>
                          <TableCell align="right" variant="h6">{row.total_price}</TableCell>
                          
                        </TableRow>
                      ))}
                      <TableRow>
                      <TableCell align="right" variant="h6" colSpan={2}>
                            الإجمالي
                          </TableCell>
                          
                      <TableCell align="right" variant="h6" colSpan={2}>{fromdriver_sum}</TableCell>
                      
                      <TableCell align="right" variant="h6" colSpan={2}>{todriver_sum}</TableCell>
                     
                      <TableCell align="right" variant="h6" colSpan={2} >{trukto_sum}</TableCell>
                      
                      <TableCell align="right" variant="h6" colSpan={2}>{total_sum}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              
                </Paper>
              
     </div>
    
               );
               
                }
            }
           
export default withStyles(styles)(App);
