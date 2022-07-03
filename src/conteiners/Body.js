import { Grid } from "@material-ui/core";

function Body () {
  return (
    <Grid container style={{height: '600px', padding: '0px 15px 0px 15px'}}>
      <Grid
        item
        xs={0}
        sm={0}
        md={2}
        lg={2}
      >
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={2}
        lg={8}
      >
        <Grid container justify='flex-start'>
         <Grid
          item
        >
          <h1>Temporada nueva, guardarropa nuevo</h1>
          <p>Descubre las tendencias que esta temporada tiene para ti y refréscate con los mejores looks.</p>
          <img src="../images/portada_mujeres.jpg" alt="Tendencias que inspiran tu estilo. Pulsa aquí para ver más tendencias de moda."></img>
        </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={0}
        sm={0}
        md={2}
        lg={2}
      >
      </Grid>
    </Grid>
  )
}

export default Body;