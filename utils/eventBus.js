class EventBus {
  constructor() {
    this.subscribers = {};
    this.onceSubscribers = {};
  }

  subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(callback);
  }

  unsubscribe(eventType, callback) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType] = this.subscribers[eventType].filter(
        (cb) => cb !== callback
      );
    }
  }

  once(eventType, callback) {
    if (!this.onceSubscribers[eventType]) {
      this.onceSubscribers[eventType] = [];
    }
    this.onceSubscribers[eventType].push(callback);
  }

  async publish(eventType, data) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType].forEach((callback) => callback(data));
    }
    if (this.onceSubscribers[eventType]) {
      this.onceSubscribers[eventType].forEach((callback) => callback(data));
      delete this.onceSubscribers[eventType];
    }
  }

  async asyncPublish(eventType, data) {
    await this.publish(eventType, data);
  }

  async delayedPublish(eventType, data, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    await this.publish(eventType, data);
  }
}

// 示例用法
async function main() {
  const eventBus = new EventBus();

  function callback1(data) {
    console.log("Callback 1:", data);
  }

  function callback2(data) {
    console.log("Callback 2:", data);
  }

  async function callback3(data) {
    console.log("Callback 3:", data);
  }

  async function callback4(data) {
    console.log("Callback 4:", data);
  }

  // 订阅
  eventBus.subscribe("event1", callback1);
  eventBus.once("event2", callback2);
  eventBus.subscribe("event3", callback3);
  eventBus.subscribe("event4", callback4);

  // 同步发布
  eventBus.publish("event1", "Hello");
  eventBus.publish("event1", "World");

  // 仅可发布一次
  eventBus.publish("event2", "once Hello");
  eventBus.publish("event2", "once Hello");

  // 异步发布
  await eventBus.asyncPublish("event3", "Async event");

  // 延时发布
  await eventBus.delayedPublish("event4", "Delayed event", 1000);
}

main();
