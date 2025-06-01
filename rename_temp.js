// node rename_temp.js add para adicionar sufixo "_temp"
// node rename_temp.js remove para remover sufixo "_temp"

import fs from 'fs';
import path from 'path';

const suffix = '_temp';
const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');

if (!fs.existsSync(srcDir)) {
  console.error('Erro: pasta src/ não encontrada no diretório atual.');
  process.exit(1);
}

const command = process.argv[2];
if (!['add', 'remove'].includes(command)) {
  console.error('Use: node rename_temp.js add OR node rename_temp.js remove');
  process.exit(1);
}

/**
 * Helper: verifica se um nome está em camelCase
 */
function isCamelCase(name) {
  // camelCase: primeira letra minúscula, não pode ter underline ou espaço, pode ter maiúsculas internas
  return /^[a-z][a-zA-Z0-9]*$/.test(name);
}

/**
 * Helper: verifica se um nome está em PascalCase
 */
function isPascalCase(name) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}

/**
 * Corrige nome para camelCase
 */
function toCamelCase(name) {
  // remover _temp se tiver antes
  if (name.endsWith(suffix)) name = name.slice(0, -suffix.length);

  // Se for extensão, preservar
  const ext = path.extname(name);
  let base = path.basename(name, ext);

  // Se nome tiver underscores, hífens, espaços: converter para camelCase simples
  base = base
    .split(/[-_\s]+/)
    .map((word, idx) => {
      if (idx === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  return base + ext;
}

/**
 * Corrige nome para PascalCase
 */
function toPascalCase(name) {
  if (name.endsWith(suffix)) name = name.slice(0, -suffix.length);

  const ext = path.extname(name);
  let base = path.basename(name, ext);

  base = base
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  return base + ext;
}

/**
 * Corrige o case dos arquivos e pastas conforme regras:
 * - src/App.tsx = PascalCase "App.tsx"
 * - arquivos e pastas em src/components = PascalCase
 * - arquivos e pastas em src (exceto components e App.tsx) = camelCase
 */
function fixCase(filePath) {
  const relPath = path.relative(srcDir, filePath);
  const parts = relPath.split(path.sep);

  const name = path.basename(filePath);
  const ext = path.extname(name);
  const parentDir = parts.length > 1 ? parts[0] : ''; // primeira pasta dentro de src, se existir

  let correctedName = name;

  // Caso especial App.tsx na raiz src
  if (relPath === 'App.tsx') {
    // deve ser PascalCase (App.tsx)
    correctedName = toPascalCase(name);
  } else if (parentDir === 'components') {
    // dentro de components, todos PascalCase
    correctedName = toPascalCase(name);
  } else {
    // dentro da src (exceto components e App.tsx) camelCase
    correctedName = toCamelCase(name);
  }

  // Se já está correto, retorna null
  if (correctedName === name) return null;

  return path.join(path.dirname(filePath), correctedName);
}

/**
 * Renomeia um arquivo/pasta, trata erro EBUSY
 */
function safeRename(oldPath, newPath) {
  try {
    if (fs.existsSync(newPath)) {
      console.warn(`Aviso: destino já existe, pulando renomeação: ${newPath}`);
      return;
    }
    fs.renameSync(oldPath, newPath);
    console.log(`${oldPath} → ${newPath}`);
  } catch (error) {
    if (error.code === 'EBUSY' || error.code === 'EPERM') {
      console.warn(`Arquivo em uso, não foi possível renomear: ${oldPath}`);
    } else {
      console.error(`Erro ao renomear ${oldPath}:`, error.message);
    }
  }
}

/**
 * Percorre recursivamente um diretório (profundidade)
 */
function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Chama callback no fullPath antes dos filhos para renomear arquivos primeiro
    if (!callback(fullPath, entry)) {
      // callback retornou falso = pular descendência
      continue;
    }

    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    }
  }
}

/**
 * Corrige os nomes para o case correto dentro de src, antes de adicionar/remover suffix
 */
function fixCasesInSrc() {
  // Primeiro renomeia arquivos (profundidade menor), depois pastas (profundidade maior) para evitar erros
  // Vamos percorrer duas vezes: arquivos primeiro, depois pastas

  // 1) arquivos
  walkDir(srcDir, (fullPath, entry) => {
    if (entry.isFile()) {
      const fixed = fixCase(fullPath);
      if (fixed) {
        safeRename(fullPath, fixed);
        return false; // item renomeado, pular para não mexer com filho (não tem filho em arquivo)
      }
    }
    return true; // continua descendo
  });

  // 2) pastas (em ordem inversa para renomear pastas internas primeiro)
  // pegar todas pastas para renomear depois
  const folders = [];
  function collectFolders(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        collectFolders(fullPath);
        folders.push(fullPath);
      }
    }
  }
  collectFolders(srcDir);

  // Agora renomeia as pastas coletadas
  folders.reverse().forEach((folder) => {
    const fixed = fixCase(folder);
    if (fixed) {
      safeRename(folder, fixed);
    }
  });
}

/**
 * Adiciona sufixo _temp em todos arquivos e pastas dentro de src
 */
function addSuffix() {
  // Para evitar erro de renomear pasta antes dos arquivos dentro dela, renomear arquivos primeiro e depois pastas (em ordem reversa)

  // 1) arquivos
  walkDir(srcDir, (fullPath, entry) => {
    if (entry.isFile()) {
      if (!fullPath.endsWith(suffix)) {
        const newName = fullPath + suffix;
        safeRename(fullPath, newName);
        return false;
      }
    }
    return true;
  });

  // 2) pastas
  // Coletar pastas
  const folders = [];
  function collectFolders(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        collectFolders(fullPath);
        folders.push(fullPath);
      }
    }
  }
  collectFolders(srcDir);
  folders.reverse().forEach((folder) => {
    if (!folder.endsWith(suffix)) {
      const newName = folder + suffix;
      safeRename(folder, newName);
    }
  });
}

/**
 * Remove sufixo _temp em todos arquivos e pastas dentro de src
 */
function removeSuffix() {
  // Primeiro arquivos, depois pastas (em reverso)
  walkDir(srcDir, (fullPath, entry) => {
    if (entry.isFile()) {
      if (fullPath.endsWith(suffix)) {
        const newName = fullPath.slice(0, -suffix.length);
        safeRename(fullPath, newName);
        return false;
      }
    }
    return true;
  });

  // pastas
  const folders = [];
  function collectFolders(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        collectFolders(fullPath);
        folders.push(fullPath);
      }
    }
  }
  collectFolders(srcDir);
  folders.reverse().forEach((folder) => {
    if (folder.endsWith(suffix)) {
      const newName = folder.slice(0, -suffix.length);
      safeRename(folder, newName);
    }
  });
}

async function main() {
  if (command === 'add') {
    console.log('Corrigindo case dos arquivos/pastas dentro de src...');
    fixCasesInSrc();
    console.log('Adicionando sufixo _temp em arquivos e pastas dentro de src...');
    addSuffix();
    console.log('Processo add finalizado!');
  } else if (command === 'remove') {
    console.log('Removendo sufixo _temp de arquivos e pastas dentro de src...');
    removeSuffix();
    console.log('Processo remove finalizado!');
  }
}

main();
