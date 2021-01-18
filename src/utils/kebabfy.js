const fs = require('fs')
const path = require('path')

/**
 * Convert space-separated file name into kebab case
 * @param {*} fileName
 */
function kebabfy(fileName) {
  return fileName.replace(/\s/g, '-')
}

const works = fs.readdirSync('./assets/images/works')

console.log(works)

works.forEach(work => {
  const folderPath = path.join(__dirname, 'assets/test')
  const oldPath = path.join(folderPath, work)
  const newPath = path.join(folderPath, kebabfy(work))

  fs.renameSync(oldPath, newPath)
})
