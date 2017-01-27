import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

// Split location into `/` separated parts, then render `Application` with it
function handleNewHash() {
	const locationArray = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
	const Application = <Root locationArray={locationArray} />
	render( Application, document.getElementById( 'webwork-app' ) )
}

// Handle the initial route and browser navigation events
handleNewHash()
window.addEventListener( 'hashchange', handleNewHash, false );
