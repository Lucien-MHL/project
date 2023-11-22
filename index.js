#!/usr/bin/env node
import play from 'play-dl'
import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'
const spin = createSpinner()

inquirer
  .prompt({
    name: 'keyword',
    message: '關鍵字查詢:',
    type: 'input',
    prefix: '🔍',
  })
  .then(async (res) => {
    spin.start({ text: `查詢 ${res.keyword} 中` })
    const list = await play.search(res.keyword)
    return { list, key: res.keyword }
  })
  .then(async (data) => {
    spin.success()
    console.clear()
    const choose = await inquirer.prompt({
      name: 'result',
      message: `有關 ${data.key} 的搜尋結果`,
      type: 'list',
      prefix: '🔍',
      choices: data.list.map((item) => item.title),
    })
    return {
      info: data.list.find((item) => item.title === choose.result),
      name: choose.result,
    }
  })
  .then(async (info) => {
    spin.start({ text: `載入<${info.name}>` })
    const stream = await play.stream(info.info.url)
    return { stream, name: info.name }
  })
  .then((result) => {
    spin.success()
    console.log(result.stream)
  })
  .catch((err) => {
    throw new Error(err)
  })
