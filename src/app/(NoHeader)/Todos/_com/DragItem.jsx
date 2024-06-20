import React from 'react'

const DragItem = ({ sectionId, item, index }) => {

    const dragStartHandler = ({ sectionId, item, index }) => {
        console.log(sectionId, item, index);
    }
    return (
        <div draggable={true} onDragStart={() => dragStartHandler({ sectionId, item, index })}>DragItem</div>
    )
}

export default DragItem