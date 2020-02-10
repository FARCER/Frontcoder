export class Log {


  counterMessage(counter) {
    return counter ? `Найдено ${counter} пользователей` : 'ничего не найдено';
  }
}