
import { IconContext } from "react-icons";
import { BaseInput, SelectInput, TextAreaInput } from "./FormInput";
import { ImUndo2 } from "react-icons/im";

export default function SearchForm(){
    const selectOptions = [
        {title: "", value: "" },
        {title: "Clothing", value: 1},
        {title: "Food", value: 2},
    ]

    const selectOptions2 = [
        {title: "", value: "" },
        {title: "True", value: true},
        {title: "False", value: false},
    ]
    
    
    
    return (
        <form className="form-autoMatchDebug">
            <div>
                <label>
                    <span>
                    Product Type :
                    </span>
                    <SelectInput name="type" options={selectOptions}/>
                </label>
                <label>
                <span>
                    Source Transaction Ids:
                    </span>
                    <BaseInput name="STI" type="text"  placeholder=""/>
                </label>
                <label>
                <span>
                    Target Transaction Ids:
                    </span>
                    <BaseInput name="TTI" type="text"  placeholder=""/>
                   
                </label>
                <label>
                <span>
                    Recon Match Ids:
                    </span>
                    <BaseInput name="RMI" type="text" placeholder=""/>
                </label>
                </div>
                <div>
                <label>
                    <span>
                    Recon Rule :
                    </span>
                    <SelectInput name="reconRul" options={selectOptions2}/>
                </label>
            </div>
            <div>
                <div>
                    <button type="submit"> Debug </button>
                </div>
                <div>
                <button type="reset">
                    <IconContext.Provider value={{ color: "#4C97DF" }}><ImUndo2 /></IconContext.Provider>
                
                    Clear</button>
                </div>
            
            </div>
            <div>
                <label style={{display: "flex", justifyContent:"space-around", color:"#ABABAB"}}>
                    <span>
                    MatchedResult :
                    </span>
                    <TextAreaInput name="result" maxlength="50"/>
                </label>
            </div>
        </form>
    )
}