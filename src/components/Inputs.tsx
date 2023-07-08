import { useState } from "react"

// ======================== Start InputStaticLabel ========================
type inputProps = {
  labelContent: string,
  inputPlaceholder?: string,
  inputType: string,
  name: string,
  labelClass?: string,
  inputClass?: string
  state?: string,
  setState?: React.Dispatch<React.SetStateAction<string>> | undefined
}

export const InputStaticLabel = ({name, labelContent, labelClass, inputType, inputClass, inputPlaceholder, state, setState}: inputProps) => {
  const [show, setShow] = useState(false);
  const hadnleShowPass = () => {
    setShow(!show);
  }

  return (
    <div className="input-group">
      <label htmlFor={name} className={labelClass}>{labelContent}</label>
      <div>
        <input type={(show) ? "text" : inputType} placeholder={inputPlaceholder} 
          name={name} id={name} className={inputClass}
          value={state} onChange={e => {
            if(setState) {
              setState(e.target.value);
            }
          }}
        />
        {
          inputType === "password" &&
          <span className="capitalize" onClick={hadnleShowPass}>
            {(!show) ? "Show" : "Hide"}
          </span>
        }
      </div>
    </div>
  )
}
// ======================== End InputStaticLabel ========================


// ======================== Start InputMoveLabel ========================
export const InputMoveLabel = ({name, labelContent, labelClass, inputType, inputClass, inputPlaceholder, state, setState}: inputProps) => {
  const [show, setShow] = useState(false);

  const hadnleShowPass = () => {
    setShow(!show);
  }
  
  return (
    <div className="input-group-mouve">
      <input type={(show) ? "text" : inputType} 
        placeholder={inputPlaceholder} 
        id={name} className={inputClass}
        value={state}
        onChange={e => {
          if(setState) {
            setState(e.target.value);
          }
        }}
      />
      {
        inputType === "password" &&
        <span className="capitalize" onClick={hadnleShowPass}>
          {(!show) ? "Show" : "Hide"}
        </span>
      }
      <label htmlFor={name} className={labelClass}>{labelContent}</label>
    </div>
  )
}
// ======================== End InputMoveLabel ========================