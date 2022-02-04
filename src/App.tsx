import './styles.css'
import { dummyData, dummyDataType } from './dummyData'
import { Box, Grid } from '@mui/material'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'

export default function App() {
  const [gridItems, setGridItems] = useState(dummyData)
  const handleOnDragEnd = (result: any) => {
    const items = Array.from(gridItems)
    const [reorderedItems] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItems)

    setGridItems(items)
  }

  return (
    <div className="App">
      <h1>react-beautiful-dnd-sample</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="gridItems">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* <Grid container spacing={2}> */}
              {gridItems.map((values: dummyDataType, idx: number) => {
                return (
                  <Draggable
                    draggableId={values.id}
                    index={idx}
                    key={values.val}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {/* <Grid item xs={4}> */}
                        <Box
                          sx={{
                            color: 'primary.contrastText',
                            backgroundColor: 'primary.main'
                          }}
                        >
                          {values.val}
                        </Box>
                        {/* </Grid> */}
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
              {/* </Grid> */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
