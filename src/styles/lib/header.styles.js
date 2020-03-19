import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily:  'Dancing Script, cursive',
    },
    links:{
        textDecoration: 'none',
        color: 'white',
        fontSize: 15,
        fontFamily: 'roboto',
    },
    getStarted:{
        textDecoration: 'none',
        color: 'white',
        fontSize: 15,
        border: '1px solid white',
        padding: '8px 10px',
        marginRight: 30,
        '&:hover':{
          color: 'red',
          border: 'none',
          backgroundColor: 'white',
        },
    },
}))
  