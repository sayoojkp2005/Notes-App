import {useState} from "react"
function App(){

const[title,settitle]=useState("");
const[content,setcontent]=useState("");
const[note,setnote]=useState([]);
const[editid,seteditid]=useState(null);
const[color,setcolor]=useState("");


function addnote(){
  if(title.trim()===""||content.trim()===""){
    return ;
  }
  
    const newnote={
    id:Date.now(),
    title:title,
    content:content,
    color:color
    }

    setnote([...note,newnote]);
    settitle("");
    setcontent("");
    setcolor("")
    resetradio();
}

function deletenote(id){
  setnote(note.filter((note)=>note.id!==id))
  
}

const updateNote = () => {
  const updatedNotes = note.map((note) =>
    note.id === editid
      ? { ...note, title: title, content: content,color:color }
      : note
  );

  setnote(updatedNotes);
  settitle("");
  setcontent("");
  seteditid(null);
  resetradio();
};

const editNote = (note) => {
  settitle(note.title);
  setcontent(note.content);
  seteditid(note.id);
};
function resetradio(){
  setcolor(null);
}
  return (
<div className="h-screen ">
  <div className="h-screen">
        <section className="ml-10 mr-10 mt-20  ">
                <h1 className="font-bold text-5xl" 
                >Notes App</h1>
                <br />
                  <input className="w-80 px-3 py-2 mb-2 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm"

                  
                  type="text" 
                    placeholder="enter title"
                    value={title}
                    
                    onChange={(e)=>settitle(e.target.value)}/>
                  <br/>

                    <textarea
                    className="w-80 px-3 py-2  mb-2 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm"
                    placeholder="enter content"
                    value={content}
                    onChange={(e)=>setcontent(e.target.value)}></textarea>
                  <br />
                  
                  < button
                  className="bg-yellow-400 p-2 rounded-xl border border-yellow-500 shadow-sm "
                   onClick={editid !== null ? updateNote : addnote}
                   >
                  {editid !== null ? "Update Note" : "Add Note"}
                  </button>
                  <br /><br />
                 <p>choose colour theme:</p>
                 <div>
                 <input className="h-5 w-5  ml-2 mr-2 mt-3 mb-3 appearance-none rounded-full border-2 border-gray-400 bg-white checked:border-white checked:bg-red-500 checked:ring-2 checked:ring-red-500"
                  type="radio" name="colors" value={"bg-red-300"}
                  checked={color==="bg-red-300"}
                  onChange={(e)=>setcolor(e.target.value)}/>
                 
                   <input className= "h-5 w-5  ml-2 mr-2 mt-3 mb-3 appearance-none rounded-full border-2 border-gray-400 bg-white checked:border-white checked:bg-blue-500 checked:ring-2 checked:ring-blue-500"
                   type="radio" name="colors" value="bg-blue-300"
                   onChange={(e)=>setcolor(e.target.value)}
                   checked={color==="bg-blue-300"}/>
                    <input
  type="radio" name="colors" value="bg-green-300" checked={color==="bg-green-300"}
  onChange={(e)=>setcolor(e.target.value)}
  className="h-5 w-5 ml-2 mr-2 mt-3 mb-3 appearance-none rounded-full border-2 border-gray-400 bg-white checked:border-white checked:bg-green-500 checked:ring-2 checked:ring-green-500"
/>
                    </div>
        </section>
        <section className="ml-10" >
         
                  <h1 className="font-bold mb-1 text-2xl">My Notes</h1>
                   <hr/> 
<div className="grid grid-col-8 gap-4 p-6 bg-gray-50  ">
                 {note.map((note) => (
                 <div key={note.id} className={`${note.color} mt-1 w-50 rounded-xl border border-slate-200/80 shadow-sm  js-fit-containerflex items-center overflow-hidden`}>
                
                  <h3 className=" mb-3 ml-5 mr-5 mt-3 w-fit font-bold js-fit-text whitespace-nowrap inline-block ">{note.title}</h3>
                 <p className=" ml-5 mr-5  mb-3 whitespace-normal break-words text-gray-800 text-lg font-medium tracking-normal text-left ">{note.content}</p>

                 <button  className="bg-yellow-400 px-3 py-1 rounded-xl mb-1 ml-3 mr-5 border border-yellow-500 shadow-sm "
                 onClick={() => editNote(note)}>Edit</button>&nbsp;&nbsp;

                 <button  className="bg-yellow-400 px-3 py-1  rounded-xl mb-3 mr-3 border border-yellow-500 shadow-sm  "
                  onClick={() => deletenote(note.id)}>Delete</button>
                 </div>
                ))}
                </div>
        </section>
        </div>

</div>

  )


}export default App;