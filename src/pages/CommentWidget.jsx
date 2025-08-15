import { Button, Input } from 'antd'
import React from 'react'

const CommentWidget = () => {
  return (
    <div>
      <Input type='text' placeholder='Add a comment...' style={{ width: '100%' }} />
      <Button type='primary' style={{ marginTop: '10px' }}>
        Comment
        </Button>
        <Button type='default' style={{ marginTop: '10px', marginLeft: '10px' }}>
        Cancel
        </Button>
    </div>
  )
}

export default CommentWidget
