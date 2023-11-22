#!/usr/bin/env node
import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

let keyword
const spin = createSpinner()

inquirer
  .prompt({
    name: 'keyword',
    message: '關鍵字查詢:',
    prefix: '🔍',
  })
  .then((res) => {
    keyword = res.keyword
    spin.start({ text: `查詢 ${res.keyword} 中` })
    return new Promise((r) => {
      setTimeout(
        () =>
          r([
            '慢慢等 - 官方版',
            '翻唱 韋禮安 慢慢等',
            '慢慢等 KTV 版本(純伴奏)',
            '慢慢等 (歌詞)',
            '韋禮安-慢慢等 (僅伴奏)',
            '韋禮安現場演唱會-慢慢等',
            '吳三不做死樂團 - 慢慢等 cover || feat: @韋禮安 ',
          ]),
        2500
      )
    })
  })
  .then(async (list) => {
    spin.success()
    console.clear()
    return await inquirer.prompt({
      name: 'result',
      message: `有關 ${keyword} 的搜尋結果`,
      type: 'list',
      prefix: '🔍',
      choices: list,
    })
  })
  .then((query) => {
    spin.start({ text: `載入<${query.result}>` })
    return new Promise((r) => {
      setTimeout(() => {
        r(query.result)
      }, 2000)
    })
  })
  .then((audio) => {
    spin.success()
    console.clear()
    console.log(`正位您撥放 ${audio}`)
  })
