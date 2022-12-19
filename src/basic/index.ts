import 'module-alias/register'
import { Warrior } from '@/basic/interfaces'
import { TYPES } from '@/basic/types'
import { myContainer } from '@/basic/inversify.config'

export class App {
  constructor () {
    this.hitThrow()
  }

  hitThrow (): void {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior)

    const label = ninja.fight()

    console.log(label)
  }
}

export default new App()
