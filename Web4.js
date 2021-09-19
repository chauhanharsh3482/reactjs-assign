import React,{useState,useEffect} from 'react';

const Data4 = () => {
    const [Data4,setData4] = useState ({
        start:"",
        end:"",
        startSave:"",
        endSave:"",
    });


    const web =  (async()=>{
        await fetch ('https://jsonplaceholder.typicode.com/posts');
        let startTime = new Date()?.toLocaleTimeString();
        let endTime = new Date()?.toLocaleTimeString();
        let startSaveTime= new Date()?.toLocaleTimeString();
        localStorage?.setItem("Response4",startTime);
        let endSaveTime = new Date ()?.toLocaleTimeString();

        setData4({
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
                <p>Start Time:{Data4.start}</p>
                <p>End Time:{Data4.end}</p>
                <p>Start Save Time:{Data4.startSave}</p>
                <p>End Save Time:{Data4.endSave}</p>
                <button className="btn btn-success mt-3 mb-3" onClick={web}>Click 4</button>

            </section>
        </div>
    )
    
}
export default Data4