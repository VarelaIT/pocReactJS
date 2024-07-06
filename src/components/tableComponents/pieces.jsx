import { IconContext } from "react-icons";


export function TableHeader({ value, icon, sort, setSort }) {
  function evaluateSort(){
    if(sort !== null && sort.value === value){
        if (sort.order === "desc"){
            console.log(sort);
            setSort({value: value, order: "asc"})
            return;
        } 
    } 
     setSort({value: value, order: "desc"})
    
  }
    return (
    <th 
      style={{
        width: "150px",
        fontWeight: "normal",
        backgroundImage: (sort !== null && sort.value === value)? "linear-gradient(#F0FBFF, #B7D5FD)": "linear-gradient(#F0FBFF, #E4E4E4)" ,
        textAlign: "left",
        margin: "none",
        border: "1px solid #DDD",
      }}
      onClick={()=> evaluateSort()}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "130px 16px",
          gap: "4px",
          overflow: "hidden",
          height: "12px",
        }}
      >
        <span
          style={{
            width: "130px",
          }}
        >
          {value}
        </span>
          <a 
          style={{
            width: "16px",
          }} 
          
          >
            <IconContext.Provider value={{ color: "#4C97DF" }}>
              {icon && icon}
            </IconContext.Provider>
          </a>
      </div>
    </th>
  );
}

export function TableBody({ value }) {
  return (
    <td
      style={{ width: "150px", borderBottom: "1px solid #EEE", margin: "none" }}
    >
      {value}
    </td>
  );
}
