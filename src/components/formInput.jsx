export function SelectInput({name, options}){
    return (
        <select name={name}>
            {options.map((option, i) => {
                return (
                    <option key={"option"+i} value={option.value}>{option.title}</option>
                )
            })}
        </select>
    )
}

export function BaseInput({name, type, value, placeholder}){
    return(
        <>
          <input type={type} name={name} value={value} placeholder={placeholder}/>
         
        </>
      
    )
}

export function TextAreaInput({name, maxlength, value, placeholder}){
return (
    <textarea name={name} placeholder={placeholder} maxLength={maxlength}>{value}</textarea>
)
}