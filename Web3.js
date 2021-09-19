import React,{useState,useEffect} from 'react';

const Data3 = () => {
    const [Data3,setData3] = useState ({
        start:"",
        end:"",
        startSave:"",
        endSave:"",
    });


    const web = (async()=>{
        await fetch ('https://jsonplaceholder.typicode.com/todos');
        let startTime = new Date()?.toLocaleTimeString();
        let endTime = new Date()?.toLocaleTimeString();
        let startSaveTime= new Date()?.toLocaleTimeString();
        localStorage?.setItem("Response3",startTime);
        let endSaveTime = new Date ()?.toLocaleTimeString();

        setData3({
            start:startTime,
            end:endTime,
            startSave:startSaveTime,
            endSave:endSaveTime,
        });
    })
    useEffect(() => {setTimeout(() => { web();}, 5000);}, []);
    return(
        <div className="text-center" border="1">
            <section>
                <p>Start Time:{Data3.start}</p>
                <p>End Time:{Data3.end}</p>
                <p>Start Save Time:{Data3.startSave}</p>
                <p>End Save Time:{Data3.endSave}</p>
                <button className="btn btn-success mt-3 mb-3" onClick={web}>Click 3</button>

            </section>
        </div>
    )
    
}
export default Data3