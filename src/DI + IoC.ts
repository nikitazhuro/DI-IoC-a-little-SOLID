class Engine {};
class Transmission{};
class Chassis{};

class Car {
  // DI
  constructor(engine: Engine, transmission: Transmission, chassis: Chassis) {}

} 

const car = new Car();

car.engine instanceof Engine; // true

export default Car;

// В данном случае используется паттерн — Inversion of Control (IoC),
// суть которого в том, что разработчик часть своих полномочий отдает на откуп внешней программой сущности — функции,
// библиотеке или фреймворку. Касательно DI, IoC заключается в том, что мы просто указываем зависимости при описании класса.
// А созданием инстансов этих зависимостей управляет какой-то внешний код, при инициализации инстанса основного класса.
// По сути IoC паттерн это частичка DI.

// Отличный пример это фреймворк NestJS.