import React,{useState,useEffect} from 'react';

const Data2 = () => {
    const [Data2,setData2] = useState ({
        start:"",
        end:"",
        startSave:"",
        endSave:"",
    });


    const web= (async()=>{
        await fetch ('https://jsonplaceholder.typicode.com/photos');
        let startTime = new Date()?.toLocaleTimeString();
        let endTime = new Date()?.toLocaleTimeString();
        let startSaveTime= new Date()?.toLocaleTimeString();
        localStorage?.setItem("Response2",startTime);
        let endSaveTime = new Date ()?.toLocaleTimeString();

        setData2({
            start:startTime,
            end:endTime,
            startSave:startSaveTime,
            endSave:endSaveTime,
        });
    })
    useEffect(() => {setTimeout(() => { web();}, 5000);}, []);


    return(
        <div className="text-center ">
            <section border="1">
            
                <p>Start Time:{Data2.start}</p>
                <p>End Time:{Data2.end}</p>
                <p>Start Save Time:{Data2.startSave}</p>
                <p>End Save Time:{Data2.endSave}</p>
                <button className="btn btn-success mt-3 mb-3" onClick={web}>Click 2</button>

            </section>
        </div>
    )
    
}
export default Data2