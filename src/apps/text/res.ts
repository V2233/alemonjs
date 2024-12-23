import { Text, useSend } from 'alemonjs'
export default OnResponse((event, next) => {
  if (!/^(#|\/)?text$/.test(event.MessageText)) {
    next()
    return
  }

  // 创建
  const Send = useSend(event)

  Send(Text('这个'), Text('标题', { style: 'bold' }), Text('被加粗了'))

  Send(Text('这个'), Text('标题'), Text('没有变化'))

  Send(
    Text(
      [
        `const Send = useSend(event)`,
        `Send(Text('这个'), Text('标题', { style: 'bold' }), Text('被加粗了'))`,
        `Send(Text('这个'), Text('标题'), Text('没有变化'))`
      ].join('\n'),
      {
        style: 'block'
      }
    )
  )

  //
}, 'message.create')