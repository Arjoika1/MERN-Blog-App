import { Grid } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'
function Home() {
    return (
    <>
      <Banner/>

      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
           <Categories/>
        </Grid>
        <Grid item container lg={10} xs={12} sm={10}>
            <Posts/>
        </Grid>
      </Grid>
      </>
    )
}

export default Home
