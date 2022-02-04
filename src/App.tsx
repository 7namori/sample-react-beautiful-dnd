import './styles.css'
import { dummyData, dummyDataType } from './dummyData'
import { Box, Grid } from '@mui/material'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function App() {
  return (
    <div className="App">
      <h1>react-beautiful-dnd-sample</h1>
      <DragDropContext onDragEnd={() => console.log('onDragEnd')}>
        <Droppable droppableId="gridItems">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* <Grid container spacing={2}> */}
              {dummyData.map((values: dummyDataType, idx: number) => {
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
