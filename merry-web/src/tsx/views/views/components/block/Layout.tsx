import React from 'react';
import { Switch, Route } from 'react-router-dom';

//screens
import Top from '../pages/top/Top';
import About from './About';
import Service from './Service';

class Default extends React.Component {
    render() {
        return (
            <div>
                <header style={styles.header}>head</header>
                <main style={styles.main}>
                    <Switch>
                        <Route exact path="/" component={Top} />
                        <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route render={() => <p>not found!.</p>} />
                    </Switch>
                </main>
                <footer style={styles.footer}>footer</footer>
            </div>
        );
    }
}

export default Default;

//css
const styles = {
    header: {
        height: 100,
        background: "#ddd",
    },
    main: {
        height: 200,
    },
    footer: {
        height: 100,
        background: "#ddd",
    }
}