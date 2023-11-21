import https from 'https'
import { ParseSearchResult } from './parser.js'

// const url = 'https://randomuser.me/api/'

export async function search(query) {
  if (!query) return
  const url = 'https://www.youtube.com/results?search_query=' + query
  const abnormal = '系統從您的電腦偵測到異常流量。'
  const body = await HandleRequest(url).then((res) => {
    if (res.indexOf(abnormal) !== -1) {
      throw new Error('驗證頁面: YouTube 偵測到機器人行為')
    }
    return ParseSearchResult(res)
  })
  console.log(body)
  return
}

function HandleRequest(req_url) {
  return new Promise(async (resolve, reject) => {
    let data = ''
    const res = await HttpsRequest(req_url).catch((error) => console.log(error))
    res.on('data', (chunk) => (data += chunk))
    res.on('end', () => resolve(data))
  })
}

function HttpsRequest(req_url) {
  return new Promise(async (resolve, reject) => {
    const req = https.request(req_url, resolve)
    req.on('error', (error) => {
      reject(error)
    })
    req.end()
  })
}

search()
