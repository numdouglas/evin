import React,{} from "react"
import FileDropZone from "./FileDropZone";
import '../styling/file_drop_zone.css'

export default function App(props) {
    return (
        <div id='file_drop_parent'>
            <h1>Hello Converter!</h1>
            <FileDropZone className='file_drop_zone'/>
        </div>
    );
}