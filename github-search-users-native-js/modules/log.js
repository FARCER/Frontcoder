export class Log {
  constructor() {
  }

  countMessage(counter) {
    return counter ? `Найдено ${counter} пользователей` : `Ничего не найдено`
  }
}
