import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileDropZone() {
    
    const { acceptedFiles,getRootProps, getInputProps} = useDropzone();

    const files=acceptedFiles.map(file=>(
        <li key={file.path}>
            {file.path}-{file.size}bytes
        </li>
    ));

    return (
        <section>
        <div {...getRootProps({className:"dropzone"})}>
            <input {...getInputProps()} />
            <p>Drag and drop files here</p>
        </div>
        <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
        </aside>
        </section>

    )
}