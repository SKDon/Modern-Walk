import './App.css';
import Home from './component/Home'
import Men from './component/Men'
import Women from './component/Women'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    padding: theme.spacing(2), 
  },
}));
function App() {
  const classes = useStyles();
  var men = "men's clothing";
  var women = "women's clothing";
  return (
    <div className={classes.content}>
      <Typography variant="h3" component="h3" className={classes.heading}>
        Modern Walk
      </Typography>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`${men}`} element={<Men />} />
          <Route path={`${women}`} element={<Women />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
