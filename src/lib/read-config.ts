import { promisify } from 'util'
import fs from 'fs'
import yaml from 'yaml'

export default async () => {
  const readFile = promisify(fs.readFile);
  const file = await readFile('./events-config.yaml', 'utf8');

  const config = yaml.parse(file)

  Object.keys(config.events).map(o => {
    const tokenEnv = config.events[o]['tito-token-env']
    config.events[o]['tito-token'] = process.env[tokenEnv]
  })

  return config
}
