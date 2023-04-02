import React, { useState } from 'react'
import './style/get-url.css'

const GetUrl = () => {
    const [toShorten, setToShorten] = useState('')
    const [link, setLink] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    // link to shorten validation and error handling
    const noLink = toShorten.length === 0;
    const validUrl = (/(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(toShorten));
    const disAllowed = (/\bshrtco.de\b/.test(toShorten));

    const handleError = () => {
        setTimeout(() => (
            setErrorMsg('')
        ), 5000)
        setToShorten('')
    }

    //submit using submitit button
    const shortenUrl = async () => {
        if (noLink) {
            setErrorMsg('Please add a link')
            setTimeout(() => (
                setErrorMsg('')
            ), 5000)
        } else if (!validUrl || disAllowed) {
            setErrorMsg('Not a valid URL')
            handleError()
        } else {
            fetch (`https://api.shrtco.de/v2/shorten?url=${toShorten}`)
            .then((response) => response.json()) 
            .then((data) => setLink(data.result))

            setToShorten('')
        }
    }

    // submit using keyboard enter button
    const handleEnterButton = async (e) => {
        if (e.keyCode === 13) {
            if (noLink) {
                setErrorMsg('Please add a link')
                setTimeout(() => (
                    setErrorMsg('')
                ), 5000)
            } else if (!validUrl || disAllowed) {
                setErrorMsg('Not a valid URL')
                handleError()
            } else {
                fetch (`https://api.shrtco.de/v2/shorten?url=${toShorten}`)
                .then((response) => response.json()) 
                .then((data) => setLink(data.result))
    
                setToShorten('')
            }
        }
    }


    // copy to clipboard
    const [copied, setCopied] = useState(false)

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(link.full_short_link)
            setCopied(true)
            setTimeout(() => (
                setCopied(false)
            ), 5000)
        } catch (e) {
            console.error('e', e)
        }
    }

    //prevent reload onSubmit 
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='wrapper'>
        <div className="shorten">
            <form className="input" onSubmit={handleSubmit} onKeyUp={handleEnterButton}>
                <input type="text"
                className={errorMsg ? 'error' : ''} 
                placeholder='Shorten a link here...'
                value={toShorten}
                onChange={(e) => setToShorten(e.target.value)}/>
                
                <div className={`op ${errorMsg ? 'error' : ''}`}>
                    <small className='error'>{ errorMsg }</small>
                </div>

            </form>
            
            <button type='button' 
             onClick={shortenUrl}>
                Shorten It!
            </button>
        </div>
        <div className= {`get-url ${link.length === 0 ? '' : 'active'}`}>
            <div className='initial'>{link.original_link}</div>
            <div className='finial'>
                <p>{link.full_short_link}</p>
                <button onClick={copyText} 
                 style={{backgroundColor: copied ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)'}}>
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetUrl