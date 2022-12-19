import { expect, test } from '@jest/globals'
import { myContainer } from '../src/inversify.config'
import { TYPES } from '../src/types'
import { Warrior } from '../src/interfaces'

const ninja = myContainer.get<Warrior>(TYPES.Warrior)

test('can insert a thing', () => {
  expect(ninja.fight()).toEqual('cut!') // true
  expect(ninja.sneak()).toEqual('hit!') // true
})
