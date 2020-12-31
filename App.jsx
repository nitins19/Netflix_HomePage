import React from 'react';
import Series from "./Series"
import data from "./data.jsx";
function App()
{
    return(<>
    
    <h1 className="heading">List of Top 5 Netflix Series in 2020 </h1>
    <Series 
    imgsrc={data[0].imgsrc}
    series_name={data[0].series_name}
    link={data[0].link}     
    />
    <Series 
    imgsrc={data[1].imgsrc}
    series_name={data[1].series_name}
    link={data[1].link} 
     />
     <Series 
    imgsrc={data[2].imgsrc}
    series_name={data[2].series_name}
    link={data[2].link}     
    />
    <Series 
    imgsrc={data[3].imgsrc}
    series_name={data[3].series_name}
    link={data[3].link}     
    />
    <Series 
    imgsrc={data[4].imgsrc}
    series_name={data[4].series_name}
    link={data[4].link}     
    />

    </>);
}
export default App;
