import React from 'react'

const Link = ({className, href, children})=>{

const onClick = (event)=>{

    if(event.metaKey || event.ctrlKey){ //If in case user performs ctrl + click on a link, we want the link to open on a new page which does not require the
                                        //any special functionalities of same-page loading. So we simply return null for the onClick event.
        return; 
    }

    event.preventDefault()
    window.history.pushState({},'',href) //This method allows to change the URL of the browser without reloading the entire page
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
}

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link