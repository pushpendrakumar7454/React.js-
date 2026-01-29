import React,{useState} from 'react';

const App = () => {
  const [data, setdata] = useState('');
  const [Para,setPara]=useState('');
  const[task,settask]=useState([])
  let Form=(e)=>{
    e.preventDefault()
  let copytask=[...task]
  copytask.push({data,Para})
  settask(copytask)

  setdata('')
  setPara('')  

  }
  
  let Deletetask=(idx)=>{
    let copytask=[...task]
    copytask.splice(idx,1)
    settask(copytask)

  }

  return (
    <div>
      <div className="flex w-full h-1000 ">
        <div className="w-140  h-80">
          <form className="flex flex-col info gap-4" onSubmit={(e)=>{
             Form(e)

          }}>
            <input type="text"placeholder="enter the text here..." className="text-xl font-semibold border-2 border-white text-white pass outline-none" value={data} onChange={(e)=>{
              setdata(e.target.value)
            }}/>
            <textarea type="text" placeholder="write Here..."className="text-3xl font-semibold border-2 border-white text-white pass outline-none" value={Para} onChange={(e)=>{
              setPara(e.target.value)
            }}></textarea>
            <button value="submit"className="bg-green-500 text-white text-2xl  pass rounded-sm cursor-pointer active:scale-95">Save</button>
          </form>
        </div>
        <div className="w-[2px] h-screen bg-amber-300 evene"></div>
        <div className=" w-190 flex flex-wrap gap-9 content-start h-500">

     {task.map((elem,idx)=>{
      return  <div  key={idx}className="bg-white w-87 h-110 shrink-0 rounded-xl flex flex-col justify-between pass">
            <h1 className="text-xl font-semibold text-center"> {elem.data}</h1>
            <p className="text-xl  text-center">{elem.Para}</p>
            <button className="bg-red-600 text-2xl text-white rounded-lg pass cursor-pointer active:scale-95" onClick={()=>{
              Deletetask(idx)
            }}>Delete</button>
          </div>
    
        
     })}
     </div>
      </div>
    </div>
  );
}

export default App;
