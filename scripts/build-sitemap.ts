import { SitemapStream, streamToPromise } from 'sitemap'
import { markdowns } from '../src/locales/how-to-use/markdowns'
import { writeFile } from 'fs/promises'
import { execSync } from 'child_process'

const langs = Object.keys(markdowns) as (keyof typeof markdowns)[]
const commitTimestamp = execSync('git log -1 --format=%at').toString().trim()
const commitDate = new Date(parseInt(commitTimestamp) * 1000)
const lastmod = commitDate.toISOString()

const smStream = new SitemapStream({
  hostname: 'https://how-to.lookscanned.io',
  lastmodDateOnly: false,
  xmlns: {
    // trim the xml namespace
    news: false, // flip to false to omit the xml namespace for news
    xhtml: true,
    image: false,
    video: false,
  },
})

const xmlBuffer = new Promise<Buffer>((resolve, reject) => {
  streamToPromise(smStream).then(resolve).catch(reject)
})

smStream.write({
  url: 'https://how-to.lookscanned.io',
  lastmod,
})

for (const lang of langs) {
  smStream.write({
    url: `https://how-to.lookscanned.io/how-to-use/${lang}`,
    lastmod,
  })
  smStream.write({
    url: `https://how-to.lookscanned.io/pdfs/how-to-use/${lang}.pdf`,
    lastmod,
  })
}

smStream.end()

const buffer = await xmlBuffer

// write to ./public/sitemap.xml
await writeFile('./public/sitemap.xml', buffer)
