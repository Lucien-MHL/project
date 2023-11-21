#!/usr/bin/env node
import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

let data, result

async function mockFetchList(str) {
  const searchSpinner = createSpinner(`查詢${str}中...`)
  searchSpinner.start()
  const sleep = (response) => new Promise((r) => setTimeout(r(response), 2000))
  const result = sleep([
    '慢慢等 - 官方版',
    '翻唱 韋禮安 慢慢等',
    '慢慢等 KTV 版本(純伴奏)',
    '慢慢等 (歌詞)',
    '韋禮安-慢慢等 (僅伴奏)',
    '韋禮安現場演唱會-慢慢等',
    '吳三不做死樂團 - 慢慢等 cover || feat: @韋禮安 ',
  ])

  if (result) {
    searchSpinner.success({ text: `有關 ${str} 的搜尋結果` })
    data = result
    return
  }
}

async function getKeyword() {
  const keyword = await inquirer.prompt({
    name: 'result',
    type: 'input',
    message: '搜尋:',
    prefix: '🔍',
    default: '\x1b[3m 請輸入關鍵字 \x1b[0m',
  })

  return mockFetchList(keyword.result)
}

async function getIndicate(data) {
  const indicate = await inquirer.prompt({
    name: 'result',
    type: 'list',
    // message: '搜尋結果清單\n',
    choices: data,
  })

  result = indicate.result
  return
}

async function end() {
  console.log(`這是你選的歌曲 ➡️ <${result}>`)
  return
}

await getKeyword()
await getIndicate()
await end()
