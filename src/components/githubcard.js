import React from "react"
import { Card, CardContent, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:150,
    margin:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GithubCard({title,description,stars,language}) {
    const classes = useStyles();
    return (
      <Grid item xs={4}>
      
   
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary" style={{height: '69px',
    overflowY: 'auto'}}>
            {description}
          </Typography>
          <Typography variant="body2" component="p">
           Star count: {stars? stars.totalCount : "N/A"} | Language: <span style={{
 color: language && language.color ? language.color : 'none'
}}>{language ? language.name : "N/A"}</span>
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      
    );
  }
  