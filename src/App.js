import styles from './App.module.css'

import Clock from './Components/Clock'

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.AppHeader}>
        <Clock />
      </div>
    </div>
  );
}

export default App;
