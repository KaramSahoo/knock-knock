import React, {useEffect, useRef} from 'react'
import {TweenMax, TimelineLite, Power3} from 'gsap'
import './Ending.scss'

function Ending() {
    let app = useRef(null)
    let tl = new TimelineLite({delay: 0.8})

    let thank = useRef(null)

    useEffect(() => {
        const head1 = thank.children[0].children[0]
        const head2 = head1.nextSibling

        TweenMax.to(app, 0, {css: {visibility: 'visible'}})

        tl.staggerFrom([head1, head2], 1, {
            y:44,
            ease: Power3.easeOut,
            delay: 0.8
        }, .15, 'Start')
    }, [tl])
    return (
        <div  ref={el => app = el}>
            <div className='hero--container' ref={el => thank = el}>
                <h1>
                    <div className='hero--container--line'>
                        <div className='hero--container--line--inner'>
                            Thank You
                    </div>
                    </div>
                    <div className='hero--container--line'>
                        <div className='hero--container--line--inner'>
                            For Participating
                    </div>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default Ending
