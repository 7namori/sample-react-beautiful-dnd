import './styles.css'
import { dummyData, dummyDataType } from './dummyData'
import { Box, Grid } from '@mui/material'

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Grid container spacing={2}>
        {dummyData.map((values: dummyDataType, idx: number) => {
          return (
            <Grid key={idx} item xs={4}>
              <Box
                sx={{
                  color: 'primary.contrastText',
                  backgroundColor: 'primary.main'
                }}
              >
                {values.val}
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
