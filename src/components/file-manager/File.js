import { faFile } from '@fortawesome/free-solid-svg-icons'
import { AiFillFileAdd } from 'react-icons/ai'
import React from 'react'
import '../static/css/file-management/File.scss'

export default function File({ file }) {
    return (
        <a href={file.url} 
        target="_blank" 
        className="btn btn-outline-dark text-truncate w-100">
            <AiFillFileAdd icon={faFile} className="flash_file" />
            {file.name}
        </a>
    )
}
