import { expect, test } from '@jest/globals'
import { myContainer } from '@/basic/inversify.config'
import { TYPES } from '@/basic/types'
import { Warrior } from '@/basic/interfaces'

const ninja = myContainer.get<Warrior>(TYPES.Warrior)

test('can insert a thing', () => {
  expect(ninja.fight()).toEqual('cut!') // true
  expect(ninja.sneak()).toEqual('hit!') // true
})
