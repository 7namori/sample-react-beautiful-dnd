import './styles.css'
import { dummyData, dummyDataType } from './dummyData'
import { Grid } from '@mui/material'

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Grid container>
        {dummyData.map((values: dummyDataType, idx: number) => {
          return (
            <Grid key={idx} item xs={4}>
              {values.val}
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
