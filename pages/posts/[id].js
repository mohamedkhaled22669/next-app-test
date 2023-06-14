import React from 'react'

export default function Detalis(props) {
    return (
        <div >
            {props.post.title}
            {props.post.body}
        </div>
    )
}


export async function getStaticPaths () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map(d => {
        return {
            params: {id : `${d.id}`}
        }
    })

    return {
        paths: paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()

    return{
        props: {
            post:data
        }
    }
}

// if i want requist all time want this post use alon
// export async function getServerSideProps(context) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const data = await res.json()

//     return{
//         props: {
//             post:data
//         }
//     }
// }