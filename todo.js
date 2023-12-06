let nextId=0;
export default function todo(){
    const [item, setItem] = useState("");
    const [arr, setArr] = useState([]);

    return(
        <div>
        <input type='text' value={item} onChange={e => setItem(e.target.value)} />
        <button onClick={() => {setArr([...arr,{id: nextId++, name:item, } ])}}>Add</button>
        <ul>
           { arr.map(ar => 
           <li key={ar.id}>
                {ar.name} {" "}
                <button onClick={() => {setArr(arr.filter(a => a.id !== ar.id))}}>Delete</button>
                {/* If true, the element is included in the new array; if false, the element is excluded. */}
                {/* 
                Element(a)	a.id	ar.id	a.id !== ar.id
                Element 1	0	        2	true
                Element 2	1	        2	true
                Element 3	2	        2	false       
                Element 4	3	        2	true 
                */}
           </li>)}
           
        </ul>
        </div>
        
    )
}
