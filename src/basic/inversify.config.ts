import { Container } from 'inversify'
import { TYPES } from '@/basic/types'
import { Warrior, Weapon, ThrowableWeapon } from '@/basic/interfaces'
import { Ninja, Katana, Shuriken } from '@/basic/entities'

const myContainer = new Container()
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana)
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)

export { myContainer }
