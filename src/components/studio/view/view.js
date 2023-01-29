import { useEffect } from "react";

const View = (props) => {
    // drag / drop
    const onDragOver = (e) => e.preventDefault();
    const onDrop = (e) => {
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = e.target;
        dropzone.appendChild(draggableElement);
        e.dataTransfer.clearData();
    }

    // init
    useEffect(() => {
        const container = document.querySelector('.main-view');
        for (let i = 0; i < 20; i++) {
            const elem = document.createElement('div');
            elem.style.borderBottom = '1px solid black';
            elem.style.minHeight = '50px';
            elem.style.padding = 0;
            //elem.style.paddingLeft = '500px';
            elem.classList.add('d-mode-bg');
            elem.classList.add('d-mode-light-border');
            
            elem.ondrop = onDrop;
            elem.ondragover = onDragOver;
            container.appendChild(elem);
        }
    });


    return (
        <div 
            className="main-view row border d-flex justify-content-center align-items-center overflow-auto" 
            style={{minHeight: '50vh', maxHeight: '50vh'}}
        >
        </div>
    );
}

export default View;