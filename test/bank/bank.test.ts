import { Bank } from '../../src/bank/bank'

describe('Bank', () => {
  let bank: Bank

  beforeEach(() => {
    bank = new Bank()
  })

  describe('deposit', () => {
    test('increases balance by the specified amount', () => {
      bank.deposit(100)
      expect(bank.getBalance()).toBe(100)

      bank.deposit(50)
      expect(bank.getBalance()).toBe(150)
    })
  })

  describe('withdraw', () => {
    test('decreases balance by the specified amount', () => {
      bank.deposit(100)
      expect(bank.getBalance()).toBe(100)

      bank.withdraw(50)
      expect(bank.getBalance()).toBe(50)
    })
  })

  describe('hasEnoughBalance', () => {
    test('should return false if balance is less than 25', () => {
      bank.deposit(15);
      expect(bank.hasEnoughBalance()).toBe(false);
    })

    test('should return true if balance is 25', () => {
      bank.deposit(25);
      expect(bank.hasEnoughBalance()).toBe(true);
    })

    test('should return true if balance is more than 25', () => {
      bank.deposit(40);
      expect(bank.hasEnoughBalance()).toBe(true);
    })
  })
})

