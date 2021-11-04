import React from 'react'
import Tag from './index'
export default {
     title: 'Tag',
     component: Tag
}
export const Basic = () => (
     <Tag />
)
export const TagProps = () => (
     <Tag title="My second tag" />
)