import Link from 'next/link'
import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <Link href="/home">home</Link>
            <Link href="/about">about</Link>
            <Link href="/outher">outher</Link>
            <Link href="/posts">Posts</Link>

            {props.children}

            <footer>
                Footer
            </footer>
        </div>
    )
}
