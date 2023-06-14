// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {posts} from '../../../posts'

export default function postsAll(req, res) {

    res.status(200).json(posts)
}
