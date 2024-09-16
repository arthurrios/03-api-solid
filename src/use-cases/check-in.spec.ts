import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCheckInRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInUseCase } from './check-in'

let checkInRepository: InMemoryCheckInRepository
let sut: CheckInUseCase
describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInRepository()
    sut = new CheckInUseCase(checkInRepository)
  })
  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
