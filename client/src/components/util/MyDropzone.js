import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Divider, Image} from 'semantic-ui-react';

function MyDropzone(props) {

    const [droppedElements, setDroppedElements] = useState([]);

    let productId = props.productId;

    const previewFile = (file) => {
        setDroppedElements(prevState => (
            prevState, [...prevState, file.result]
        ));
    }

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                props.onUploadImageHandler(file, productId).then( () => {
                    previewFile(reader);
                });
            }

            reader.readAsDataURL(file);
        });
    }, [])
    const {getRootProps, getInputProps,} = useDropzone({onDrop})

    return (
        <>
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p >Ziehen Sie einige Dateien per Drag-and-Drop hierher oder klicken Sie, um Dateien auszuwählen</p>
            </div>
            {droppedElements.length ? (
                <>
                    <Divider />
                    <Image.Group size="small">
                        {droppedElements.map( (file, index) => (
                            <Image key={index} src={file} />
                        ))}
                    </Image.Group>
                </>
            ) : ""}
        </>
    )
}

export  default MyDropzone;