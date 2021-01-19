const fs = require('fs')
const path = require('path')

/**
 * Convert space-separated file name into kebab case
 * @param {*} fileName
 */
function kebabfy(fileName) {
  return fileName.replace(/\s/g, '-')
}

/**
 * Writes .md files with slug, title, and featuredImage
 */
function writeWorkMds() {
  const works = fs.readdirSync('../assets/images/works')
  works.forEach(work => {
    const workName = work.replace(/\..+$/, '')
    const newFileName = kebabfy(workName) + '.md'
    const filePath = path.join(__dirname, '../posts', newFileName)
    const content = `---
slug: "${kebabfy(workName)}"
title: "${workName}"
featuredImage: "../assets/images/works/${work}"
---

# ${workName}
`
    fs.writeFileSync(filePath, content)
  })
}

module.exports = {
  writeWorkMds,
}
