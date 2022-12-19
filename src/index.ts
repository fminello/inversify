// import { Container } from 'inversify'
import { Warrior } from './interfaces'
import { TYPES } from './types'
import { myContainer } from './inversify.config'

// const container = new Container()

export class App {
  constructor () {
    // this.configDependencies()
    this.hitThrow()
  }

  // configDependencies (): void {
  //   container.bind<Warrior>(TYPES.Warrior).to(Ninja)
  //   container.bind<Weapon>(TYPES.ThrowableWeapon).to(Katana)
  //   container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)
  // }

  hitThrow (): void {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior)

    const label = ninja.fight()

    console.log(label)
  }
}

export default new App()
