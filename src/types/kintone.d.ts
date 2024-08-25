declare namespace kintone {
  interface Event {
    appId: number;
    record: Record;
  }

  interface Record {
    [fieldCode: string]: Field;
  }

  interface Field {
    type: string;
    value: any;
  }

  namespace events {
    function on(eventType: string, handler: (event: Event) => void): void;
  }
}
