export function ParseSearchResult(html) {
  if (!html) throw new Error("Can't parse Search result without data")

  const data = html
    .split('var ytInitialData = ')?.[1]
    ?.split(';</script>')[0]
    .split(/;\s*(var|const|let)\s/)[0]
  const json_data = JSON.parse(data)
  const results = []
  const details =
    json_data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents.flatMap(
      (s) => s.itemSectionRenderer?.contents
    )

  for (const detail of details) {
    const parsed = parseVideo(detail)
    results.push(parsed)
  }

  return results.filter((s) => s)
}

export function parseVideo(data) {
  const info = data?.videoRenderer

  if (!info) return

  return {
    id: info?.videoId,
    url: `https://www.youtube.com/watch?v=${info?.videoId}`,
    title: info?.title.runs[0].text,
    author: info?.ownerText.runs[0].text,
  }
}
