function createPubSub() {
  const subscribers = {};

  return {
    subscribe(event, callback) {
      if (!subscribers[event]) {
        subscribers[event] = [];
      }
      subscribers[event].push(callback);
    },

    unsubscribe(event, callback) {
      subscribers[event] = (subscribers[event] || []).filter(cb => cb !== callback);
    },

    publish(event, data) {
      (subscribers[event] || []).forEach(cb => cb(data));
    }
  };
}

// Usage
const pubsub = createPubSub();

function handleNews(news) {
  console.log("News:", news);
}

pubsub.subscribe("news", handleNews);
pubsub.publish("news", "New JavaScript features released!"); // ✅

pubsub.unsubscribe("news", handleNews);
pubsub.publish("news", "Should not appear."); // ❌
