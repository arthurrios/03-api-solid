import { beforeEach, describe, expect, it } from 'vitest'
import { compare } from 'bcryptjs'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase
describe('CreateGym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })
  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -15.7962004,
      longitude: -47.9119285,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
