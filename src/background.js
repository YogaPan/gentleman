console.log('gentleman background script loaded', new Date().getTime())

const FALLBACK_URL = 'https://nhentai.net'
const BASE_URL = 'https://nhentai.net/g/'

const createNewTab = url => chrome.tabs.create({ url })

const isNumber = v => !isNaN(Number(v))

const createTabByNumber = number => {
  if (number.length > 6) number = number.slice(0, 6)
  const url = isNumber(number) ? BASE_URL + number : FALLBACK_URL
  createNewTab(url)
}

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  console.log('change', text)
  // suggest(suggestResults)
})

chrome.omnibox.onInputEntered.addListener((text, disposition) =>
  createTabByNumber(text)
)

chrome.contextMenus.create({
  title: 'gentleman',
  contexts: ['all'],
  onclick: info => createTabByNumber(info.selectionText)
})

chrome.commands.onCommand.addListener(command => {
  chrome.tabs.query({ url: 'https://nhentai.net/*' }, tabs => {
    const tabIds = tabs.map(tab => tab.id)
    chrome.tabs.remove(tabIds)
  })
})
