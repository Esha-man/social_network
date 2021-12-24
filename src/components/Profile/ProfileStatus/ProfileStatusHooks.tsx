import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusHooks = (props: ProfileStatusPropsType) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

   const onEditMode = () => {
       setEditMode(true)
    }
   const offEditMode = () => {
      setEditMode(false)
       props.updateStatus(status)
    }
   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       setStatus(e.currentTarget.value)
    }

        return (
            <>
                {editMode === true ?
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={offEditMode}
                               value={status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={onEditMode}>{props.status || "No status"}</span>
                    </div>
                }
            </>
        )

}