import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import { deleteDoc } from "firebase/compat/firestore"
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import Navbar from "./Navbar";
import { useParams, useLocation  } from "react-router-dom";
import FolderBreadCrumbs from "./FolderBreadCrumbs";
import AddFileButton from "./AddFileButton";
import File from "./File";
import '../static/css/file-management/Dashboard.scss'


export default function Dashboard() {
    const { folderId } = useParams();
    const { state = {} } = useLocation();
    const { folder, childFolders, childFiles} = useFolder(folderId, );

    

  return (
    <body>
        <Navbar />
        <section className="dashboard">
            <Container fluid >
                <div className="d-flex align-items-center">
                    <FolderBreadCrumbs currentFolder={folder} />
                    <AddFileButton currentFolder={folder} />
                    <AddFolderButton currentFolder={folder} />
                </div>
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFolders.map(childFolder => (
                            <div
                                key={childFolder.id}
                                style={{ maxWidth: "250px" }}
                                className="p-2"
                            >
                                <Folder folder={childFolder} />
                            </div>
                        ))}
                    </div>
                )}
                {childFolders.length > 0 && childFiles.length > 0 && <hr />}
                {childFiles.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFiles.map(childFile => (
                            <div
                            key={childFile.id}
                            style={{ maxWidth: "250px" }}
                            className="p-2"
                            >
                                <File file={childFile} />
                            </div>
                        ))}
                        <button>x</button>
                    </div>
                )}
            </Container>
          </section>
    </body>
  );
}
