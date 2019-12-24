import BookApp from './pages/BookApp.jsx'
import BookPage from './pages/BookPage.jsx'
import BookAdd from './pages/BookAdd.jsx'
import Home from './pages/Home.jsx'
import AppHeader from './cmps/AppHeader.jsx'
import UserMsg from './cmps/UserMsg.jsx'
import About from './pages/About.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <UserMsg/>
                    <AppHeader/>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={BookApp} path="/books" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        <Route component={BookAdd} path="/bookAdd" exact></Route>
                        <Route component={About} path="/about" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)