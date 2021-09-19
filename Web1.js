import React,{useState,useEffect} from 'react';

const Data1 = () => {
    const [Data1,setData1] = useState ({
        start:"",
        end:"",
        startSave:"",
        endSave:"",
    });


    const web = (async()=>{
        await fetch ('https://jsonplaceholder.typicode.com/comments');
        let startTime = new Date()?.toLocaleTimeString()
        let endTime = new Date()?.toLocaleTimeString();  
        let startSaveTime= new Date()?.toLocaleTimeString();
        localStorage?.setItem("Response1",startTime);
        let endSaveTime = new Date()?.toLocaleTimeString();

        setData1({
            start:startTime,
            end:endTime,
            startSave:startSaveTime,
            endSave:endSaveTime,
        });
    })
    useEffect(() => {setTimeout(() => { web();}, 5000);}, []);


    return(
        <div className="text-center">
            <section border="1">
                <p>Start Time:{Data1.start}</p>
                <p>End Time:{Data1.end}</p>
                <p>Start Save Time:{Data1.startSave}</p>
                <p>End Save Time:{Data1.endSave}</p>
                <button className="btn btn-success mt-3 mb-3" onClick={web}>Click 1</button>

            </section>
        </div>
    )
    
}
export default Data1;