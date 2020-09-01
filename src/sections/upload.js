import React, { useRef, useState, useEffect } from 'react';
 
function Upload({title}) {
    return <div className="uploadGroup"><Body title={title}/><Action/></div>;
}
 
function Body({title, action}) {
    return <span className="upload">{title}</span>
}

function Action() {
    let btnAddClassName = "add ";
    let btnEditClassName = "edit ";
    let btnDeleteClassName = "delete ";
    const [file, setFile] = useState(null);
    const fileUpload = useRef(null);
    const handleAddFileUpload = () => fileUpload.current.click()

    const handleAddFileEdit = () => {
        fileUpload.current.click();
    }

    const handleAddFileDelete = () => {
        setFile(null);
        fileUpload.current.value = null;
    }

    const onFileChange = (e) => {
        setFile(e.target.value)
        console.log(e.target.value, 'file change');
    }

    if (file) {
        btnAddClassName = "icons add hidden";
        btnEditClassName = "icons edit ";
        btnDeleteClassName = "icons delete ";
    } else {
        btnAddClassName = "icons add";
        btnEditClassName = "icons edit hidden";
        btnDeleteClassName = "icons delete hidden";
    }

    useEffect(() => {
        console.warn(file, 'The file value');
        if (file) {
            btnAddClassName = "icons add hidden";
            btnEditClassName = "icons edit ";
            btnDeleteClassName = "icons delete ";
        } else {
            btnAddClassName = "icons add";
            btnEditClassName = "icons edit hidden";
            btnDeleteClassName = "icons delete hidden";
        }
    }, [file])

    return <div className="btnGroup">
        <div className={btnAddClassName} onClick={handleAddFileUpload}></div> 
        <div className={btnEditClassName} onClick={handleAddFileEdit}></div>
        <div className={btnDeleteClassName} onClick={handleAddFileDelete}></div>
        <input ref={fileUpload} onChange={onFileChange} className="hidden" type="file" />
    </div>
}

export default Upload;