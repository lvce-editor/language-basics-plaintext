import { exportStatic } from '@lvce-editor/shared-process'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))

await exportStatic({
  root,
  extensionPath: root,
  pathPrefix: process.env.PATH_PREFIX,
})
