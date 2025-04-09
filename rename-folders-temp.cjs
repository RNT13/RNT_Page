const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, 'src') // ou '.' para toda a pasta
const excludedDirs = ['node_modules', '.git', 'dist', 'build']

// Função para renomear pastas adicionando "_temp"
function renameFolders(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true })

  items.forEach(item => {
    const fullPath = path.join(dir, item.name)

    if (item.isDirectory() && !excludedDirs.includes(item.name) && !item.name.endsWith('_temp')) {
      const newFolderName = `${item.name}_temp`
      const newFolderPath = path.join(dir, newFolderName)

      // Renomear a pasta
      fs.renameSync(fullPath, newFolderPath)
      console.log(`✅ Renomeado: ${fullPath} -> ${newFolderPath}`)

      // Recursivamente renomear subpastas
      renameFolders(newFolderPath)
    }
  })
}

console.log('🔁 Iniciando renomeação de pastas...')
renameFolders(rootDir)
console.log('✅ Renomeação finalizada.')
