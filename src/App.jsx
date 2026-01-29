import axios from 'axios'
import { useState }from 'react'
import { useEffect }from 'react'

const App = () => {
  const [data, setdata] = useState([]);
  const[index,setindex]=useState(1)

  const getdata = async () => {
    let responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    
    setdata(responce.data);
  };
  useEffect(() => {
    getdata()
  },[index]);
 let PrintData =<h3 className="text-2xl flex absolute top-1/2 left-1/2 -translatex-1/2 -translatey-1/2 text-white ">Loading....</h3>;

  if (data.length > 0) {
    PrintData = data.map((elem, idx) => {
      return (
        <div key={idx} className="hello">

       <a href={elem.url}> 
         <div  className=" w-44 h-40 ">
            <img src={elem.download_url} alt="photo" className="w-full h-full object-cover rounded-lg"/>
          <div><h2 className="text-xl font-semibold">{elem.author}</h2></div>
        </div>
       </a>
        </div>

      );
    });
  }

  return (
    <div>
      

      <div className="flex flex-wrap gap-2 overflow-hidden">{PrintData}</div>
    <div className="flex   justify-center items-center">  
      <button className="bg-red-600 text-white text-xl rounded-lg pass active:scale-95 cursor-pointer text-center w-20"onClick={()=>{
       if (index>1){
        setindex(index-1)
       setdata([])
       }
      }}>
        prev
      </button>
      <button onClick={()=>{
        setdata([])
        setindex(index+1)
        

      }} className="bg-red-600 text-white text-xl rounded-lg pass active:scale-95 cursor-pointer w-20">
        Next
        </button>
        </div>
    </div>
  );
};

export default App;

