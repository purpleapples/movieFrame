import {Route,Switch, HashRouter as Router} from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Search from '../routes/Search';
import TV from '../routes/TV';
// Router 관리 component

export default () =>(
                    <Router>                        
                        <Header />
                        {/* Switch가 없이 router를 배치하면 모든 route를 탄다.
                        Switch를 활용하면 오로지 하나의 Route 만을 타게 된다.*/}
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/tv" exact component={TV}></Route>
                            <Route path="/search" exact component={Search}></Route>
                            <Route path="/movie/:id" exact component={Detail}></Route>
                            <Route path="/show/:id" exact component={Detail}></Route>                            
                        </Switch>
                    </Router>
                    );