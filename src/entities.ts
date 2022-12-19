import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { Weapon, ThrowableWeapon, Warrior } from './interfaces'
import { TYPES } from './types'

@injectable()
class Katana implements Weapon {
  public hit (): string {
    return 'cut!'
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw (): string {
    return 'hit!'
  }
}

@injectable()
class Ninja implements Warrior {
  private readonly _katana: Weapon
  private readonly _shuriken: ThrowableWeapon

  public constructor (
  @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this._katana = katana
    this._shuriken = shuriken
  }

  public fight (): string {
    return this._katana.hit()
  }

  public sneak (): string {
    return this._shuriken.throw()
  }
}

export { Ninja, Katana, Shuriken }
