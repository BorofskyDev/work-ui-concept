import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import '../static/css/file-management/File.scss'

export default function Folder({ folder }) {
    return (
        <Button
            to={{

                pathname: `/folder/${folder.id}`,
                state: { folder: folder},

            }}
            variant = "outline-dark"
            className="text-truncate w-100"
            as={NavLink}
            >
            <FontAwesomeIcon icon={faFolder} className="upload_icon" />{folder.name}
            </Button>
    )
}
