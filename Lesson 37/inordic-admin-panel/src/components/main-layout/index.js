import React from 'react'

import Menu from '../menu/index.js'

import {Outlet} from "react-router-dom"

class MainLayout extends React.Component{
    constructor(){
        super()

        this.state = {
            menu: [
              {
                text: 'Main',
                link: '/'
              },
              {
                text: 'Goods',
                link: '/goods'
              },
              {
                text: 'Reviews',
                link: '/reviews'
              },
              {
                text: 'Users',
                link: '/users'
              }
            ]
          }
    }
    render(){
        return(
            <div>
                <header>
                    <Menu menu={this.state.menu}/>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        )
    }
}

export default MainLayout