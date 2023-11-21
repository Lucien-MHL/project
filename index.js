const { request } = require('http')
const axios = require('axios')

async function yt_search(search, options = {}) {
  let url = 'https://www.youtube.com/results?search_query=' + search
  options.type ??= 'video'
  if (url.indexOf('&sp=') === -1) {
    url += '&sp='
    switch (options.type) {
      case 'channel':
        url += 'EgIQAg%253D%253D'
        break
      case 'playlist':
        url += 'EgIQAw%253D%253D'
        break
      case 'video':
        url += 'EgIQAQ%253D%253D'
        break
      default:
        throw new Error(`Unknown search type: ${options.type}`)
    }
  }
  const body = await request(url)

  console.log({ body, options })
  if (
    body.indexOf(
      'Our systems have detected unusual traffic from your computer network.'
    ) !== -1
  )
    throw new Error('Captcha page: YouTube has detected that you are a bot!')
  return { body, options }
}

yt_search('慢慢等')
