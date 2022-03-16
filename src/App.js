import React, { useEffect, useState } from 'react';

// Import Components
import { Cards, Chart, CountryPicker } from './components';

// Import Functions
import { fetchData } from './api';

// Import Styles
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {

    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;